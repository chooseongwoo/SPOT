import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigations/RootNavigationType";
import * as S from "./style";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: Props) => {
  return (
    <S.Container>
      <Text>회원가입 화면</Text>
    </S.Container>
  );
};

export default RegisterScreen;
