
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { getUrologyGuidelineWebsites } from '@/data/urologyReferences';

export default function UrologyGuidelineWebsitesScreen() {
  const router = useRouter();
  const guidelineWebsites = getUrologyGuidelineWebsites();

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
          title: 'Guideline Websites',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol 
            ios_icon_name="globe" 
            android_material_icon_name="language"
            size={48} 
            color={colors.primary} 
          />
          <Text style={styles.headerTitle}>Guideline and Authority Websites</Text>
          <Text style={styles.headerSubtitle}>
            Official urology clinical practice guidelines and resources
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
                  <IconSymbol 
                    ios_icon_name="link.circle.fill" 
                    android_material_icon_name="link"
                    size={32} 
                    color={colors.primary} 
                  />
                </View>
                <View style={styles.websiteInfo}>
                  <Text style={styles.websiteName}>{website.name}</Text>
                  <Text style={styles.websiteDescription}>{website.description}</Text>
                  <View style={styles.urlContainer}>
                    <IconSymbol 
                      ios_icon_name="arrow.up.right.circle" 
                      android_material_icon_name="open_in_new"
                      size={14} 
                      color={colors.textSecondary} 
                    />
                    <Text style={styles.websiteUrl} numberOfLines={1} ellipsizeMode="tail">
                      {website.url}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

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
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 16,
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
    flex: 1,
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
