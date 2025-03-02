import { StyleSheet, Dimensions } from "react-native";

// Get screen dimensions for responsive sizing
const { height } = Dimensions.get('window');

// Color palette
export const colors = {
  // Primary colors
  primary: '#FF6B35',
  primaryLight: 'rgba(255, 107, 53, 0.2)',
  primaryMedium: 'rgba(255, 107, 53, 0.6)',
  primaryDark: '#E55A2B',

  // Background colors
  backgroundDark: '#2C1810',
  backgroundMedium: '#3D2419',

  // Text colors
  textLight: '#FFF5E9',
  textMuted: 'rgba(255, 245, 233, 0.8)',
  textDimmed: 'rgba(255, 245, 233, 0.6)',

  // UI colors
  cardBackground: 'rgba(255, 245, 233, 0.05)',
  cardBackgroundDarker: 'rgba(255, 245, 233, 0.1)',
  divider: 'rgba(255, 245, 233, 0.1)',

  // Status colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',

  // Misc
  gray: '#8A8A8A',
};

// Typography
export const typography = {
  // Font families
  fontFamilies: {
    rockSalt: 'RockSalt',
    lovedByTheKing: 'LovedbytheKing',
    fenix: 'Fenix',
    default: 'Fenix'
  },

  // Font sizes
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    display: 36,
    logo: 24, // Taille spécifique pour le logo
  },

  // Font weights
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  // Letter spacing
  letterSpacing: {
    fenix: 0,
  },
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  section: 40,
};

// Border radius
export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 25,
  round: 9999,
};

// Shadows
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
};

// Component specific styles
export const componentStyles = {
  // NoiseTexture
  noiseTexture: {
    defaultOpacity: 0.2,
    container: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 1,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  },

  // Particles
  particles: {
    defaultCount: 20,
    defaultColor: '#FFF5E9',
    minSize: 0.2,
    maxSize: 2.4,
    minDuration: 15000,
    maxDuration: 25000,
    container: {
      ...StyleSheet.absoluteFillObject,
      overflow: 'hidden',
      zIndex: 1,
    },
  },

  // Logo
  logo: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      maxHeight: height * 0.12, // Maximum 12% de la hauteur de l'écran
    },
    iconContainer: {
      marginRight: 8,
    },
    icon: {
      width: 28,
      height: 28,
      tintColor: colors.textLight,
    },
    textContainer: {
      flexDirection: 'column',
    },
    batch: {
      fontFamily: 'RockSalt',
      fontSize: typography.fontSizes.logo,
      color: colors.textLight,
      transform: [{ rotate: '-8deg' }],
      marginBottom: -8,
      marginLeft: -20,
    },
    cooka: {
      fontFamily: 'RockSalt',
      fontSize: typography.fontSizes.logo,
      color: colors.textLight,
      transform: [{ rotate: '-8deg' }],
      marginLeft: 16,
      marginRight: -20,
    },
  },
};

// Common styles
export const commonStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Background
  linearGradientBackground: {
    ...StyleSheet.absoluteFillObject,
  },

  // Headers
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    fontFamily: typography.fontFamilies.fenix,
  },
  headerTitle: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.textLight,
    fontFamily: typography.fontFamilies.fenix,
  },

  // Buttons
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.textLight,
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.semiBold.toString() as '600',
    fontFamily: typography.fontFamilies.fenix,
    letterSpacing: typography.letterSpacing.fenix,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: borderRadius.xxl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.semiBold.toString() as '600',
    fontFamily: typography.fontFamilies.fenix,
    letterSpacing: typography.letterSpacing.fenix,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Cards
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  // Text inputs
  input: {
    backgroundColor: colors.cardBackgroundDarker,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    color: colors.textLight,
    fontSize: typography.fontSizes.md,
    fontFamily: typography.fontFamilies.fenix,
    letterSpacing: typography.letterSpacing.fenix,
  },
  inputLabel: {
    fontSize: typography.fontSizes.sm,
    color: colors.textLight,
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamilies.fenix,
    letterSpacing: typography.letterSpacing.fenix,
  },

  // Section titles
  sectionTitle: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold.toString() as '700',
    color: colors.textLight,
    marginBottom: spacing.lg,
    fontFamily: typography.fontFamilies.fenix,
    letterSpacing: typography.letterSpacing.fenix,
  },

  // Lists
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },

  // Images
  roundedImage: {
    borderRadius: borderRadius.md,
  },
  circleImage: {
    borderRadius: borderRadius.round,
  },

  // Welcome screen specific
  welcomeSlogan: {
    fontFamily: typography.fontFamilies.lovedByTheKing,
    fontSize: 20,
    color: colors.textLight,
    marginTop: 4,
    textAlign: 'center',
    letterSpacing: 1,
  },
  welcomeSloganBold: {
    fontFamily: typography.fontFamilies.lovedByTheKing,
    fontSize: 26,
    color: colors.textLight,
    marginTop: -2,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 1,
  },

  // Utility
  spacer: {
    height: 20, // For bottom tab navigation
  },
});

// Export all as a single object for convenience
export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  componentStyles,
  commonStyles,
};
