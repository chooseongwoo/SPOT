import React from "react";
import * as S from "./style";

interface ButtonProps {
  title: string;
  isDisabled: boolean;
  onPress: () => void;
}

const Button = ({ title, onPress, isDisabled }: ButtonProps) => {
  return (
    <S.ButtonContainer onPress={onPress} disabled={isDisabled}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.ButtonContainer>
  );
};

export default Button;
