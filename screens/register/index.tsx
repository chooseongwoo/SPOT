import { IconCamera } from "@/components/icons";
import * as S from "./style";
import DefaultProfile from "@/assets/images/DefaultProfile.png";
import { Input, Button } from "@/components/common";
import { RootStackParamList } from "@/navigations/RootNavigationType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { useUploadImage } from "@/hooks";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | File>(
    DefaultProfile
  );

  const uploadImage = useUploadImage();

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
        <S.CameraLayout onPress={() => uploadImage(setSelectedImage)}>
          <IconCamera />
        </S.CameraLayout>
      </S.ProfileImageBox>
      <S.InputList>
        <Input label="닉네임" placeholder="닉네임을 입력해주세요" />
      </S.InputList>
      <Button
        title="완료"
        onPress={() => {
          return 0;
        }}
        isDisabled={false}
      />
    </S.Container>
  );
};

export default RegisterScreen;
