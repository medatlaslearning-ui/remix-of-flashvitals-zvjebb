
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { guidelineWebsites } from '@/data/gastroenterologyReferences';

export default function GastroenterologyGuidelineWebsitesScreen() {
  const router = useRouter();

  const handleWebsitePress = async (url: string, name: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Opening website:', name, url);
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error('Cannot open URL:', url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Guideline Websites',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="globe" size={48} color={colors.accent} />
          <Text style={styles.headerTitle}>Guideline & Authority Websites</Text>
          <Text style={styles.headerSubtitle}>
            Official gastroenterology resources and guidelines
          </Text>
        </View>

        {/* Websites */}
        <View style={styles.section}>
          {guidelineWebsites.map((website, index) => (
            <Pressable
              key={index}
              style={styles.websiteCard}
              onPress={() => handleWebsitePress(website.url, website.name)}
            >
              <View style={styles.websiteContent}>
                <View style={styles.iconContainer}>
                  <IconSymbol name="link" size={24} color={colors.accent} />
                </View>
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

        {/* Info Box */}
        <View style={styles.infoBox}>
          <IconSymbol name="info.circle" size={20} color={colors.accent} />
          <Text style={styles.infoText}>
            Tap any website to open it in your browser. These are official resources from leading gastroenterology organizations.
          </Text>
        </View>

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol name="arrow.left" size={20} color={colors.primary} />
            <Text style={styles.backButtonText}>Back to Gastroenterology</Text>
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
    fontSize: 24,
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
    paddingHorizontal: 20,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: colors.accent,
    marginBottom: 6,
  },
  websiteDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.highlight,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
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
