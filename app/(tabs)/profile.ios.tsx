
import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const theme = useTheme();
  const router = useRouter();

  const quickActions = [
    { id: 'bookmarked', emoji: '🔖', title: 'Bookmarked', color: '#FF9500', route: '/bookmarked' },
    { id: 'favorites', emoji: '❤️', title: 'Favorites', color: '#FF3B30', route: '/favorites' },
    { id: 'ask-expert', emoji: '💬', title: 'Ask Expert', color: '#007AFF', route: '/chatbot' },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <GlassView style={styles.profileHeader} glassEffectStyle="regular">
          <IconSymbol ios_icon_name="person.circle.fill" android_material_icon_name="person" size={80} color={theme.colors.primary} />
          <Text style={[styles.name, { color: theme.colors.text }]}>John Doe</Text>
          <Text style={[styles.email, { color: theme.dark ? '#98989D' : '#666' }]}>john.doe@example.com</Text>
        </GlassView>

        <GlassView style={styles.section} glassEffectStyle="regular">
          <View style={styles.infoRow}>
            <IconSymbol ios_icon_name="phone.fill" android_material_icon_name="phone" size={20} color={theme.dark ? '#98989D' : '#666'} />
            <Text style={[styles.infoText, { color: theme.colors.text }]}>+1 (555) 123-4567</Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol ios_icon_name="location.fill" android_material_icon_name="location-on" size={20} color={theme.dark ? '#98989D' : '#666'} />
            <Text style={[styles.infoText, { color: theme.colors.text }]}>San Francisco, CA</Text>
          </View>
        </GlassView>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
        
        {quickActions.map((action) => (
          <Pressable key={action.id} onPress={() => router.push(action.route as any)}>
            <GlassView style={styles.quickActionCard} glassEffectStyle="regular">
              <View style={[styles.quickActionIcon, { backgroundColor: action.color }]}>
                <Text style={styles.emojiIcon}>{action.emoji}</Text>
              </View>
              <View style={styles.quickActionContent}>
                <Text style={[styles.quickActionTitle, { color: theme.colors.text }]}>
                  {action.emoji} {action.title}
                </Text>
              </View>
              <IconSymbol 
                ios_icon_name="chevron.right" 
                android_material_icon_name="chevron-right" 
                size={20} 
                color={theme.dark ? '#98989D' : '#666'} 
              />
            </GlassView>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 32,
    marginBottom: 16,
    gap: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  section: {
    borderRadius: 12,
    padding: 20,
    gap: 12,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    marginLeft: 4,
  },
  quickActionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  emojiIcon: {
    fontSize: 24,
  },
  quickActionContent: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});
