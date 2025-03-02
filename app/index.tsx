import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

import ChefHatIcon from "../assets/images/chef-hat.svg";
import LoadingScreen from "../components/LoadingScreen";
import NoiseTexture from "../components/NoiseTexture";
import Particles from "../components/Particles";
import { colors, typography, commonStyles } from "../styles/globalStyles";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LoadingScreen>
      <View style={commonStyles.container}>
        <LinearGradient
          colors={[colors.backgroundDark, colors.backgroundMedium]}
          style={commonStyles.linearGradientBackground}
        />
        <NoiseTexture opacity={0.2} />
        <Particles
          count={34}
          color={colors.textLight}
          minSize={0.4}
          maxSize={2.4}
          minDuration={15000}
          maxDuration={25000}
        />
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <ChefHatIcon 
              width={60} 
              height={60} 
              fill={colors.textLight} 
              stroke="none" 
              color={colors.textLight}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.titleBatch]}>batch</Text>
            <Text style={[styles.title, styles.titleCooka]}>cooKa&apos;</Text>
            <Text style={commonStyles.welcomeSlogan}>L&apos;app&apos; qu&apos;il te faut pour cuisiner efficacement</Text>
            <Text style={commonStyles.welcomeSloganBold}>une bonne fois pour toute !</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[commonStyles.primaryButton, styles.primaryButton]}
              onPress={() => router.push("/(auth)/register")}
            >
              <Text style={[commonStyles.primaryButtonText, styles.buttonText]}>
                S&apos;inscrire
              </Text>
            </Pressable>
            <Pressable
              style={[commonStyles.secondaryButton, styles.secondaryButton]}
              onPress={() => router.push("/discover")}
            >
              <Text style={[commonStyles.secondaryButtonText, styles.buttonText]}>
                Découvrir
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LoadingScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C1810",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 200,
    paddingHorizontal: 24,
    zIndex: 3,
  },
  iconContainer: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 74,
    alignItems: "center",
  },
  title: {
    fontSize: typography.fontSizes.display,
    fontFamily: typography.fontFamilies.rockSalt,
    color: colors.textLight,
  },
  titleBatch: {
    transform: [{ rotate: "-8deg" }],
    marginLeft: -100,
    marginBottom: -64,
  },
  titleCooka: {
    transform: [{ rotate: "-8deg" }],
    marginRight: -100,
  },

  buttonContainer: {
    width: "100%",
    gap: 24,
    alignItems: "center",
  },

  primaryButton: {
    width: 150,
    paddingVertical: 14,
  },
  secondaryButton: {
    width: 150,
    paddingVertical: 12,
  },
  buttonText: {
    fontFamily: typography.fontFamilies.fenix,
    fontWeight: typography.fontWeights.regular.toString() as '400',
    fontSize: typography.fontSizes.lg,
  },
});