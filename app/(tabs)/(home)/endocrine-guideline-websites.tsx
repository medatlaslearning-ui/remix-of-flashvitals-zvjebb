
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { guidelineWebsites } from '@/data/endocrineReferences';

export default function EndocrineGuidelineWebsitesScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  const handleWebsitePress = async (url: string) => {
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
          <IconSymbol name="globe" size={48} color={colors.secondary} />
          <Text style={styles.headerTitle}>Guideline & Authority Websites</Text>
          <Text style={styles.headerSubtitle}>
            Official endocrine medicine resources and guidelines
          </Text>
        </View>

        {/* Websites */}
        {guidelineWebsites.length === 0 ? (
          <View style={styles.emptyState}>
            <IconSymbol name="info.circle" size={48} color={colors.textSecondary} />
            <Text style={styles.emptyStateText}>
              No guideline websites available yet.
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Check back later for official endocrine medicine resources.
            </Text>
          </View>
        ) : (
          <View style={styles.section}>
            {guidelineWebsites.map((website, index) => (
              <Pressable
                key={index}
                style={styles.websiteCard}
                onPress={() => handleWebsitePress(website.url)}
              >
                <View style={styles.websiteContent}>
                  <View style={styles.websiteInfo}>
                    <Text style={styles.websiteName}>{website.name}</Text>
                    <Text style={styles.websiteUrl}>{website.url}</Text>
                    <Text style={styles.websiteDescription}>{website.description}</Text>
                  </View>
                  <IconSymbol name="arrow.up.right" size={20} color={colors.textSecondary} />
                </View>
              </Pressable>
            ))}
          </View>
        )}

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol name="arrow.left" size={20} color={colors.primary} />
            <Text style={styles.backButtonText}>Back to Endocrine Topics</Text>
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
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  websiteCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  websiteContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  websiteInfo: {
    flex: 1,
  },
  websiteName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  websiteUrl: {
    fontSize: 13,
    color: colors.secondary,
    marginBottom: 8,
  },
  websiteDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
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
    color: colors.primary,
  },
});
