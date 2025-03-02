import React from "react";

import { View, StyleSheet, Image, ViewStyle, ImageStyle } from "react-native";

import { componentStyles } from "../styles/globalStyles";


interface NoiseTextureProps {
  opacity?: number;
}

const NoiseTexture: React.FC<NoiseTextureProps> = ({
  opacity = componentStyles.noiseTexture.defaultOpacity
}) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Image
        source={require("../assets/images/home_screen_bg.png")}
        style={[styles.noiseImage, { opacity }]}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...componentStyles.noiseTexture.container as ViewStyle,
  },
  noiseImage: {
    ...componentStyles.noiseTexture.image as ImageStyle,
    width: '100%', // Assurez-vous que width est un nombre ou un pourcentage
    height: '100%', // Assurez-vous que height est un nombre ou un pourcentage
  },
});

export default NoiseTexture;
