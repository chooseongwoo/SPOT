import React from "react";
import MapView from "react-native-maps";

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
      // mapType="terrain"
    />
  );
};

export default FullMap;
