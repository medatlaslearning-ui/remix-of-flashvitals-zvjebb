
import React, { useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useFlashcards } from "@/hooks/useFlashcards";
import * as Haptics from "expo-haptics";

export default function ProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { getBookmarkedFlashcards, getFavoriteFlashcards, getDifficultFlashcards } = useFlashcards();

  // Calculate counts
  const bookmarkedCount = useMemo(() => getBookmarkedFlashcards().length, [getBookmarkedFlashcards]);
  const favoritesCount = useMemo(() => getFavoriteFlashcards().length, [getFavoriteFlashcards]);
  const difficultCount = useMemo(() => getDifficultFlashcards().length, [getDifficultFlashcards]);

  const quickActions = [
    { 
      title: "Favorites", 
      emoji: "❤️",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'favorites' },
      count: favoritesCount,
      color: '#E91E63'
    },
    { 
      title: "Bookmarked", 
      emoji: "🔖",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'bookmarked' },
      count: bookmarkedCount,
      color: '#FF9800'
    },
    { 
      title: "Difficult", 
      emoji: "⚠️",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'difficult' },
      count: difficultCount,
      color: '#F44336'
    },
    { 
      title: "Ask Dr. Elias Reed", 
      emoji: "💬",
      route: "/(tabs)/(home)/chatbot", 
      params: {},
      color: '#9C27B0'
    },
    { 
      title: "Progress Report", 
      emoji: "📊",
      route: "/progress-report", 
      params: {},
      color: '#2196F3'
    }
  ];

  const handleQuickAction = (route: string, params?: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (params && Object.keys(params).length > 0) {
      router.push({ pathname: route as any, params });
    } else {
      router.push(route as any);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
      >
        <GlassView style={[
          styles.profileHeader,
          { backgroundColor: theme.dark ? 'rgba(100, 181, 246, 0.15)' : '#E3F2FD' }
        ]} glassEffectStyle="regular">
          <Text style={styles.headerEmoji}>👤</Text>
          <Text style={[styles.name, { color: theme.colors.text }]}>John Doe</Text>
          <Text style={[styles.email, { color: theme.dark ? '#98989D' : '#666' }]}>john.doe@example.com</Text>
        </GlassView>

        <GlassView style={[
          styles.section,
          { backgroundColor: theme.dark ? 'rgba(100, 181, 246, 0.15)' : '#E3F2FD' }
        ]} glassEffectStyle="regular">
          <View style={styles.infoRow}>
            <Text style={styles.infoEmoji}>📞</Text>
            <Text style={[styles.infoText, { color: theme.colors.text }]}>+1 (555) 123-4567</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoEmoji}>📍</Text>
            <Text style={[styles.infoText, { color: theme.colors.text }]}>San Francisco, CA</Text>
          </View>
        </GlassView>

        {/* Quick Actions Section */}
        <View style={styles.quickActionsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
          <View style={styles.tilesGrid}>
            {quickActions.map((action, index) => (
              <Pressable
                key={index}
                onPress={() => handleQuickAction(action.route, action.params)}
                style={({ pressed }) => [
                  styles.tile,
                  { 
                    opacity: pressed ? 0.7 : 1,
                    backgroundColor: action.color
                  }
                ]}
              >
                <Text style={styles.tileEmoji}>{action.emoji}</Text>
                <Text style={styles.tileTitle}>
                  {action.title}
                </Text>
                {action.count !== undefined && (
                  <Text style={styles.tileCount}>
                    {action.count}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>
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
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 32,
    marginBottom: 16,
    gap: 12,
  },
  headerEmoji: {
    fontSize: 64,
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
  infoEmoji: {
    fontSize: 20,
  },
  infoText: {
    fontSize: 16,
  },
  quickActionsContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  tilesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  tileEmoji: {
    fontSize: 32,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  tileCount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
