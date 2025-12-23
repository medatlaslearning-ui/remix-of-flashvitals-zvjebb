
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { getEmergencyMedicineGuidelineWebsites } from '@/data/emergencyMedicineReferences';

export default function EmergencyMedicineGuidelineWebsitesScreen() {
  const router = useRouter();
  const guidelineWebsites = getEmergencyMedicineGuidelineWebsites();

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
          <IconSymbol name="globe" size={48} color={colors.error} />
          <Text style={styles.headerTitle}>Guideline & Authority Websites</Text>
          <Text style={styles.headerSubtitle}>
            Official emergency medicine resources
          </Text>
        </View>

        {/* Websites List */}
        <View style={styles.section}>
          {guidelineWebsites.map((website) => (
            <Pressable
              key={website.id}
              style={styles.websiteCard}
              onPress={() => handleLinkPress(website.url)}
            >
              <View style={styles.websiteContent}>
                <View style={styles.iconContainer}>
                  <IconSymbol name="link.circle.fill" size={32} color={colors.error} />
                </View>
                <View style={styles.websiteInfo}>
                  <Text style={styles.websiteName}>{website.name}</Text>
                  <Text style={styles.websiteDescription}>{website.description}</Text>
                  <View style={styles.urlContainer}>
                    <IconSymbol name="arrow.up.right.circle" size={14} color={colors.textSecondary} />
                    <Text style={styles.websiteUrl}>{website.url}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

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
    textAlign: 'center',
  },
  headerSubtitle: {
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
    alignItems: 'flex-start',
    gap: 12,
  },
  iconContainer: {
    marginTop: 4,
  },
  websiteInfo: {
    flex: 1,
  },
  websiteName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
    lineHeight: 22,
  },
  websiteDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  urlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  websiteUrl: {
    fontSize: 12,
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
    color: colors.error,
  },
});
