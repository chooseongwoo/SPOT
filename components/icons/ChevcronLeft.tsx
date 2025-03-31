import { IconType } from "@/types/icon.type";
import React from "react";
import Svg, { Path, G } from "react-native-svg";

const ChevronLeft = ({ onPress }: IconType) => {
  return (
    <Svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      onPress={onPress}
    >
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.665 3.225C12.965 3.525 12.965 4.015 12.665 4.315L4.985 11.995L12.665 19.675C12.965 19.975 12.965 20.465 12.665 20.765C12.365 21.065 11.875 21.065 11.575 20.765L3.345 12.545C3.045 12.245 3.045 11.755 3.345 11.455L11.565 3.225C11.865 2.925 12.355 2.925 12.655 3.225H12.665Z"
          fill="#212124"
        />
      </G>
    </Svg>
  );
};

export default ChevronLeft;
