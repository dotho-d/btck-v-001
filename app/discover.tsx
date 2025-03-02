import React, { useState, useEffect } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";

import AppLogo from "../components/AppLogo";
import LoadingScreen from "../components/LoadingScreen";
import NoiseTexture from "../components/NoiseTexture";
import { colors, typography, spacing, borderRadius, commonStyles } from "../styles/globalStyles";

export default function DiscoverScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
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
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=2940&auto=format&fit=crop' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <View style={styles.heroTitleContainer}>
              <View style={styles.titleWrapper}>
                <Text style={[styles.title, styles.titleBatch]}>batch</Text>
                <Text style={[styles.title, styles.titleCooka]}>cooKa&apos;</Text>
              </View>
              <Text style={styles.heroSubtitleInline}>révolutionne ta façon de cuisiner !</Text>
            </View>
          </View>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>De l&apos;élaboration du menu à la cuisine</Text>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=2876&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Choisis des plats appétissant</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Choisis les plats que tu aimerais manger au cours de la semaine.
                </Text>
                <Text style={styles.featureDescription}>
                  Tu peux aussi choisir un de nos menus &quot;découverte&quot; si tu ne sais pas par où commencer.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Optimise TON menu</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Un menu de la semaine est généré automatiquement en se basant sur tes informations.
                </Text>
                <Text style={styles.featureDescription}>
                  Tu peux le réorganiser comme tu le souhaites !
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=2876&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Génère ta liste de courses</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Une liste de courses est générée automatiquement en se basant sur le menu de la semaine.
                </Text>
                <Text style={styles.featureDescription}>
                  Tracke tes courses en temps réel et n&apos;oublie plus aucun ingrédient !
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Moins de réflexion, plus d&apos;actions</Text>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1607877361964-d8a8f69567d8?q=80&w=2787&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Le batchcooking : la base !</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Cuisine une fois pour toute la semaine.
                </Text>
                <Text style={styles.featureDescription}>
                  L&apos;application s&apos;occupe de l&apos;organisation et détaille la mise en œuvre, pour toi.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=2876&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Suis des étapes simples</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Ce que tu dois cuisiner, dans l&apos;ordre que tu dois le faire, de la façon dont tu dois le faire.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Un commis de cuisine numérique
              </Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Pose ton smartphone en mode paysage et pose-lui des questions en cas de doute.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Un suivi maîtrisé</Text>
          
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1607877361964-d8a8f69567d8?q=80&w=2787&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Suivi de tes objectifs</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  Tracke ta progression et atteins les objectifs que tu t&apos;es fixés.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop' }}
                style={styles.featureImage}
              />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Suivi de la date de péremption</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.featureDescription}>
                  L&apos;application génère des dates de péremption en fonction du produit et te notifie à l&apos;approche d&apos;une date butoire.
                </Text>
                <Text style={styles.featureDescription}>
                  Finis le gaspillage alimentaire !
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <Pressable
            style={commonStyles.primaryButton}
            onPress={() => router.push("/(auth)/register")}
          >
            <Text style={commonStyles.primaryButtonText}>Créer un compte</Text>
          </Pressable>
        </View>

        <View style={commonStyles.spacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: spacing.lg,
    paddingBottom: 15,
    height: 126, // Hauteur augmentée pour un meilleur alignement
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Position relative pour aligner avec le logo
    top: 0, // Ajusté pour être au même niveau que le logo
    left: 15,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100, // Hauteur ajustée pour s'assurer que le texte est visible
    top: 6, // Ajusté pour être au même niveau que le logo
    right: 20,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  heroSection: {
    height: 150,
    position: 'relative',
    marginBottom: spacing.xl,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'rgba(44, 24, 16, 0.7)',
  },
  heroTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Centrer verticalement
  },
  titleWrapper: {
    width: 120,
    height: 50,
    position: 'relative',
  },
  title: {
    fontSize: 22,
    fontFamily: 'RockSalt',
    color: colors.textLight,
    position: 'absolute',
  },
  titleBatch: {
    transform: [{ rotate: "-8deg" }],
    top: -10,
    left: -15,
  },
  titleCooka: {
    transform: [{ rotate: "-8deg" }],
    top: 6,
    left: 45,
  },
  heroSubtitleInline: {
    fontSize: typography.fontSizes.xxxl,
    color: colors.textMuted,
    fontFamily: 'LovedbytheKing',
    marginTop: 0, // Ajuster la marge pour aligner avec le titre
    textAlign: 'center', // Centrer le texte
  },
  featuresSection: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xxl,
  },
  sectionTitle: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold.toString() as '600',
    color: colors.textLight,
    marginBottom: spacing.xl,
    fontFamily: typography.fontFamilies.fenix,
    lineHeight: 28,
    paddingHorizontal: spacing.md,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    marginHorizontal: 'auto',
    width: '92%', // Largeur uniforme pour toutes les cartes
    alignSelf: 'center',
  },
  featureIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: spacing.lg,
    alignSelf: 'flex-start', // Fixe l'image en haut
  },
  featureImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: '600',
    color: colors.textLight,
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamilies.fenix,
    letterSpacing: 0.5,
  },
  descriptionContainer: {
    flexDirection: 'column',
    gap: spacing.sm,
    width: '100%', // Assure que le conteneur prend toute la largeur disponible
    marginLeft: 0, // Supprime le décalage négatif
    paddingLeft: 0, // Supprime le padding compensatoire
    paddingTop: spacing.xs,
  },
  featureDescription: {
    fontSize: typography.fontSizes.md,
    color: colors.textMuted,
    fontFamily: typography.fontFamilies.fenix,
    lineHeight: 20,
  },
  ctaSection: {
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.xxxl,
    marginTop: 0,
  },
  ctaTitle: {
    fontSize: typography.fontSizes.xl,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: spacing.sm,
    textAlign: 'center',
    fontFamily: typography.fontFamilies.fenix,
  },
  ctaDescription: {
    fontSize: typography.fontSizes.md,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.xl,
    fontFamily: typography.fontFamilies.fenix,
    lineHeight: 20,
  },
});