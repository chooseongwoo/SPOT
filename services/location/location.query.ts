import { queryKey } from "@/constants/queryKey";
import { getAddressFromCoords } from "@/services/location/location.api";
import { useQuery } from "@tanstack/react-query";

export const useAddressQuery = (lat: number, lng: number) => {
  return useQuery({
    queryKey: [queryKey.location.ADDRESS],
    queryFn: () => getAddressFromCoords(lat, lng),
    enabled: !!lat && !!lng,
    refetchOnWindowFocus: true,
  });
};
