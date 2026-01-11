
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { emergencyMedicineReferences, getSubcategories } from '@/data/emergencyMedicineReferences';

export default function EmergencyMedicineReferencesScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  // Get all subcategories
  const subcategories = getSubcategories('Emergency Medicine References');

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Emergency Medicine References',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="book.fill" size={48} color={colors.error} />
          <Text style={styles.headerTitle}>Emergency Medicine References</Text>
          <Text style={styles.headerSubtitle}>
            All scholarly and guideline-based references
          </Text>
          <Text style={styles.headerDescription}>
            References organized by subtopic (APA format)
          </Text>
        </View>

        {/* References by Subcategory */}
        {subcategories.map((subcategory, subIndex) => {
          const refs = emergencyMedicineReferences.filter(
            ref => ref.category === 'Emergency Medicine References' && ref.subcategory === subcategory
          );

          return (
            <View key={subIndex} style={styles.subcategorySection}>
              {/* Subcategory Header */}
              <View style={styles.subcategoryHeader}>
                <Text style={styles.subcategoryTitle}>{subcategory}</Text>
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>{refs.length}</Text>
                </View>
              </View>

              {/* References List */}
              {refs.map((reference) => (
                <View key={reference.id} style={styles.referenceCard}>
                  {/* Citation */}
                  <Text style={styles.citation}>{reference.citation}</Text>
                </View>
              ))}
            </View>
          );
        })}

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
  subcategorySection: {
    marginBottom: 32,
  },
  subcategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.error,
  },
  subcategoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    flexWrap: 'wrap',
  },
  countBadge: {
    backgroundColor: colors.error,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 8,
  },
  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  referenceCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  citation: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
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
