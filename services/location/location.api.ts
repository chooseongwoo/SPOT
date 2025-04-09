import { GoogleGeocodeResponse } from "@/types/googleGeocode.type";
import axios from "axios";

export const getAddressFromCoords = async (lat: number, lng: number) => {
  const { data } = await axios.get<GoogleGeocodeResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
  );
  return data.results[0];
};
