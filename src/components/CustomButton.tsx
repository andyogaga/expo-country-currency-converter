import React, { FC, ReactNode } from "react";
import { TouchableOpacity, ActivityIndicator, TextStyle } from "react-native";
import { withTheme, Theme } from "react-native-elements";
import CustomText from "./CustomText";
import { FADED } from "../utils/constants";

type CustomButtonProps = {
  theme: Theme;
  primary?: boolean;
  secondary?: boolean;
  white?: boolean;
  height?: number;
  width?: number;
  onPress?: () => void;
  padding?: number;
  fontSize?: number;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  style?: any;
  textStyle?: TextStyle;
};

const CustomButton: FC<CustomButtonProps> = ({
  theme,
  primary,
  secondary,
  white,
  height,
  width,
  onPress = () => {},
  padding = 7,
  fontSize = 18,
  children,
  disabled = false,
  loading = false,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disabled
          ? FADED
          : primary
          ? theme?.colors?.primary
          : secondary
          ? theme?.colors?.secondary
          : white
          ? "white"
          : theme?.colors?.primary,
        padding,
        width: width ? width : "60%",
        height: height ? height : 40,
        borderRadius: height ? height / 2 : 20,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator
          size={20}
          color={primary || secondary ? "white" : theme?.colors?.primary}
          style={{ alignSelf: "center" }}
        />
      ) : (
        <CustomText
          style={{
            color: primary || secondary ? "white" : theme?.colors?.primary,
            alignSelf: "center",
            fontSize,
            fontWeight: "bold",
            ...textStyle,
          }}
        >
          {children}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default withTheme(CustomButton);
