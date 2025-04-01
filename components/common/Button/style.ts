import { flex, font, theme } from "@/styles";
import styled from "styled-components/native";

interface ButtonProps {
  disabled: boolean;
}

export const ButtonContainer = styled.View<ButtonProps>`
  width: 100%;
  padding: 10px 0;
  position: absolute;
  bottom: 30px;
  height: 56px;
  border-radius: 12px;
  background: ${({ disabled }: ButtonProps) =>
    disabled ? theme.gray[3] : theme.green.default};
  ${flex.CENTER};
`;

export const ButtonText = styled.Text`
  ${font.btn1};
  color: ${({ disabled }: ButtonProps) =>
    disabled ? theme.gray[3] : theme.white};
`;
