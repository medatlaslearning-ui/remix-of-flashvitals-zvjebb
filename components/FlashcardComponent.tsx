
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Flashcard } from '@/types/flashcard';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from './IconSymbol';
import * as Haptics from 'expo-haptics';

interface FlashcardComponentProps {
  flashcard: Flashcard;
  onBookmark: () => void;
  onFavorite: () => void;
  showActions?: boolean;
}

export const FlashcardComponent: React.FC<FlashcardComponentProps> = ({
  flashcard,
  onBookmark,
  onFavorite,
  showActions = true,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));

  const flipCard = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();

    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontOpacity = flipAnimation.interpolate({
    inputRange: [0, 90, 90, 180],
    outputRange: [1, 1, 0, 0],
  });

  const backOpacity = flipAnimation.interpolate({
    inputRange: [0, 90, 90, 180],
    outputRange: [0, 0, 1, 1],
  });

  const handleBookmark = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onBookmark();
  };

  const handleFavorite = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onFavorite();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={flipCard} style={styles.cardContainer}>
        {/* Front of card */}
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            {
              transform: [{ rotateY: frontInterpolate }],
              opacity: frontOpacity,
            },
          ]}
        >
          <View style={styles.topicBadge}>
            <Text style={styles.topicText}>{flashcard.topic}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.questionText}>{flashcard.front}</Text>
          </View>
          <Text style={styles.tapHint}>Tap to flip</Text>
        </Animated.View>

        {/* Back of card */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            {
              transform: [{ rotateY: backInterpolate }],
              opacity: backOpacity,
            },
          ]}
        >
          <View style={styles.topicBadge}>
            <Text style={styles.topicText}>{flashcard.topic}</Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.answerSection}>
              <Text style={styles.sectionLabel}>Definition</Text>
              <Text style={styles.answerText}>{flashcard.back.definition}</Text>
            </View>
            <View style={styles.answerSection}>
              <Text style={styles.sectionLabel}>High-Yield</Text>
              <Text style={styles.answerText}>{flashcard.back.high_yield}</Text>
            </View>
            <View style={styles.answerSection}>
              <Text style={styles.sectionLabel}>Clinical Pearl 💎</Text>
              <Text style={styles.answerText}>{flashcard.back.clinical_pearl}</Text>
            </View>
          </View>
          <Text style={styles.tapHint}>Tap to flip</Text>
        </Animated.View>
      </Pressable>

      {showActions && (
        <View style={styles.actionsContainer}>
          <Pressable onPress={handleBookmark} style={styles.actionButton}>
            <IconSymbol
              name={flashcard.bookmarked ? 'bookmark.fill' : 'bookmark'}
              size={24}
              color={flashcard.bookmarked ? colors.primary : colors.textSecondary}
            />
            <Text style={styles.actionText}>Bookmark</Text>
          </Pressable>

          <Pressable onPress={handleFavorite} style={styles.actionButton}>
            <IconSymbol
              name={flashcard.favorite ? 'heart.fill' : 'heart'}
              size={24}
              color={flashcard.favorite ? colors.error : colors.textSecondary}
            />
            <Text style={styles.actionText}>Favorite</Text>
          </Pressable>
        </View>
      )}

      <View style={styles.tagsContainer}>
        {flashcard.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    height: 450,
    position: 'relative',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  cardFront: {
    justifyContent: 'space-between',
  },
  cardBack: {
    justifyContent: 'space-between',
  },
  topicBadge: {
    backgroundColor: colors.highlight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  topicText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 32,
  },
  answerSection: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  answerText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  tapHint: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  actionButton: {
    alignItems: 'center',
    padding: 8,
  },
  actionText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16,
    gap: 8,
  },
  tag: {
    backgroundColor: colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: colors.card,
    fontWeight: '500',
  },
});
