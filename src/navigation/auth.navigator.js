import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PublicNavigator from "./PublicNavigator";

function RootApp() {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
}

export default RootApp;
