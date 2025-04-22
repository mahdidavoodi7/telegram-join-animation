import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Content = () => {
  return (
    <View>
      <Animated.Text style={styles.name}>Kendrick</Animated.Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Feather name="camera" color="#218AB7" size={20} style={{ marginLeft: 4 }} />
        <Text style={{ color: "#218AB7", fontSize: 16 }}>Change Profile Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.button, { marginBottom: 20, marginTop: 20 }]}>
        <View style={[styles.iconContainer, { backgroundColor: "#FE2C55" }]}>
          <FontAwesome5 name="user-circle" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.listButton, { borderRadius: 12, borderBottomEndRadius: 0, borderBottomStartRadius: 0 }]}>
        <View style={[styles.iconContainer, { backgroundColor: "#027BFE" }]}>
          <FontAwesome5 name="bookmark" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Saved Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.listButton}>
        <View style={styles.divider}></View>
        <View style={[styles.iconContainer, { backgroundColor: "#33C659" }]}>
          <FontAwesome5 name="phone-alt" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Recent Calls</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.listButton}>
        <View style={styles.divider}></View>
        <View style={[styles.iconContainer, { backgroundColor: "#FF9400" }]}>
          <MaterialIcons name="devices" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Devices</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.listButton, { borderRadius: 12, borderTopEndRadius: 0, borderTopStartRadius: 0 }]}>
        <View style={styles.divider}></View>
        <View style={[styles.iconContainer, { backgroundColor: "#34AAD9" }]}>
          <MaterialIcons name="folder" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Chat Folders</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.listButton, { borderRadius: 12, borderBottomEndRadius: 0, borderBottomStartRadius: 0, marginTop: 20 }]}>
        <View style={[styles.iconContainer, { backgroundColor: "#FD3C2E" }]}>
          <MaterialIcons name="notifications-active" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Notifications and Sounds</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.listButton}>
        <View style={styles.divider}></View>
        <View style={[styles.iconContainer, { backgroundColor: "#8F8E93" }]}>
          <MaterialIcons name="lock" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Privacy and Security</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.listButton}>
        <View style={styles.divider}></View>
        <View style={[styles.iconContainer, { backgroundColor: "#16C44B" }]}>
          <FontAwesome5 name="database" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Data and Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.listButton, { borderRadius: 12, borderTopEndRadius: 0, borderTopStartRadius: 0 }]}>
        <View style={styles.divider}></View>
        <View style={[styles.iconContainer, { backgroundColor: "#34AAD9" }]}>
          <FontAwesome6 name="circle-half-stroke" color="#FFF" size={16} />
        </View>
        <Text style={{ color: "#000", fontSize: 16 }}>Appearance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '100%',
    textAlign: 'center'
  },
  divider: {
    position: 'absolute',
    width: '92%',
    height: 0.5,
    backgroundColor: "#dddddd",
    top: 0,
    right: 0
  },
  button: {
    height: 48,
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listButton: {
    height: 52,
    backgroundColor: "white",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16
  }
});

export default Content;