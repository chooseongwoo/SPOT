import { IconCamera } from "@/components/icons";
import * as S from "./style";
import DefaultProfile from "@/assets/images/DefaultProfile.png";
import { Input, Button } from "@/components/common";
import { RootStackParamList } from "@/navigations/RootNavigationType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: Props) => {
  return (
    <S.Container>
      <S.ProfileImageBox>
        <S.Image source={DefaultProfile} />
        <S.CameraLayout>
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
