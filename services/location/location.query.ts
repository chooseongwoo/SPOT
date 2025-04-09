import { queryKey } from "@/constants/queryKey";
import { getAddressFromCoords } from "@/services/location/location.api";
import { GoogleGeocodeResult } from "@/types/googleGeocode.type";
import { useQuery } from "@tanstack/react-query";

export const useAddressQuery = (lat: number, lng: number) => {
  return useQuery<GoogleGeocodeResult>({
    queryKey: [queryKey.location.ADDRESS, lat, lng],
    queryFn: () => getAddressFromCoords(lat, lng),
    enabled: !!lat && !!lng,
    refetchOnWindowFocus: true,
  });
};
