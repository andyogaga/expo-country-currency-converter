/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, FC } from "react";
import Splash from "./splash";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SplashContainer: FC = () => {
  const navigation = useNavigation();
  const firstAccess = useSelector(({ auth }) => auth.firstAccess);
  useEffect(() => {
    setTimeout(() => {
      if (firstAccess) {
        navigation.navigate("Onboarding");
      } else {
        navigation.navigate("Home");
      }
    }, 2000);
    return () => {
      clearTimeout();
    };
  }, [firstAccess]);

  return <Splash />;
};

export default SplashContainer;
