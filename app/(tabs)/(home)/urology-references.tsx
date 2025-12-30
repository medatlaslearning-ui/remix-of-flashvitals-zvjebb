
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { urologyReferences, getSubcategories } from '@/data/urologyReferences';

export default function UrologyReferencesScreen() {
  const router = useRouter();

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

  // Get all subcategories
  const subcategories = getSubcategories('Urology References');

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Urology References',
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
            color={colors.primary} 
          />
          <Text style={styles.headerTitle}>Urology References</Text>
          <Text style={styles.headerSubtitle}>
            All scholarly and guideline-based references
          </Text>
          <Text style={styles.headerDescription}>
            References organized by subtopic (APA format)
          </Text>
        </View>

        {/* References by Subcategory */}
        {subcategories.map((subcategory, subIndex) => {
          const refs = urologyReferences.filter(
            ref => ref.category === 'Urology References' && ref.subcategory === subcategory
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

                  {/* Link Button */}
                  {reference.link && (
                    <Pressable
                      style={styles.linkButton}
                      onPress={() => handleLinkPress(reference.link)}
                    >
                      <IconSymbol 
                        ios_icon_name="link" 
                        android_material_icon_name="link"
                        size={16} 
                        color={colors.primary} 
                      />
                      <Text style={styles.linkButtonText}>View Source</Text>
                      <IconSymbol 
                        ios_icon_name="arrow.up.right" 
                        android_material_icon_name="open_in_new"
                        size={14} 
                        color={colors.primary} 
                      />
                    </Pressable>
                  )}
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
              color={colors.primary} 
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
    borderBottomColor: colors.primary,
  },
  subcategoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  countBadge: {
    backgroundColor: colors.primary,
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
