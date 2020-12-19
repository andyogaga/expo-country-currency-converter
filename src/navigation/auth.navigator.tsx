import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PublicNavigator from "./PublicNavigator";

const RootApp: FC = () => {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
};

export default RootApp;
