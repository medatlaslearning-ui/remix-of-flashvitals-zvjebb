
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { getPulmonaryGuidelineWebsites } from '@/data/pulmonaryReferences';

export default function PulmonaryGuidelineWebsitesScreen() {
  const router = useRouter();
  const guidelineWebsites = getPulmonaryGuidelineWebsites();

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  const handleLinkPress = async (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('Cannot open URL:', url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Guideline & Authority Websites',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="globe" size={48} color={colors.accent} />
          <Text style={styles.headerTitle}>Guideline & Authority Websites</Text>
          <Text style={styles.headerSubtitle}>
            Official pulmonary medicine resources
          </Text>
        </View>

        {/* Empty State */}
        {guidelineWebsites.length === 0 && (
          <View style={styles.emptyState}>
            <IconSymbol name="doc.text" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyStateTitle}>No Websites Added Yet</Text>
            <Text style={styles.emptyStateDescription}>
              Guideline and authority websites will be added here soon.
            </Text>
          </View>
        )}

        {/* Websites List */}
        {guidelineWebsites.map((website) => (
          <View key={website.id} style={styles.websiteCard}>
            <View style={styles.websiteHeader}>
              <IconSymbol name="link" size={24} color={colors.accent} />
              <Text style={styles.websiteName}>{website.name}</Text>
            </View>
            <Text style={styles.websiteDescription}>{website.description}</Text>
            <Pressable
              style={styles.linkButton}
              onPress={() => handleLinkPress(website.url)}
            >
              <Text style={styles.linkButtonText}>Visit Website</Text>
              <IconSymbol name="arrow.up.right" size={14} color={colors.accent} />
            </Pressable>
          </View>
        ))}

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol name="arrow.left" size={20} color={colors.accent} />
            <Text style={styles.backButtonText}>Back to Topics</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 100 : 110,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
  },
  websiteCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  websiteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  websiteName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  websiteDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highlight,
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accent,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highlight,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.accent,
  },
});
