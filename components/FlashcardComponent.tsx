
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, ScrollView } from 'react-native';
import { IconSymbol } from './IconSymbol';
import * as Haptics from 'expo-haptics';
import { colors } from '@/styles/commonStyles';
import { Flashcard } from '@/types/flashcard';

interface FlashcardComponentProps {
  flashcard: Flashcard;
  onBookmark: () => void;
  onFavorite: () => void;
  showActions?: boolean;
}

export function FlashcardComponent({ 
  flashcard, 
  onBookmark, 
  onFavorite,
  showActions = true 
}: FlashcardComponentProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log('FlashcardComponent rendering:', {
    id: flashcard.id,
    front: flashcard.front.substring(0, 30) + '...',
    isFlipped,
    bookmarked: flashcard.bookmarked,
    favorite: flashcard.favorite,
    hasTags: !!flashcard.tags
  });

  const handleFlip = () => {
    console.log('Flipping card:', flashcard.id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsFlipped(!isFlipped);
  };

  const handleBookmarkPress = () => {
    console.log('FlashcardComponent: Bookmark button pressed for card:', flashcard.id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onBookmark();
  };

  const handleFavoritePress = () => {
    console.log('FlashcardComponent: Favorite button pressed for card:', flashcard.id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onFavorite();
  };

  return (
    <View style={styles.container}>
      {/* Action Buttons */}
      {showActions && (
        <View style={styles.actionButtons}>
          <Pressable 
            onPress={handleBookmarkPress} 
            style={styles.actionButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <IconSymbol
              name={flashcard.bookmarked ? 'bookmark.fill' : 'bookmark'}
              size={24}
              color={flashcard.bookmarked ? colors.primary : colors.textSecondary}
            />
          </Pressable>
          <Pressable 
            onPress={handleFavoritePress} 
            style={styles.actionButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <IconSymbol
              name={flashcard.favorite ? 'heart.fill' : 'heart'}
              size={24}
              color={flashcard.favorite ? colors.error : colors.textSecondary}
            />
          </Pressable>
        </View>
      )}

      {/* Card */}
      <Pressable 
        onPress={handleFlip} 
        style={[
          styles.card,
          isFlipped && flashcard.color && getColorStyle(flashcard.color)
        ]}
      >
        <ScrollView 
          style={styles.cardScroll}
          contentContainerStyle={styles.cardContent}
          showsVerticalScrollIndicator={false}
        >
          {!isFlipped ? (
            // Front of card
            <View style={styles.cardFace}>
              <Text style={styles.label}>Question</Text>
              <Text style={styles.frontText}>{flashcard.front}</Text>
              {flashcard.tags && flashcard.tags.length > 0 && (
                <View style={styles.tags}>
                  {flashcard.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ) : (
            // Back of card
            <View style={styles.cardFace}>
              {flashcard.color && (
                <View style={styles.colorIndicator}>
                  <View style={[styles.colorBadge, getColorBadgeStyle(flashcard.color)]}>
                    <Text style={styles.colorBadgeText}>
                      {flashcard.color === 'blue' ? 'Gram Positive' : 'Gram Negative'}
                    </Text>
                  </View>
                </View>
              )}

              <View style={styles.backSection}>
                <Text style={styles.backLabel}>Definition</Text>
                <Text style={styles.backText}>{flashcard.back.definition}</Text>
              </View>
              
              <View style={styles.backSection}>
                <Text style={styles.backLabel}>High-Yield</Text>
                <Text style={styles.backText}>{flashcard.back.high_yield}</Text>
              </View>
              
              <View style={styles.backSection}>
                <Text style={styles.backLabel}>Clinical Pearl</Text>
                <Text style={styles.backText}>{flashcard.back.clinical_pearl}</Text>
              </View>

              {flashcard.back.treatment && (
                <View style={styles.backSection}>
                  <Text style={styles.backLabel}>Treatment</Text>
                  <Text style={styles.backText}>{flashcard.back.treatment}</Text>
                </View>
              )}

              {flashcard.tags && flashcard.tags.length > 0 && (
                <View style={styles.tags}>
                  {flashcard.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          )}
        </ScrollView>

        {/* Flip indicator */}
        <View style={styles.flipIndicator}>
          <IconSymbol 
            name="arrow.triangle.2.circlepath" 
            size={16} 
            color={colors.textSecondary} 
          />
          <Text style={styles.flipText}>Tap to flip</Text>
        </View>
      </Pressable>

      {/* Metadata */}
      <View style={styles.metadata}>
        <View style={styles.metadataItem}>
          <IconSymbol name="eye" size={16} color={colors.textSecondary} />
          <Text style={styles.metadataText}>Reviewed {flashcard.reviewCount} times</Text>
        </View>
        <View style={[styles.difficultyBadge, getDifficultyStyle(flashcard.difficulty)]}>
          <Text style={styles.difficultyText}>{flashcard.difficulty}</Text>
        </View>
      </View>
    </View>
  );
}

const getDifficultyStyle = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return { backgroundColor: colors.success + '20', borderColor: colors.success };
    case 'medium':
      return { backgroundColor: colors.warning + '20', borderColor: colors.warning };
    case 'hard':
    case 'difficult':
      return { backgroundColor: colors.error + '20', borderColor: colors.error };
    default:
      return { backgroundColor: colors.highlight, borderColor: colors.textSecondary };
  }
};

const getColorStyle = (color: 'blue' | 'red') => {
  if (color === 'blue') {
    return {
      backgroundColor: '#E3F2FD',
      borderWidth: 2,
      borderColor: '#2196F3',
    };
  } else {
    return {
      backgroundColor: '#FFEBEE',
      borderWidth: 2,
      borderColor: '#F44336',
    };
  }
};

const getColorBadgeStyle = (color: 'blue' | 'red') => {
  if (color === 'blue') {
    return {
      backgroundColor: '#2196F3',
    };
  } else {
    return {
      backgroundColor: '#F44336',
    };
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginBottom: 12,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.card,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    minHeight: 300,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  cardScroll: {
    flex: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardFace: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  frontText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 28,
    marginBottom: 20,
  },
  backSection: {
    marginBottom: 20,
  },
  backLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  backText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  tag: {
    backgroundColor: colors.highlight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  flipIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.highlight,
  },
  flipText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 4,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metadataText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    textTransform: 'capitalize',
  },
  colorIndicator: {
    marginBottom: 16,
    alignItems: 'center',
  },
  colorBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  colorBadgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
