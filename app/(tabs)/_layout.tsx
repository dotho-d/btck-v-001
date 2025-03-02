import { Tabs } from 'expo-router';
import { Chrome as Home, Search, User } from 'lucide-react-native';

import AppLogo from '../../components/AppLogo';
import { colors } from '../../styles/globalStyles';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: () => <AppLogo size="medium" />,
        headerStyle: {
          backgroundColor: colors.backgroundDark,
          height: 110, // Hauteur augmentée pour un meilleur alignement
        },
        headerTitleContainerStyle: {
          paddingTop: 10, // Ajustement du padding pour centrer verticalement le logo
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.backgroundDark,
          borderTopColor: colors.backgroundMedium,
          height: 74, // Hauteur de la tabBar pour un meilleur alignement
          paddingTop: 8, // Ajout d'un padding en haut pour centrer verticalement les icônes
          paddingBottom: 12, // Ajout d'un padding en bas pour centrer verticalement les icônes
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          paddingBottom: 4, // Ajuste l'espacement du texte
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ size, color }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Recherche',
          tabBarIcon: ({ size, color }) => (
            <Search size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ size, color }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}