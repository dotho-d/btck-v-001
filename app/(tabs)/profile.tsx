import { LinearGradient } from "expo-linear-gradient";
import { Settings, Heart, Clock, BookOpen } from "lucide-react-native";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";

import LoadingScreen from "../../components/LoadingScreen";
import NoiseTexture from "../../components/NoiseTexture";
import { colors, typography, spacing, borderRadius, commonStyles } from "../../styles/globalStyles";

export default function ProfileScreen() {
  return (
    <LoadingScreen>
      <LinearGradient
        colors={[colors.backgroundDark, colors.backgroundMedium]}
        style={commonStyles.container}
      >
        <NoiseTexture />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Text style={styles.headerTitle}>Profil</Text>
              <Pressable style={commonStyles.iconButton}>
                <Settings size={24} color={colors.textLight} />
              </Pressable>
            </View>
            
            <View style={styles.profileSection}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop' }} 
                style={styles.profileImage} 
              />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Sophie Martin</Text>
                <Text style={styles.profileBio}>Passionnée de cuisine saine et rapide</Text>
              </View>
            </View>
            
            <View style={styles.statsSection}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statLabel}>Recettes</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>156</Text>
                <Text style={styles.statLabel}>Favoris</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>38</Text>
                <Text style={styles.statLabel}>Suivis</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.menuSection}>
            <Pressable style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Heart size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuText}>Recettes favorites</Text>
            </Pressable>
            
            <Pressable style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Clock size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuText}>Historique</Text>
            </Pressable>
            
            <Pressable style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <BookOpen size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuText}>Mes recettes</Text>
            </Pressable>
          </View>
          
          <View style={styles.recentActivitySection}>
            <Text style={commonStyles.sectionTitle}>Activité récente</Text>
            {recentActivities.map((activity, index) => (
              <View key={index} style={styles.activityItem}>
                <Image source={{ uri: activity.image }} style={styles.activityImage} />
                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={commonStyles.spacer} />
        </ScrollView>
      </LinearGradient>
    </LoadingScreen>
  );
}

const recentActivities = [
  {
    title: "Vous avez ajouté 'Poulet rôti aux herbes' à vos favoris",
    time: "Il y a 2 heures",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=3076&auto=format&fit=crop"
  },
  {
    title: "Vous avez cuisiné 'Lasagnes végétariennes'",
    time: "Hier",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2835&auto=format&fit=crop"
  },
  {
    title: "Vous avez ajouté 'Saumon grillé' à votre plan de la semaine",
    time: "Il y a 3 jours",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2940&auto=format&fit=crop"
  }
];

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  headerTitle: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: '700',
    color: colors.textLight,
    fontFamily: typography.fontFamilies.fenix
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: spacing.lg,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: typography.fontSizes.xl,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: 4,
    fontFamily: typography.fontFamilies.fenix
  },
  profileBio: {
    fontSize: typography.fontSizes.sm,
    color: colors.textMuted,
    fontFamily: typography.fontFamilies.fenix
  },
  statsSection: {
    flexDirection: 'row',
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: typography.fontSizes.xl,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
    fontFamily: typography.fontFamilies.fenix
  },
  statLabel: {
    fontSize: typography.fontSizes.sm,
    color: colors.textMuted,
    fontFamily: typography.fontFamilies.fenix
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 245, 233, 0.2)',
  },
  menuSection: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  menuText: {
    fontSize: typography.fontSizes.md,
    color: colors.textLight,
    fontWeight: '500',
    fontFamily: typography.fontFamilies.fenix
  },
  recentActivitySection: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxxl,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  activityImage: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.sm,
    marginRight: spacing.md,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: typography.fontSizes.sm,
    color: colors.textLight,
    marginBottom: 4,
    fontFamily: typography.fontFamilies.fenix
  },
  activityTime: {
    fontSize: typography.fontSizes.xs,
    color: colors.textDimmed,
    fontFamily: typography.fontFamilies.fenix
  },
});