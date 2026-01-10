
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import type { SourceAttribution } from '@/data/sourceAttributionRules';

interface Props {
  sourceAttributions?: SourceAttribution[];
  onPress: (url: string) => void;
}

export const GuidelineLinksBox: React.FC<Props> = ({ sourceAttributions, onPress }) => {
  // Filter out Merck Manual entries and only show guideline website links
  const guidelineLinks = sourceAttributions?.filter(
    attr => attr.sourceType === 'guideline' && attr.url
  ) || [];

  if (guidelineLinks.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconSymbol
          ios_icon_name="link"
          android_material_icon_name="link"
          size={16}
          color="#8B0000"
        />
        <Text style={styles.title}>Guideline Websites</Text>
      </View>
      {guidelineLinks.map((link, index) => (
        <Pressable
          key={index}
          style={styles.linkButton}
          onPress={() => link.url && onPress(link.url)}
        >
          <View style={styles.linkContent}>
            <Text style={styles.linkText}>{link.sourceName}</Text>
            <Text style={styles.descriptionText}>{link.attributionPhrase}</Text>
            {link.year && (
              <Text style={styles.yearText}>📅 {link.year}</Text>
            )}
          </View>
          <IconSymbol
            ios_icon_name="arrow.right.circle.fill"
            android_material_icon_name="arrow-forward"
            size={20}
            color="#8B0000"
          />
        </Pressable>
      ))}
      <Text style={styles.footnote}>
        💡 Tap any link above to view guideline website
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE4E1', // Light red/pink background
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#FFB6C1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8B0000',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    marginTop: 8,
  },
  linkContent: {
    flex: 1,
    marginRight: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#8B0000',
    fontWeight: '600',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  yearText: {
    fontSize: 11,
    color: '#666',
    fontWeight: '600',
  },
  footnote: {
    fontSize: 12,
    color: '#8B0000',
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
