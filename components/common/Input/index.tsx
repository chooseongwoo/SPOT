import React, { useState } from "react";
import * as S from "./style";
import { theme } from "@/styles";

interface InputProps {
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

const Input = ({ label, placeholder, type = "text" }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.InputContainer>
      <S.LabelText>{label}</S.LabelText>
      <S.TextInputBox
        placeholder={placeholder}
        type={type}
        isFocused={isFocused}
        placeholderTextColor={theme.gray[3]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </S.InputContainer>
  );
};

export default Input;
