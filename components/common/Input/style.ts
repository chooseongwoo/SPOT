import { flex, font, theme } from "@/styles";
import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  ${flex.COLUMN_FLEX}
  gap: 8px;
`;

export const LabelText = styled.Text`
  ${font.B2};
  color: ${theme.black};
`;

interface TextInputType {
  isFocused: boolean;
}

export const TextInputBox = styled.TextInput<TextInputType>`
  width: 100%;
  padding: 10px 16px;
  ${font.B2};
  color: ${theme.black};
  border: 1px solid
    ${(props: TextInputType) =>
      props.isFocused ? theme.green.active : theme.gray[3]};
  border-radius: 8px;
  height: 56px;
`;
