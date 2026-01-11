
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { infectiousDiseaseReferences, getSubcategories } from '@/data/infectiousDiseaseReferences';

export default function InfectiousDiseaseReferencesScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  // Get all subcategories
  const subcategories = getSubcategories('Infectious Disease References');

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Infectious Disease References',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol 
            ios_icon_name="book.fill" 
            android_material_icon_name="book"
            size={48} 
            color={colors.accent} 
          />
          <Text style={styles.headerTitle}>Infectious Disease References</Text>
          <Text style={styles.headerSubtitle}>
            All scholarly and guideline-based references
          </Text>
          <Text style={styles.headerDescription}>
            References organized by subtopic (APA format)
          </Text>
        </View>

        {/* References by Subcategory */}
        {subcategories.map((subcategory, subIndex) => {
          const refs = infectiousDiseaseReferences.filter(
            ref => ref.category === 'Infectious Disease References' && ref.subcategory === subcategory
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

                  {/* Applies To */}
                  <Text style={styles.appliesTo}>Applies to: {reference.appliesTo}</Text>
                </View>
              ))}
            </View>
          );
        })}

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol 
              ios_icon_name="arrow.left" 
              android_material_icon_name="arrow_back"
              size={20} 
              color={colors.accent} 
            />
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
    borderBottomColor: colors.accent,
  },
  subcategoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  countBadge: {
    backgroundColor: colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
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
    marginBottom: 8,
  },
  appliesTo: {
    fontSize: 13,
    color: colors.textSecondary,
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
    color: colors.accent,
  },
});
