
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";

export default function ProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [isTopicBreakdownExpanded, setIsTopicBreakdownExpanded] = useState(false);

  const handleQuickAction = (route: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push(route as any);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <GlassView style={styles.profileHeader} glassEffectStyle="regular">
          <IconSymbol ios_icon_name="person.circle.fill" android_material_icon_name="account-circle" size={80} color={theme.colors.primary} />
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

        {/* Quick Actions Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
        </View>

        <View style={styles.quickActionsGrid}>
          <Pressable 
            style={styles.actionTile}
            onPress={() => handleQuickAction('/(tabs)/(home)/flashcards')}
          >
            <GlassView style={styles.actionTileContent} glassEffectStyle="regular">
              <View style={[styles.actionIconCircle, { backgroundColor: '#007AFF' }]}>
                <IconSymbol ios_icon_name="bookmark.fill" android_material_icon_name="bookmark" color="#FFFFFF" size={28} />
              </View>
              <Text style={[styles.actionTileTitle, { color: theme.colors.text }]}>Bookmarked</Text>
              <Text style={[styles.actionTileSubtitle, { color: theme.dark ? '#98989D' : '#666' }]}>Saved cards</Text>
            </GlassView>
          </Pressable>

          <Pressable 
            style={styles.actionTile}
            onPress={() => handleQuickAction('/(tabs)/(home)/flashcards')}
          >
            <GlassView style={styles.actionTileContent} glassEffectStyle="regular">
              <View style={[styles.actionIconCircle, { backgroundColor: '#FF2D55' }]}>
                <IconSymbol ios_icon_name="heart.fill" android_material_icon_name="favorite" color="#FFFFFF" size={28} />
              </View>
              <Text style={[styles.actionTileTitle, { color: theme.colors.text }]}>Favorites</Text>
              <Text style={[styles.actionTileSubtitle, { color: theme.dark ? '#98989D' : '#666' }]}>Favorite cards</Text>
            </GlassView>
          </Pressable>

          <Pressable 
            style={styles.actionTile}
            onPress={() => handleQuickAction('/(tabs)/(home)/chatbot')}
          >
            <GlassView style={styles.actionTileContent} glassEffectStyle="regular">
              <View style={[styles.actionIconCircle, { backgroundColor: '#34C759' }]}>
                <IconSymbol ios_icon_name="message.fill" android_material_icon_name="chat" color="#FFFFFF" size={28} />
              </View>
              <Text style={[styles.actionTileTitle, { color: theme.colors.text }]}>Ask Expert</Text>
              <Text style={[styles.actionTileSubtitle, { color: theme.dark ? '#98989D' : '#666' }]}>AI assistant</Text>
            </GlassView>
          </Pressable>
        </View>

        {/* Your Progress Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Your Progress</Text>
        </View>

        <GlassView style={styles.section} glassEffectStyle="regular">
          <View style={styles.progressRow}>
            <Text style={[styles.progressLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Cards Reviewed</Text>
            <Text style={[styles.progressValue, { color: theme.colors.text }]}>156</Text>
          </View>
          <View style={styles.progressRow}>
            <Text style={[styles.progressLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Quizzes Taken</Text>
            <Text style={[styles.progressValue, { color: theme.colors.text }]}>23</Text>
          </View>
          <View style={styles.progressRow}>
            <Text style={[styles.progressLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Average Score</Text>
            <Text style={[styles.progressValue, { color: theme.colors.text }]}>87%</Text>
          </View>
        </GlassView>

        {/* Topic Breakdown - Collapsible */}
        <Pressable 
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setIsTopicBreakdownExpanded(!isTopicBreakdownExpanded);
          }}
        >
          <GlassView style={styles.topicBreakdownHeader} glassEffectStyle="regular">
            <Text style={[styles.topicBreakdownTitle, { color: theme.colors.text }]}>Topic Breakdown</Text>
            <IconSymbol 
              ios_icon_name={isTopicBreakdownExpanded ? "chevron.up" : "chevron.down"} 
              android_material_icon_name={isTopicBreakdownExpanded ? "expand-less" : "expand-more"} 
              size={24} 
              color={theme.dark ? '#98989D' : '#666'} 
            />
          </GlassView>
        </Pressable>

        {isTopicBreakdownExpanded && (
          <GlassView style={styles.section} glassEffectStyle="regular">
            <View style={styles.topicRow}>
              <Text style={[styles.topicName, { color: theme.colors.text }]}>Cardiology</Text>
              <Text style={[styles.topicProgress, { color: theme.dark ? '#98989D' : '#666' }]}>45/60 cards</Text>
            </View>
            <View style={styles.topicRow}>
              <Text style={[styles.topicName, { color: theme.colors.text }]}>Pulmonary</Text>
              <Text style={[styles.topicProgress, { color: theme.dark ? '#98989D' : '#666' }]}>32/50 cards</Text>
            </View>
            <View style={styles.topicRow}>
              <Text style={[styles.topicName, { color: theme.colors.text }]}>Neurology</Text>
              <Text style={[styles.topicProgress, { color: theme.dark ? '#98989D' : '#666' }]}>28/45 cards</Text>
            </View>
            <View style={styles.topicRow}>
              <Text style={[styles.topicName, { color: theme.colors.text }]}>Gastroenterology</Text>
              <Text style={[styles.topicProgress, { color: theme.dark ? '#98989D' : '#666' }]}>19/40 cards</Text>
            </View>
            <View style={styles.topicRow}>
              <Text style={[styles.topicName, { color: theme.colors.text }]}>Endocrine</Text>
              <Text style={[styles.topicProgress, { color: theme.dark ? '#98989D' : '#666' }]}>15/35 cards</Text>
            </View>
          </GlassView>
        )}
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
    paddingBottom: 100,
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
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 16,
  },
  sectionHeader: {
    marginBottom: 12,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  actionTile: {
    flex: 1,
    minWidth: '30%',
    maxWidth: '32%',
  },
  actionTileContent: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    minHeight: 120,
    justifyContent: 'center',
  },
  actionIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  actionTileTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  actionTileSubtitle: {
    fontSize: 11,
    textAlign: 'center',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 16,
  },
  progressValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  topicBreakdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  topicBreakdownTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  topicName: {
    fontSize: 16,
    fontWeight: '500',
  },
  topicProgress: {
    fontSize: 14,
  },
});
