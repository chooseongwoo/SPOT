import React from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { customMapStyle } from "@/assets/customMapStyle";

const FullMap = () => {
  return (
    <MapView
      provider={
        Platform.OS === "android" || (Platform.OS === "ios" && Device.isDevice)
          ? PROVIDER_GOOGLE
          : undefined
      }
      style={{ flex: 1 }}
      mapType="terrain"
      customMapStyle={customMapStyle}
    />
  );
};

export default FullMap;
