
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { guidelineWebsites } from '@/data/hematologyReferences';

export default function HematologyGuidelineWebsitesScreen() {
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
          <IconSymbol name="globe" size={48} color={colors.error} />
          <Text style={styles.headerTitle}>Guideline & Authority Websites</Text>
          <Text style={styles.headerSubtitle}>
            Official hematology resources and guidelines
          </Text>
        </View>

        {/* Empty State */}
        {guidelineWebsites.length === 0 && (
          <View style={styles.emptyState}>
            <IconSymbol name="doc.text" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyStateTitle}>No Guidelines Yet</Text>
            <Text style={styles.emptyStateDescription}>
              Guideline websites will be added soon
            </Text>
          </View>
        )}

        {/* Websites List */}
        {guidelineWebsites.map((website, index) => (
          <Pressable
            key={index}
            style={styles.websiteCard}
            onPress={() => handleWebsitePress(website.url)}
          >
            <View style={styles.websiteContent}>
              <View style={styles.iconContainer}>
                <IconSymbol name="link.circle.fill" size={32} color={colors.error} />
              </View>
              <View style={styles.websiteInfo}>
                <Text style={styles.websiteName}>{website.name}</Text>
                <Text style={styles.websiteDescription}>{website.description}</Text>
                <Text style={styles.websiteUrl}>{website.url}</Text>
              </View>
              <IconSymbol name="arrow.up.right" size={20} color={colors.textSecondary} />
            </View>
          </Pressable>
        ))}

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol name="arrow.left" size={20} color={colors.error} />
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
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
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
  websiteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highlight,
    borderRadius: 24,
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
  websiteDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 18,
  },
  websiteUrl: {
    fontSize: 12,
    color: colors.error,
    fontStyle: 'italic',
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
    color: colors.error,
  },
});
