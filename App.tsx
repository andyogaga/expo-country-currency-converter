import React from "react";
import { StyleSheet, View, Image } from "react-native";
import "react-native-gesture-handler";
import "react-native-paper";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "react-native-elements";

import Store from "./src/store";

import AlertComponent from "./src/components/Alert";
import RootApp from "./src/navigation/auth.navigator";
import {
  PRI_COLOR,
  SEC_COLOR,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  FADED,
} from "./src/utils/constants";
import Logo from "./src/assets/icons/country.png";
import ErrorBoundary from "./src/components/ErrorBoundary";

const persistor = persistStore(Store);

const ThemedApp = () => {
  const theme = {
    colors: {
      primary: PRI_COLOR,
      secondary: SEC_COLOR,
      text: "#444444",
      faded: FADED,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <RootApp />
      <AlertComponent />
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={Store}>
        <PersistGate
          persistor={persistor}
          loading={
            <View
              style={{
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
          }
        >
          <ThemedApp />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
