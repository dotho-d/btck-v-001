import { useState, useEffect } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Search as SearchIcon, X } from "lucide-react-native";
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, Image } from "react-native";

import LoadingScreen from "../../components/LoadingScreen";
import NoiseTexture from "../../components/NoiseTexture";
import { colors, typography, spacing, borderRadius, commonStyles } from "../../styles/globalStyles";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tout');
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
    <LinearGradient
      colors={[colors.backgroundDark, colors.backgroundMedium]}
      style={commonStyles.container}
    >
      <NoiseTexture />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recherche</Text>

        <View style={styles.searchContainer}>
          <SearchIcon size={20} color={colors.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher des recettes..."
            placeholderTextColor={colors.gray}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={() => setSearchQuery('')} style={styles.clearButton}>
              <X size={18} color={colors.gray} />
            </Pressable>
          )}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
          contentContainerStyle={styles.filtersContent}
        >
          {filters.map((filter, index) => (
            <Pressable
              key={index}
              style={[
                styles.filterChip,
                activeFilter === filter && styles.activeFilterChip
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.activeFilterText
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.popularSearchesSection}>
          <Text style={commonStyles.sectionTitle}>Recherches populaires</Text>
          <View style={styles.popularSearchesGrid}>
            {popularSearches.map((item, index) => (
              <Pressable key={index} style={styles.popularSearchItem}>
                <Text style={styles.popularSearchText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.trendingSection}>
          <View style={commonStyles.spaceBetween}>
            <Text style={commonStyles.sectionTitle}>Tendances</Text>
            <Pressable>
              <Text style={styles.seeAllText}>Voir tout</Text>
            </Pressable>
          </View>

          {trendingRecipes.map((recipe, index) => (
            <Pressable key={index} style={styles.recipeCard}>
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Text style={styles.recipeDescription}>{recipe.description}</Text>
                <View style={styles.recipeMetaInfo}>
                  <Text style={styles.recipeTime}>{recipe.time} min</Text>
                  <View style={styles.recipeDifficultyContainer}>
                    <Text style={styles.recipeDifficulty}>{recipe.difficulty}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={commonStyles.spacer} />
      </ScrollView>
    </LinearGradient>
  );
}

const filters = ['Tout', 'Petit-déjeuner', 'Déjeuner', 'Dîner', 'Desserts', 'Végétarien', 'Rapide'];

const popularSearches = [
  'Poulet', 'Végétarien', 'Sans gluten', 'Rapide', 'Pâtes', 'Healthy', 'Dessert'
];

const trendingRecipes = [
  {
    title: 'Bowl de Buddha aux légumes grillés',
    description: 'Un repas équilibré et coloré avec des légumes de saison',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop',
    time: 30,
    difficulty: 'Facile'
  },
  {
    title: 'Curry de pois chiches',
    description: 'Un plat végétarien riche en protéines et en saveurs',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2371&auto=format&fit=crop',
    time: 45,
    difficulty: 'Moyen'
  },
  {
    title: 'Smoothie bowl aux fruits rouges',
    description: 'Un petit-déjeuner frais et vitaminé pour bien commencer la journée',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=2898&auto=format&fit=crop',
    time: 15,
    difficulty: 'Facile'
  }
];

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  headerTitle: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: spacing.xl,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackgroundDarker,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: colors.textLight,
    fontSize: typography.fontSizes.md,
  },
  clearButton: {
    padding: 4,
  },
  filtersContainer: {
    marginBottom: spacing.sm,
  },
  filtersContent: {
    paddingRight: spacing.lg,
  },
  filterChip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.cardBackgroundDarker,
    marginRight: spacing.sm,
  },
  activeFilterChip: {
    backgroundColor: colors.primary,
  },
  filterText: {
    color: colors.textLight,
    fontSize: typography.fontSizes.sm,
  },
  activeFilterText: {
    fontWeight: '600',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  popularSearchesSection: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xxxl,
  },
  popularSearchesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  popularSearchItem: {
    backgroundColor: colors.cardBackgroundDarker,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  popularSearchText: {
    color: colors.textLight,
    fontSize: typography.fontSizes.sm,
  },
  trendingSection: {
    marginBottom: spacing.xxl,
  },
  seeAllText: {
    color: colors.primary,
    fontSize: typography.fontSizes.sm,
    fontWeight: '500',
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    height: 120,
  },
  recipeImage: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
  },
  recipeInfo: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'space-between',
  },
  recipeTitle: {
    fontSize: typography.fontSizes.md,
    fontWeight: '600',
    color: colors.textLight,
    marginBottom: 4,
  },
  recipeDescription: {
    fontSize: typography.fontSizes.xs,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipeTime: {
    fontSize: typography.fontSizes.xs,
    color: colors.primary,
    fontWeight: '500',
  },
  recipeDifficultyContainer: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
  },
  recipeDifficulty: {
    fontSize: typography.fontSizes.xs,
    color: colors.primary,
  },
});