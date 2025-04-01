import * as ImagePickerIOS from "expo-image-picker";
import { useCallback } from "react";

const useUploadImage = () => {
  const [status, requestPermission] =
    ImagePickerIOS.useMediaLibraryPermissions();

  const uploadImage = useCallback(
    async (setSelectedImage: (uri: string) => void) => {
      if (!status?.granted) {
        const permission = await requestPermission();
        if (!permission.granted) return;
      }

      const result = await ImagePickerIOS.launchImageLibraryAsync({
        mediaTypes: ImagePickerIOS.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
        aspect: [1, 1],
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    },
    [status]
  );

  return uploadImage;
};

export default useUploadImage;
