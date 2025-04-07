export default {
  name: "SPOT",
  slug: "SPOT",
  version: "1.0.0",
  entryPoint: "./index.js",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "SPOT",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.chooseongwoo.SPOT",
  },
  android: {
    package: "com.chooseongwoo.SPOT",
    adaptiveIcon: {
      foregroundImage: "./assets/images/icon.png",
      backgroundColor: "#ffffff",
    },
  },
  plugins: [
    [
      "expo-splash-screen",
      {
        image: "./assets/images/icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "9ced5193-e990-43fa-b133-4d2eab5c4119",
    },
  },
  owner: "chooseongwoo",
};
