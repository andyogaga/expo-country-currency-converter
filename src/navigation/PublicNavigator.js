import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashContainer from "../screens/splash/splash.container";
import Onboarding from "../screens/onboarding/onboarding.component";
import Countries from "../screens/countries/countries.component";

const Stack = createStackNavigator();

function PublicNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashContainer} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Countries} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;
