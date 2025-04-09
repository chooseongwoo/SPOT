import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { customMapStyle } from "@/assets/customMapStyle";
import Geolocation, {
  GeoPosition,
  GeoError,
} from "react-native-geolocation-service";

const requestPermission = async () => {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    }
    return "granted";
  } catch (e) {
    console.log(e);
    return null;
  }
};

const FullMap = () => {
  const [location, setLocation] = useState<GeoPosition | null>(null);

  useEffect(() => {
    (async () => {
      const result = await requestPermission();
      if (result === "granted") {
        Geolocation.getCurrentPosition(
          (position: GeoPosition) => {
            setLocation(position);
          },
          (error: GeoError) => {
            console.log("위치 에러:", error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000,
          }
        );
      }
    })();
  }, []);

  const region: Region | undefined = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }
    : undefined;

  return (
    <>
      {region && (
        <MapView
          provider={
            Platform.OS === "android" ||
            (Platform.OS === "ios" && Device.isDevice)
              ? PROVIDER_GOOGLE
              : undefined
          }
          style={{ flex: 1 }}
          initialRegion={region}
          showsUserLocation={true}
          mapType="terrain"
          customMapStyle={customMapStyle}
        />
      )}
    </>
  );
};

export default FullMap;
