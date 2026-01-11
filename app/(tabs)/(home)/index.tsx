
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { quickActions, medicalSystems } from '@/components/homeData';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();

  const handleQuickActionPress = (route: string) => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push(route as any);
  };

  const handleSystemPress = (route: string) => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push(route as any);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>MedAtlas Scholar</Text>
          <Text style={styles.headerSubtitle}>Master medical knowledge</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <Pressable
                key={action.route}
                style={({ pressed }) => [
                  styles.quickActionCard,
                  { backgroundColor: action.color },
                  pressed && styles.pressed,
                ]}
                onPress={() => handleQuickActionPress(action.route)}
              >
                <Text style={styles.emoji}>{action.emoji}</Text>
                <Text style={styles.quickActionTitle}>{action.title}</Text>
                <Text style={styles.quickActionSubtitle}>{action.subtitle}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Medical Systems */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Systems</Text>
          {medicalSystems.map((system) => (
            <Pressable
              key={system.system}
              style={({ pressed }) => [
                styles.systemCard,
                { borderLeftColor: system.color },
                pressed && styles.pressed,
              ]}
              onPress={() => handleSystemPress(system.route)}
            >
              <View style={[styles.systemIconContainer, { backgroundColor: system.color }]}>
                <Text style={styles.systemEmoji}>{system.emoji}</Text>
              </View>
              <View style={styles.systemContent}>
                <Text style={styles.systemTitle}>{system.system}</Text>
                <Text style={styles.systemDescription}>{system.description}</Text>
              </View>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="chevron_right"
                color={colors.grey}
                size={20}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    backgroundColor: colors.backgroundAlt,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey + '20',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  quickActionCard: {
    width: '47%',
    margin: '1.5%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 4,
    textAlign: 'center',
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
    textAlign: 'center',
  },
  systemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  systemIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  systemEmoji: {
    fontSize: 24,
  },
  systemContent: {
    flex: 1,
  },
  systemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  systemDescription: {
    fontSize: 14,
    color: colors.grey,
  },
  pressed: {
    opacity: 0.7,
  },
});
