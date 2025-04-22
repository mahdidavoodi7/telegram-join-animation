import {
  Dimensions,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useMemo } from 'react';
import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Group,
  Paint,
  RoundedRect,
} from '@shopify/react-native-skia';
import Animated, {
  Extrapolation,
  interpolate,
  scrollTo,
  useAnimatedProps,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import Content from './Content';

// Constants for the animation and layout
const MAX_RADIUS = 45;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MARGIN_TOP = 110;

function MeatBall() {
  // Get safe area insets and screen dimensions
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();

  // Initialize scroll-related values
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollY = useSharedValue(MARGIN_TOP);
  const canvasMarginTop = insets.top === 20 ? 0 : 47;

  // Create animated version of BlurView component
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  // === Scroll handler for managing scroll interactions ===
  const scrollHandler = useAnimatedScrollHandler({
    // Update scrollY value on scroll
    onScroll: (event) => {
      scrollY.value = MARGIN_TOP - event.contentOffset.y;
    },
    // Snap to positions when drag ends
    onEndDrag: (event) => {
      const y = event.contentOffset.y;
      if (y > 0 && y < MARGIN_TOP - MAX_RADIUS) {
        scrollTo(scrollRef, 0, 0, true);
      } else if (y >= MARGIN_TOP - MAX_RADIUS && y < MARGIN_TOP) {
        scrollTo(scrollRef, 0, MARGIN_TOP, true);
      }
    },
  });

  // === Derived values for animation ===
  const radius = useDerivedValue(() =>
    interpolate(scrollY.value, [0, MARGIN_TOP - MAX_RADIUS * 1.5], [0, MAX_RADIUS], Extrapolation.CLAMP)
  );

  const blurScale = useDerivedValue(() =>
    interpolate(scrollY.value, [0, MARGIN_TOP - MAX_RADIUS * 2], [0, 1], Extrapolation.CLAMP)
  );

  const imageOpacity = useDerivedValue(() =>
    interpolate(scrollY.value, [MAX_RADIUS / 2, MARGIN_TOP], [0, 1], Extrapolation.CLAMP)
  );

  const circleOpacity = useDerivedValue(() =>
    scrollY.value < MARGIN_TOP ? 1 : 0
  );

  const animatedBlurProps = useAnimatedProps(() => {
    const intensity = interpolate(scrollY.value, [20, MARGIN_TOP], [30, 0]);
    return { intensity };
  });

  // === Styles ===
  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: blurScale.value }],
    opacity: imageOpacity.value,
    width: MAX_RADIUS * 2,
    height: MAX_RADIUS * 2,
    borderRadius: MAX_RADIUS * 2,
    position: 'absolute',
    top: 0,
    left: 0,
  }));

  const blurContainerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: scrollY.value },
      { scale: blurScale.value },
    ],
    opacity: imageOpacity.value,
    width: MAX_RADIUS * 2,
    height: MAX_RADIUS * 2,
    borderRadius: MAX_RADIUS * 2,
    position: 'absolute',
    top: canvasMarginTop - MAX_RADIUS,
    left: (screenWidth - MAX_RADIUS * 2) / 2,
    zIndex: 100,
    overflow: 'hidden',
  }));

  // === Skia layer ===
  const skiaLayer = useMemo(() => (
    <Paint>
      <Blur blur={10} />
      <ColorMatrix
        matrix={[
          1, 0, 0, 0, 0,
          0, 1, 0, 0, 0,
          0, 0, 1, 0, 0,
          0, 0, 0, 60, -30,
        ]}
      />
    </Paint>
  ), []);

  const rectWidth = 120;
  const rectHeight = 30;
  const rectX = (screenWidth - rectWidth) / 2;
  const rectY = -rectHeight;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{
            height: 1000,
            paddingTop: MARGIN_TOP + MAX_RADIUS * 2 + canvasMarginTop / 2,
            paddingHorizontal: 16
          }}
        >
          <Content />
        </Animated.ScrollView>

        {/* Blur and Image container */}
        <Animated.View style={blurContainerStyle}>
          <AnimatedBlurView
            animatedProps={animatedBlurProps}
            style={{
              width: MAX_RADIUS * 2,
              height: MAX_RADIUS * 2,
              borderRadius: MAX_RADIUS * 2,
              zIndex: 10000,
            }}
          />
          <Animated.Image
            source={{
              uri: 'https://indierocks.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/bfi_thumb/Kendrick-Lamar-Pulitzer-tbmd7so9762geckhssc5d7x9kcuoyoroa6164ms49du5is9eb387cy17m8lc0.jpg',
            }}
            style={imageStyle}
          />
        </Animated.View>

        {/* Skia canvas for blur effect */}
        <Canvas pointerEvents="none" style={[styles.canvas, { marginTop: canvasMarginTop }]}>
          <Group opacity={circleOpacity} layer={skiaLayer}>
            <Circle cx={screenWidth / 2} cy={scrollY} r={radius} />
            <RoundedRect x={rectX} y={rectY} width={rectWidth} height={rectHeight} r={10} />
          </Group>
        </Canvas>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEEF2"
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT,
  },
  name: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 28,
    fontWeight: '500'
  },
});

export default MeatBall;