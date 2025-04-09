import { font, theme } from "@/styles";
import styled from "styled-components/native";

export const AddressText = styled.Text`
  position: absolute;
  left: 24px;
  top: 50px;
  ${font.T3};
  color: ${theme.black};
`;
