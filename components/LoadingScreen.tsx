import React, { ReactNode, useEffect, useState } from "react";

import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

import ChefHatIcon from "../assets/images/chef-hat.svg";
import NoiseTexture from "./NoiseTexture";
import { colors, typography, commonStyles } from "../styles/globalStyles";

interface LoadingScreenProps {
  children?: ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    RockSalt: require("../assets/fonts/RockSalt-Regular.ttf"),
    LovedbytheKing: require("../assets/fonts/LovedbytheKing-Regular.ttf"),
    Fenix: require("../assets/fonts/Fenix-Regular.ttf"),
  });

  const [assetsReady, setAssetsReady] = useState(false);

  // Simulate assets loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setAssetsReady(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const isReady = fontsLoaded && assetsReady;

  if (!isReady || !children) {
    return (
      <View style={commonStyles.container}>
        <LinearGradient
          colors={[colors.backgroundDark, colors.backgroundMedium]}
          style={commonStyles.linearGradientBackground}
        />
        <NoiseTexture opacity={0.2} />
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <ChefHatIcon 
              width={40} 
              height={40} 
              fill={colors.textLight} 
              stroke="none" 
              color={colors.textLight}
            />
            <Text style={styles.logoText}>btcK'</Text>
          </View>
          <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
          <Text style={styles.loadingText}>Chargement en cours...</Text>
        </View>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    height: 80, // Hauteur fixe comme dans AppLogo
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'RockSalt',
    fontSize: 20,
    color: colors.textLight,
    transform: [{ rotate: '-6deg' }],
    marginTop: -15, // Même espacement que dans AppLogo
  },
  spinner: {
    marginTop: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: typography.fontSizes.lg,
    color: colors.textLight,
    fontWeight: '500',
    fontFamily: 'Fenix',
  },
});

export default LoadingScreen;