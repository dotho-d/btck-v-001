import React from "react";

import { View, Text, StyleSheet, ViewStyle } from "react-native";

import ChefHatIcon from "../assets/images/chef-hat.svg";
import { colors, typography, componentStyles } from "../styles/globalStyles";

interface AppLogoProps {
  size?: 'small' | 'medium' | 'large';
  horizontal?: boolean;
}

const AppLogo: React.FC<AppLogoProps> = ({
  size = 'medium',
  horizontal = false
}) => {
  // Ajuster la taille en fonction du paramètre
  const getSize = () => {
    switch (size) {
      case 'small':
        return {
          iconWidth: 30,
          iconHeight: 30,
          fontSize: 15
        };
      case 'large':
        return {
          iconWidth: 50,
          iconHeight: 50,
          fontSize: 25
        };
      case 'medium':
      default:
        return {
          iconWidth: 40,
          iconHeight: 40,
          fontSize: 20
        };
    }
  };

  const { iconWidth, iconHeight, fontSize } = getSize();

  return horizontal ? (
    <View style={styles.horizontalContainer}>
      <View style={styles.iconContainer}>
        <ChefHatIcon 
          width={iconWidth} 
          height={iconHeight} 
          fill={colors.textLight} 
          stroke="none" 
          color={colors.textLight}
        />
      </View>
      <Text style={[styles.singleText, { fontSize }]}>btcK'</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <ChefHatIcon 
        width={iconWidth} 
        height={iconHeight} 
        fill={colors.textLight} 
        stroke="none" 
        color={colors.textLight}
      />
      <Text style={[styles.singleText, { fontSize }]}>btcK'</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80, // Hauteur fixe pour contenir l'icône et le texte
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  iconContainer: {
    marginRight: 8,
  },
  singleText: {
    fontFamily: typography.fontFamilies.rockSalt,
    color: colors.textLight,
    transform: [{ rotate: '-6deg' }],
    marginTop: -15, // Espace entre l'icône et le texte
  }
});

export default AppLogo;