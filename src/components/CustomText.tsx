import React, { FC, ReactNode } from "react";
import { Text } from "react-native";

const CustomText: FC<{ children?: ReactNode; style?: any }> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text {...props} style={{ fontSize: 16, ...style, fontFamily: "Roboto" }}>
      {children}
    </Text>
  );
};

export default CustomText;
