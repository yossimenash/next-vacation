import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAuth0, Auth0Provider } from "react-native-auth0";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { RootStoreContext } from "./src/store";
import { useAppDependencies } from "./appDependencies";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const dependencies = useAppDependencies();

  if (!isLoadingComplete || !dependencies) {
    return null;
  } else {
    return (
      <RootStoreContext.Provider value={dependencies.store}>
        <Auth0Provider
          domain={"dev-sqmjxto5b6hjzu5u.us.auth0.com"}
          clientId={"TsDs7XK1oW765Ax5hV8zyVICqyyzYN1H"}
        >
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Auth0Provider>
      </RootStoreContext.Provider>
    );
  }
}
