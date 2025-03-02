import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight } from 'lucide-react-native';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';

import LoadingScreen from '../../components/LoadingScreen';
import NoiseTexture from '../../components/NoiseTexture';
import { colors, typography, spacing, borderRadius, commonStyles } from '../../styles/globalStyles';

export default function HomeScreen() {
  return (
    <LoadingScreen>
      <LinearGradient
        colors={[colors.backgroundDark, colors.backgroundMedium]}
        style={commonStyles.container}
      >
        <NoiseTexture />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={commonStyles.header}>
            <Text style={styles.welcomeText}>Bonjour Chef !</Text>
          </View>

          <View style={styles.featuredSection}>
            <Text style={commonStyles.sectionTitle}>Recettes populaires</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScroll}
            >
              {popularRecipes.map((recipe, index) => (
                <Pressable key={index} style={styles.recipeCard}>
                  <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
                  <View style={styles.recipeInfo}>
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <View style={styles.recipeMetaInfo}>
                      <Text style={styles.recipeTime}>{recipe.time} min</Text>
                      <Text style={styles.recipeDifficulty}>{recipe.difficulty}</Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <View style={styles.categoriesSection}>
            <View style={commonStyles.spaceBetween}>
              <Text style={commonStyles.sectionTitle}>Catégories</Text>
              <Pressable style={styles.seeAllButton}>
                <Text style={styles.seeAllText}>Voir tout</Text>
                <ChevronRight size={16} color={colors.primary} />
              </Pressable>
            </View>
            <View style={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <Pressable key={index} style={styles.categoryCard}>
                  <Image source={{ uri: category.image }} style={styles.categoryImage} />
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.weeklyPlanSection}>
            <Text style={commonStyles.sectionTitle}>Votre plan de la semaine</Text>
            <Pressable style={styles.weeklyPlanCard}>
              <LinearGradient
                colors={[colors.primaryMedium, 'rgba(255, 107, 53, 0.6)']}
                style={styles.weeklyPlanGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View style={styles.weeklyPlanContent}>
                  <Text style={styles.weeklyPlanTitle}>Plan de repas</Text>
                  <Text style={styles.weeklyPlanSubtitle}>Organisez vos repas pour la semaine</Text>
                  <Pressable style={styles.weeklyPlanButton}>
                    <Text style={styles.weeklyPlanButtonText}>Commencer</Text>
                  </Pressable>
                </View>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop' }}
                  style={styles.weeklyPlanImage}
                />
              </LinearGradient>
            </Pressable>
          </View>
          <View style={commonStyles.spacer} />
        </ScrollView>
      </LinearGradient>
    </LoadingScreen>
  );
}

const popularRecipes = [
  {
    title: 'Poulet rôti aux herbes',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=3076&auto=format&fit=crop',
    time: 45,
    difficulty: 'Facile'
  },
  {
    title: 'Lasagnes végétariennes',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2835&auto=format&fit=crop',
    time: 60,
    difficulty: 'Moyen'
  },
  {
    title: 'Saumon grillé',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2940&auto=format&fit=crop',
    time: 30,
    difficulty: 'Facile'
  }
];

const categories = [
  {
    title: 'Petit-déjeuner',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2940&auto=format&fit=crop'
  },
  {
    title: 'Déjeuner',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3000&auto=format&fit=crop'
  },
  {
    title: 'Dîner',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2940&auto=format&fit=crop'
  },
  {
    title: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2787&auto=format&fit=crop'
  }
];

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  welcomeText: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold.toString() as '700',
    color: colors.textLight,
    marginTop: spacing.sm,
    fontFamily: typography.fontFamilies.fenix,
  },
  featuredSection: {
    marginTop: spacing.xl,
  },
  horizontalScroll: {
    marginLeft: -8,
  },
  recipeCard: {
    width: 280,
    height: 180,
    marginRight: spacing.lg,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    backgroundColor: colors.backgroundMedium,
  },
  recipeImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  recipeInfo: {
    padding: spacing.md,
  },
  recipeTitle: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semiBold.toString() as '600',
    color: colors.textLight,
    marginBottom: 4,
    fontFamily: typography.fontFamilies.fenix,
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeTime: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    fontFamily: typography.fontFamilies.fenix,
  },
  recipeDifficulty: {
    fontSize: typography.fontSizes.sm,
    color: colors.textMuted,
    fontFamily: typography.fontFamilies.fenix,
  },
  categoriesSection: {
    marginTop: spacing.xxxl,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    marginRight: 4,
    fontFamily: typography.fontFamilies.fenix,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 120,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(44, 24, 16, 0.7)',
    padding: spacing.sm,
    color: colors.textLight,
    fontWeight: typography.fontWeights.semiBold.toString() as '600',
    textAlign: 'center',
    fontFamily: typography.fontFamilies.fenix,
  },
  weeklyPlanSection: {
    marginTop: spacing.xxxl,
    marginBottom: spacing.xxl,
  },
  weeklyPlanCard: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    height: 180,
  },
  weeklyPlanGradient: {
    flexDirection: 'row',
    height: '100%',
  },
  weeklyPlanContent: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  weeklyPlanTitle: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold.toString() as '700',
    color: colors.textLight,
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamilies.fenix,
  },
  weeklyPlanSubtitle: {
    fontSize: typography.fontSizes.sm,
    color: colors.textLight,
    marginBottom: spacing.lg,
    opacity: 0.9,
    fontFamily: typography.fontFamilies.fenix,
  },
  weeklyPlanButton: {
    backgroundColor: colors.textLight,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.xl,
    alignSelf: 'flex-start',
  },
  weeklyPlanButtonText: {
    color: colors.primary,
    fontWeight: typography.fontWeights.semiBold.toString() as '600',
    fontFamily: typography.fontFamilies.fenix,
  },
  weeklyPlanImage: {
    width: '40%',
    height: '100%',
    resizeMode: 'cover',
  },
});