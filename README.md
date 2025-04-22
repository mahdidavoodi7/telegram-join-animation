# Telegram-Style Join Animation (React Native)

A sleek and modern join animation inspired by Telegram's in-call UI — built using **Expo**, **react-native-skia**, and **Reanimated**.  
When a user joins, their profile photo pops out smoothly with a dynamic island-like effect.

<p align="center">
  <img src="preview.gif" alt="Preview" width="300" />
</p>



## 🚀 Tech Stack

- [Expo](https://expo.dev/)
- [react-native-skia](https://shopify.github.io/react-native-skia/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)



## 📦 Features

- Smooth pop-in animation
- Skia-powered rendering for high performance
- Telegram-style layout inspiration
- Easily extendable and customizable



## ⚠️ Not Production Ready

This code is a demo and **not production ready** as-is.  
You need to handle device-specific logic yourself.

> ✅ Use [`react-native-device-info`](https://github.com/react-native-device-info/react-native-device-info)  
> to detect if the device has a **notch** or **Dynamic Island**, and adjust positioning/styling accordingly.



## ✨ How to Use

```bash
git clone https://github.com/your-repo/telegram-join-animation
cd telegram-join-animation
yarn install
expo start