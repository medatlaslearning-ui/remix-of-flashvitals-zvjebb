
import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useFlashcards } from "@/hooks/useFlashcards";
import * as Haptics from "expo-haptics";

const PROFESSIONS = [
  "Nurse Practitioner",
  "Physician",
  "Physician Assistant",
  "Registered Nurse",
  "NP Student",
  "Medical Student",
  "PA Student",
  "Nursing Student"
];

export default function ProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { getBookmarkedFlashcards, getFavoriteFlashcards, getDifficultFlashcards } = useFlashcards();
  const [name, setName] = useState("John Doe");
  const [profession, setProfession] = useState("Nurse Practitioner");
  const [showProfessionPicker, setShowProfessionPicker] = useState(false);

  // Calculate counts
  const bookmarkedCount = useMemo(() => getBookmarkedFlashcards().length, [getBookmarkedFlashcards]);
  const favoritesCount = useMemo(() => getFavoriteFlashcards().length, [getFavoriteFlashcards]);
  const difficultCount = useMemo(() => getDifficultFlashcards().length, [getDifficultFlashcards]);

  const quickActions = [
    { 
      title: "Favorites", 
      emoji: "❤️",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'favorites' },
      count: favoritesCount
    },
    { 
      title: "Bookmarked", 
      emoji: "🔖",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'bookmarked' },
      count: bookmarkedCount
    },
    { 
      title: "Difficult", 
      emoji: "⚠️",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'difficult' },
      count: difficultCount
    },
    { 
      title: "Ask Expert", 
      emoji: "💬",
      route: "/(tabs)/(home)/chatbot", 
      params: {}
    },
    { 
      title: "Progress Report", 
      emoji: "📊",
      route: "/progress-report", 
      params: {}
    }
  ];

  const handleQuickAction = (route: string, params?: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (params && Object.keys(params).length > 0) {
      router.push({ pathname: route as any, params });
    } else {
      router.push(route as any);
    }
  };

  const handleProfessionPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowProfessionPicker(true);
  };

  const handleSelectProfession = (selectedProfession: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setProfession(selectedProfession);
    setShowProfessionPicker(false);
    console.log('Selected profession:', selectedProfession);
    // TODO: Backend Integration - Save profession to user profile
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* User Information Section */}
        <GlassView style={styles.profileHeader} glassEffectStyle="regular">
          <IconSymbol ios_icon_name="person.circle.fill" android_material_icon_name="person" size={80} color={theme.colors.primary} />
          <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
          
          {/* Profession Dropdown */}
          <Pressable 
            style={styles.professionButton}
            onPress={handleProfessionPress}
          >
            <Text style={[styles.profession, { color: theme.dark ? '#98989D' : '#666' }]}>{profession}</Text>
            <IconSymbol ios_icon_name="chevron.down" android_material_icon_name="arrow-drop-down" size={20} color={theme.dark ? '#98989D' : '#666'} />
          </Pressable>
        </GlassView>

        {/* Quick Actions Section */}
        <View style={styles.quickActionsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
          <View style={styles.tilesGrid}>
            {quickActions.map((action, index) => (
              <Pressable
                key={index}
                onPress={() => handleQuickAction(action.route, action.params)}
                style={({ pressed }) => [
                  styles.tile,
                  { opacity: pressed ? 0.7 : 1 }
                ]}
              >
                <Text style={styles.tileEmoji}>{action.emoji}</Text>
                <Text style={[styles.tileTitle, { color: theme.colors.text }]}>
                  {action.title}
                </Text>
                {action.count !== undefined && (
                  <Text style={[styles.tileCount, { color: theme.colors.primary }]}>
                    {action.count}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Profession Picker Modal */}
      <Modal
        visible={showProfessionPicker}
        transparent
        animationType="fade"
        onRequestClose={() => setShowProfessionPicker(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setShowProfessionPicker(false)}
        >
          <View style={[styles.modalContent, { backgroundColor: theme.colors.card }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.colors.text }]}>Select Profession</Text>
              <Pressable onPress={() => setShowProfessionPicker(false)}>
                <IconSymbol ios_icon_name="xmark.circle.fill" android_material_icon_name="close" size={28} color={theme.dark ? '#98989D' : '#666'} />
              </Pressable>
            </View>
            <ScrollView style={styles.professionList}>
              {PROFESSIONS.map((prof, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.professionItem,
                    profession === prof && { backgroundColor: theme.colors.primary + '20' },
                    index < PROFESSIONS.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.dark ? '#333' : '#E5E5EA' }
                  ]}
                  onPress={() => handleSelectProfession(prof)}
                >
                  <Text style={[
                    styles.professionItemText, 
                    { color: theme.colors.text },
                    profession === prof && { fontWeight: '600', color: theme.colors.primary }
                  ]}>
                    {prof}
                  </Text>
                  {profession === prof && (
                    <IconSymbol ios_icon_name="checkmark" android_material_icon_name="check" size={20} color={theme.colors.primary} />
                  )}
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 32,
    marginBottom: 24,
    gap: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  professionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 8,
  },
  profession: {
    fontSize: 16,
  },
  quickActionsContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  tilesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    width: '48%',
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  tileEmoji: {
    fontSize: 32,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  tileCount: {
    fontSize: 18,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    maxHeight: '70%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  professionList: {
    maxHeight: 400,
  },
  professionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  professionItemText: {
    fontSize: 16,
  },
});
