import { IconCamera } from "@/components/icons";
import * as S from "./style";
import DefaultProfile from "@/assets/images/DefaultProfile.png";
import { Input, Button } from "@/components/common";
import { RootStackParamList } from "@/navigations/RootNavigationType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import * as ImagePickerIOS from "expo-image-picker";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | File>(
    DefaultProfile
  );

  const [status, requestPermission] =
    ImagePickerIOS.useMediaLibraryPermissions();

  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    const result = await ImagePickerIOS.launchImageLibraryAsync({
      mediaTypes: ImagePickerIOS.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.canceled) {
      return null;
    }

    setSelectedImage(result.assets[0].uri);
  };

  return (
    <S.Container>
      <S.ProfileImageBox>
        <S.Image
          source={
            typeof selectedImage === "string"
              ? { uri: selectedImage }
              : selectedImage
          }
        />
        <S.CameraLayout onPress={uploadImage}>
          <IconCamera />
        </S.CameraLayout>
      </S.ProfileImageBox>
      <S.InputList>
        <Input label="닉네임" placeholder="닉네임을 입력해주세요" />
      </S.InputList>
      <Button
        title="완료"
        onPress={() => {
          navigation.replace("Login");
        }}
        isDisabled={false}
      />
    </S.Container>
  );
};

export default RegisterScreen;
