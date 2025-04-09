import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@/navigations/RootNavigator";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import QueryClientProvider from "@/providers/QueryProviders";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await new Promise((res) => setTimeout(res, 1000));
      setReady(true);
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) return null;

  return (
    <QueryClientProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </QueryClientProvider>
  );
}
