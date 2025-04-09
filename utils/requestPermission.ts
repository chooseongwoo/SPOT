import Geolocation from "react-native-geolocation-service";
import { Platform } from "react-native";

export const requestPermission = async () => {
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
