import React from 'react';
import MeatBall from './Meatball';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { gestureHandlerRootHOC, GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <MeatBall />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const AppContainer = gestureHandlerRootHOC(App);

export default AppContainer;