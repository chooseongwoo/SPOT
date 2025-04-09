import React, { useEffect, useState } from "react";
import { Platform, Text } from "react-native";
import * as Device from "expo-device";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { customMapStyle } from "@/assets/customMapStyle";
import Geolocation, {
  GeoPosition,
  GeoError,
} from "react-native-geolocation-service";
import { requestPermission } from "@/utils/locationPermission";
import { useAddressQuery } from "@/services/location/location.query";

const FullMap = () => {
  const [location, setLocation] = useState<GeoPosition | null>(null);
  const { latitude, longitude } = location?.coords || {
    latitude: 0,
    longitude: 0,
  };

  const { data: currentLocation } = useAddressQuery(latitude, longitude);

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
        latitude: latitude,
        longitude: longitude,
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
          mapType="terrain"
          customMapStyle={customMapStyle}
          showsUserLocation={true}
        >
          <Text style={{ position: "absolute", left: 20, top: 40 }}>
            {currentLocation?.formatted_address}
          </Text>
        </MapView>
      )}
    </>
  );
};

export default FullMap;
