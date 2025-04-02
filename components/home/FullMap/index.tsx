import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const FullMap = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.5665,
        longitude: 126.978,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      provider={PROVIDER_DEFAULT}
    />
  );
};

export default FullMap;
