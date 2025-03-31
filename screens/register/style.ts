import { flex, theme } from "@/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  ${flex.COLUMN_VERTICAL};
  width: 100%;
  height: 100%;
  background: ${theme.white};
  padding: 15px 24px 6px;
`;

export const ProfileImageBox = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  width: 80;
  height: 80;
  border-radius: 100%;
  border: 1px solid ${theme.gray[2]};
`;

export const CameraLayout = styled.View`
  position: absolute;
  border-radius: 100%;
  border: 1px solid ${theme.gray[2]};
  padding: 4px;
  bottom: 0;
  right: 0;
`;
