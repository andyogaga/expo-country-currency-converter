/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants";
import Logo from "../../assets/icons/chat.png";
import CustomText from "../../components/CustomText";

const Splash: FC = () => {
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={Logo}
          style={{
            alignSelf: "center",
            width: 156,
            height: 156,
          }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: SCREEN_HEIGHT * 0.1,
        }}
      >
        <ActivityIndicator size={40} color="#fff" />
        <CustomText style={{ color: "#fff", marginTop: SCREEN_HEIGHT * 0.1 }}>
          By Andy Ogaga
        </CustomText>
      </View>
    </View>
  );
};

export default Splash;
