import { useEffect, useState } from "react";

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import LoadingScreen from "../components/LoadingScreen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    RockSalt: require("../assets/fonts/RockSalt-Regular.ttf"),
    LovedbytheKing: require("../assets/fonts/LovedbytheKing-Regular.ttf"),
    Fenix: require("../assets/fonts/Fenix-Regular.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      // Simulate additional loading time if needed
      const timer = setTimeout(() => {
        setIsReady(true);
        if (typeof window !== 'undefined') {
          window.frameworkReady?.();
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}