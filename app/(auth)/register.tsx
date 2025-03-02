import { useState } from "react";

import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

import AppLogo from "../../components/AppLogo";
import LoadingScreen from "../../components/LoadingScreen";
import NoiseTexture from "../../components/NoiseTexture";
import { colors, typography, spacing, borderRadius, commonStyles } from "../../styles/globalStyles";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LoadingScreen>
      <View style={commonStyles.container}>
        <LinearGradient
          colors={[colors.backgroundDark, colors.backgroundMedium]}
          style={commonStyles.linearGradientBackground}
        />
        <NoiseTexture opacity={0.2} />

        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft size={24} color={colors.textLight} />
          </Pressable>
          <View style={styles.logoContainer}>
            <AppLogo size="medium" />
          </View>
          <View style={styles.spacer} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Créer un compte</Text>
          <Text style={styles.subtitle}>Rejoignez BatchCooKa&apos; pour commencer à cuisiner plus efficacement !</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={commonStyles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="john.smith@email.com"
                placeholderTextColor={colors.gray}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={commonStyles.inputLabel}>Mot de passe</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="********"
                  placeholderTextColor={colors.gray}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIconButton}
                >
                  {showPassword ? (
                    <EyeOff size={20} color={colors.gray} />
                  ) : (
                    <Eye size={20} color={colors.gray} />
                  )}
                </Pressable>
              </View>
            </View>
            
            {/* Espace supplémentaire avant le bouton */}
            <View style={styles.buttonSpacer} />
            
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.registerButton}
                onPress={() => router.push("/(tabs)")}
              >
                <Text style={styles.registerButtonText}>S&apos;inscrire</Text>
              </Pressable>
            </View>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Déjà un compte ?</Text>
              <Pressable onPress={() => router.push("/(tabs)")}>
                <Text style={styles.loginLink}> Se connecter</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </LoadingScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 15,
    paddingBottom: 15,
    height: 140, // Hauteur augmentée pour un meilleur alignement
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Position relative pour aligner avec le logo
    top: -4, // Ajusté pour être au même niveau que le logo
    left: 16,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80, // Hauteur ajustée pour s'assurer que le texte est visible
    marginLeft: 0, // Déplacer légèrement vers la gauche pour centrer
  },
  spacer: {
    width: 40, // Espace équivalent au bouton de retour pour équilibrer
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: spacing.lg,
    fontFamily: typography.fontFamilies.fenix,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    color: colors.textMuted,
    marginBottom: spacing.xxxl,
    fontFamily: typography.fontFamilies.fenix,
    lineHeight: 24,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: spacing.xxl,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.cardBackgroundDarker,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    color: colors.textLight,
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fontFamilies.fenix,
    width: '56%',
  },
  passwordInputWrapper: {
    width: '56%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackgroundDarker,
    borderRadius: borderRadius.md,
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    padding: spacing.lg,
    color: colors.textLight,
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fontFamilies.fenix,
    paddingRight: 50, // Espace pour l'icône
  },
  eyeIconButton: {
    position: 'absolute',
    right: 0,
    height: '100%',
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpacer: {
    height: 210, // Espace supplémentaire entre le champ de mot de passe et le bouton
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: spacing.xl,
  },
  registerButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: colors.textLight,
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.semiBold.toString() as '600',
    fontFamily: typography.fontFamilies.fenix,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xxl,
  },
  loginText: {
    color: colors.textMuted,
    marginRight: 4,
    fontFamily: typography.fontFamilies.fenix,
    fontSize: typography.fontSizes.md,
  },
  loginLink: {
    color: colors.primary,
    fontWeight: '600',
    fontFamily: typography.fontFamilies.fenix,
    fontSize: typography.fontSizes.md,
  },
});