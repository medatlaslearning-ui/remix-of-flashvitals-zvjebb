
import React from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MedicalSystem } from "./homeData";
import { GlassView } from "expo-glass-effect";
import * as Haptics from "expo-haptics";

interface MedicalSystemCardProps {
  item: MedicalSystem;
}

export function MedicalSystemCard({ item }: MedicalSystemCardProps) {
  const theme = useTheme();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <Link href={item.route as any} asChild>
      <Pressable onPress={handlePress}>
        <GlassView
          style={[
            styles.card,
            { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
          ]}
          glassEffectStyle="regular"
        >
          <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              {item.title}
            </Text>
            <Text style={[styles.description, { color: theme.dark ? '#98989D' : '#666' }]}>
              {item.description}
            </Text>
          </View>
        </GlassView>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  emoji: {
    fontSize: 28,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
  },
});
