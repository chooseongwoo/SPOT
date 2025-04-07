import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const FullMap = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 35.189062673028,
        longitude: 128.90405082258,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0022,
      }}
      mapType="terrain"
      provider={PROVIDER_GOOGLE}
    />
  );
};

export default FullMap;
