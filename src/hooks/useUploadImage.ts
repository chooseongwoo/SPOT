import {useCallback} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';

const useUploadImage = () => {
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES ||
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: '갤러리 접근 권한 요청',
          message: '프로필 사진을 업로드하기 위해 갤러리 접근이 필요합니다.',
          buttonPositive: '확인',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const uploadImage = useCallback(
    async (setSelectedImage: (uri: string | {uri: string}) => void) => {
      const granted = await requestPermission();
      if (!granted) return;

      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          selectionLimit: 1,
        },
        response => {
          if (response.didCancel || response.errorCode) return;
          const asset = response.assets?.[0];
          if (asset?.uri) {
            setSelectedImage(asset.uri);
          }
        },
      );
    },
    [],
  );

  return uploadImage;
};

export default useUploadImage;
