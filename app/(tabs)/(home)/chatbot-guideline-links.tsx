
import React from 'react';
import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import type { SourceAttribution } from '@/data/sourceAttributionRules';

interface GuidelineLinksBoxProps {
  sourceAttributions?: SourceAttribution[];
  onPress: (url: string) => void;
}

export function GuidelineLinksBox({ sourceAttributions, onPress }: GuidelineLinksBoxProps) {
  // Filter for guideline attributions that have URLs
  const guidelineLinks = sourceAttributions?.filter(attr => 
    attr.type === 'guideline' && attr.url && attr.url.trim() !== ''
  ) || [];

  if (guidelineLinks.length === 0) return null;

  return (
    <View style={styles.guidelineContainer}>
      <View style={styles.guidelineHeader}>
        <IconSymbol
          ios_icon_name="link"
          android_material_icon_name="link"
          size={16}
          color="#DC2626"
        />
        <Text style={styles.guidelineHeaderText}>Clinical Guideline References</Text>
      </View>
      {guidelineLinks.map((link, index) => (
        <Pressable
          key={index}
          style={styles.guidelineLinkButton}
          onPress={() => onPress(link.url!)}
        >
          <View style={styles.guidelineLinkContent}>
            <Text style={styles.guidelineLinkTitle} numberOfLines={2}>
              {link.sourceName || link.organization || 'Clinical Guideline'}
            </Text>
            {link.year && (
              <Text style={styles.guidelineLinkYear}>Year: {link.year}</Text>
            )}
          </View>
          <IconSymbol
            ios_icon_name="arrow.right.circle.fill"
            android_material_icon_name="arrow-forward"
            size={20}
            color="#DC2626"
          />
        </Pressable>
      ))}
      <Text style={styles.guidelineFootnote}>
        💡 Tap any link above to access the official guideline website
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guidelineContainer: {
    backgroundColor: '#FEE2E2', // Light red background
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  guidelineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  guidelineHeaderText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#991B1B',
  },
  guidelineLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  guidelineLinkContent: {
    flex: 1,
    marginRight: 8,
  },
  guidelineLinkTitle: {
    fontSize: 14,
    color: '#DC2626',
    fontWeight: '600',
    marginBottom: 4,
  },
  guidelineLinkYear: {
    fontSize: 12,
    color: '#991B1B',
    fontWeight: '500',
  },
  guidelineFootnote: {
    fontSize: 12,
    color: '#991B1B',
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
