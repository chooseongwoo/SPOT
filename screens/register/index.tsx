import IconCamera from "@/components/icons/IconCamera";
import * as S from "./style";
import DefaultProfile from "@/assets/images/DefaultProfile.png";

const RegisterScreen = () => {
  return (
    <S.Container>
      <S.ProfileImageBox>
        <S.Image source={DefaultProfile} />
        <S.CameraLayout>
          <IconCamera />
        </S.CameraLayout>
      </S.ProfileImageBox>
    </S.Container>
  );
};

export default RegisterScreen;
