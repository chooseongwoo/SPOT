import { flex, theme } from "@/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  ${flex.COLUMN_VERTICAL};
  width: 100%;
  height: 100%;
  background: ${theme.white};
  padding: 15px 24px 6px;
  position: relative;
`;

export const ProfileImageBox = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 1px solid ${theme.gray[2]};
`;

export const CameraLayout = styled.Pressable`
  position: absolute;
  border-radius: 100%;
  border: 1px solid ${theme.gray[2]};
  padding: 4px;
  bottom: 0;
  right: 0;
  background: ${theme.white};
`;

export const InputList = styled.View`
  width: 100%;
  ${flex.COLUMN_FLEX};
  gap: 12px;
  margin-top: 30px;
`;
