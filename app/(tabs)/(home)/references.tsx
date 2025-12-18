
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { infectiousDiseaseReferences, getReferencesByCategory } from '@/data/infectiousDiseaseReferences';

export default function ReferencesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const system = params.system as string || 'Infectious Disease';
  const topic = params.topic as string || 'Bacterial Organisms';

  // Map topic names to subcategories
  const getSubcategory = (topicName: string): string => {
    if (topicName === 'Bacterial Organisms') {
      return 'Bacterial Infections';
    } else if (topicName === 'Fungal Infections') {
      return 'Fungal Infections';
    }
    return topicName;
  };

  // Get references for this topic
  const subcategory = getSubcategory(topic);
  const references = getReferencesByCategory(system, subcategory);

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
          title: 'References',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="book.fill" size={48} color={colors.accent} />
          <Text style={styles.headerTitle}>References</Text>
          <Text style={styles.headerSubtitle}>
            {system} → {topic}
          </Text>
          <Text style={styles.headerDescription}>
            Scholarly and guideline-based references (2021 or newer)
          </Text>
        </View>

        {/* References List */}
        <View style={styles.section}>
          {references.length === 0 ? (
            <View style={styles.emptyState}>
              <IconSymbol name="doc.text" size={48} color={colors.textSecondary} />
              <Text style={styles.emptyStateText}>No references available</Text>
            </View>
          ) : (
            references.map((reference, index) => (
              <View key={reference.id} style={styles.referenceCard}>
                {/* Reference Number and Year */}
                <View style={styles.referenceHeader}>
                  <View style={styles.refNumberBadge}>
                    <Text style={styles.refNumberText}>{reference.refNumber}</Text>
                  </View>
                  <View style={styles.yearBadge}>
                    <Text style={styles.yearText}>{reference.year}</Text>
                  </View>
                </View>

                {/* Citation */}
                <Text style={styles.citation}>{reference.citation}</Text>

                {/* Applies To */}
                <View style={styles.appliesSection}>
                  <Text style={styles.appliesLabel}>Applies to:</Text>
                  <Text style={styles.appliesText}>{reference.appliesTo}</Text>
                </View>

                {/* Link Button */}
                <Pressable
                  style={styles.linkButton}
                  onPress={() => handleLinkPress(reference.link)}
                >
                  <IconSymbol name="link" size={16} color={colors.primary} />
                  <Text style={styles.linkButtonText}>View Source</Text>
                  <IconSymbol name="arrow.up.right" size={14} color={colors.primary} />
                </Pressable>
              </View>
            ))
          )}
        </View>

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol name="arrow.left" size={20} color={colors.primary} />
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
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 24,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 16,
  },
  referenceCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  referenceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  refNumberBadge: {
    backgroundColor: colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  refNumberText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  yearBadge: {
    backgroundColor: colors.highlight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  yearText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  citation: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  appliesSection: {
    backgroundColor: colors.highlight,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  appliesLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  appliesText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
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
    color: colors.primary,
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
