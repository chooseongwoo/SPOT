import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    name: "SPOT",
    slug: "SPOT",
    version: "1.0.0",
    entryPoint: "./index.js",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "SPOT",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    owner: "chooseongwoo",
    extra: {
      eas: {
        projectId: process.env.EXPO_PUBLIC_EAS_ID,
      },
      googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.chooseongwoo.SPOT",
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
      },
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
  };
};
