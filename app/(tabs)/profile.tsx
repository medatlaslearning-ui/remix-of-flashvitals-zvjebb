
import React, { useState, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useFlashcards } from "@/hooks/useFlashcards";
import * as Haptics from "expo-haptics";
import { supabase } from "@/app/integrations/supabase/client";

// Specialty options with nested sub-specialties
const SPECIALTY_OPTIONS = [
  {
    primary: "Advanced Practice Registered Nurse",
    subOptions: [
      "Nurse Practitioner",
      "CRNA",
      "Clinical Nurse Specialist",
      "Certified Nurse Midwife"
    ]
  },
  {
    primary: "Physician",
    subOptions: [
      "Neurology",
      "Cardiology",
      "Pulmonary",
      "Gastroenterology",
      "Nephrology",
      "Hem/Onc",
      "Urology",
      "Critical Care",
      "Trauma",
      "Emergency",
      "Family Medicine",
      "Internal Medicine",
      "Hospitalist"
    ]
  },
  {
    primary: "Physician Associate",
    subOptions: []
  },
  {
    primary: "Registered Nurse",
    subOptions: []
  },
  {
    primary: "Local Vocational Nursing",
    subOptions: []
  },
  {
    primary: "Student",
    subOptions: [
      "APRN Student",
      "Medical Student",
      "PA Student",
      "Nursing Student"
    ]
  },
  {
    primary: "Other",
    subOptions: []
  }
];

export default function ProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { getBookmarkedFlashcards, getFavoriteFlashcards, getDifficultFlashcards, updateTrigger } = useFlashcards();
  
  const [primarySpecialty, setPrimarySpecialty] = useState<string | null>(null);
  const [subSpecialty, setSubSpecialty] = useState<string | null>(null);
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showSubPicker, setShowSubPicker] = useState(false);
  const [selectedPrimaryForSub, setSelectedPrimaryForSub] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Calculate counts - now properly reacts to flashcard changes via updateTrigger
  const bookmarkedCount = useMemo(() => {
    const count = getBookmarkedFlashcards().length;
    console.log('[Profile] Bookmarked count updated:', count);
    return count;
  }, [getBookmarkedFlashcards, updateTrigger]);

  const favoritesCount = useMemo(() => {
    const count = getFavoriteFlashcards().length;
    console.log('[Profile] Favorites count updated:', count);
    return count;
  }, [getFavoriteFlashcards, updateTrigger]);

  const difficultCount = useMemo(() => {
    const count = getDifficultFlashcards().length;
    console.log('[Profile] Difficult count updated:', count);
    return count;
  }, [getDifficultFlashcards, updateTrigger]);

  const quickActions = [
    { 
      title: "Favorites", 
      emoji: "❤️",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'favorites' },
      count: favoritesCount,
      color: '#E91E63',
      functional: true
    },
    { 
      title: "Bookmarked", 
      emoji: "🔖",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'bookmarked' },
      count: bookmarkedCount,
      color: '#FF9800',
      functional: true
    },
    { 
      title: "Difficult", 
      emoji: "⚠️",
      route: "/(tabs)/(home)/flashcards",
      params: { filter: 'difficult' },
      count: difficultCount,
      color: '#F44336',
      functional: true
    },
    { 
      title: "Ask Dr. Elias Reed", 
      emoji: "💬",
      route: "/(tabs)/(home)/chatbot", 
      params: {},
      color: '#9C27B0',
      functional: true
    },
    { 
      title: "Progress Report", 
      emoji: "📊",
      route: "/progress-report", 
      params: {},
      color: '#2196F3',
      functional: true
    },
    { 
      title: "Future CE Activity", 
      emoji: "🎯",
      route: "", 
      params: {},
      color: '#00BCD4',
      functional: false
    }
  ];

  // Load user profile data
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.log('No user found');
        setLoading(false);
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('primary_specialty, sub_specialty')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.log('Error loading profile:', error);
      } else if (profile) {
        setPrimarySpecialty(profile.primary_specialty);
        setSubSpecialty(profile.sub_specialty);
      }
    } catch (error) {
      console.error('Error in loadProfile:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSpecialty = async (primary: string, sub: string | null) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.log('No user to save specialty for');
        return;
      }

      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          primary_specialty: primary,
          sub_specialty: sub,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (error) {
        console.error('Error saving specialty:', error);
      } else {
        console.log('Specialty saved successfully');
      }
    } catch (error) {
      console.error('Error in saveSpecialty:', error);
    }
  };

  const handleQuickAction = (route: string, params?: any, functional?: boolean) => {
    // Only navigate if the tile is functional
    if (functional === false) {
      console.log('Non-functional tile pressed - no action taken');
      return;
    }
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (params && Object.keys(params).length > 0) {
      router.push({ pathname: route as any, params });
    } else {
      router.push(route as any);
    }
  };

  const handlePrimarySpecialtyPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowPrimaryPicker(true);
  };

  const handleSelectPrimarySpecialty = (primary: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    const selectedOption = SPECIALTY_OPTIONS.find(opt => opt.primary === primary);
    
    if (selectedOption && selectedOption.subOptions.length > 0) {
      // Has sub-options, show sub-picker
      setSelectedPrimaryForSub(primary);
      setShowPrimaryPicker(false);
      setShowSubPicker(true);
    } else {
      // No sub-options, save directly
      setPrimarySpecialty(primary);
      setSubSpecialty(null);
      saveSpecialty(primary, null);
      setShowPrimaryPicker(false);
    }
  };

  const handleSelectSubSpecialty = (sub: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    if (selectedPrimaryForSub) {
      setPrimarySpecialty(selectedPrimaryForSub);
      setSubSpecialty(sub);
      saveSpecialty(selectedPrimaryForSub, sub);
    }
    
    setShowSubPicker(false);
    setSelectedPrimaryForSub(null);
  };

  const handleBackToPrimary = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowSubPicker(false);
    setSelectedPrimaryForSub(null);
    setShowPrimaryPicker(true);
  };

  const getDisplayText = () => {
    if (subSpecialty) {
      return subSpecialty;
    }
    if (primarySpecialty) {
      return primarySpecialty;
    }
    return "Select Specialty";
  };

  const getSubOptions = () => {
    if (!selectedPrimaryForSub) return [];
    const option = SPECIALTY_OPTIONS.find(opt => opt.primary === selectedPrimaryForSub);
    return option?.subOptions || [];
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
      >
        {/* User Information Section */}
        <GlassView style={[
          styles.profileHeader,
          { backgroundColor: theme.dark ? 'rgba(66, 133, 244, 0.3)' : '#1976D2' }
        ]} glassEffectStyle="regular">
          <Text style={styles.headerEmoji}>🎓</Text>
          <Text style={[styles.badge, { color: '#FFFFFF' }]}>MedAtlas Scholar</Text>
          
          {/* Specialty Dropdown */}
          <Pressable 
            style={[
              styles.specialtyButton,
              { 
                backgroundColor: theme.dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.2)',
                borderColor: theme.dark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.4)'
              }
            ]}
            onPress={handlePrimarySpecialtyPress}
          >
            <Text style={[
              styles.specialtyText, 
              { color: primarySpecialty ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)' }
            ]}>
              {getDisplayText()}
            </Text>
            <IconSymbol 
              ios_icon_name="chevron.down" 
              android_material_icon_name="arrow-drop-down" 
              size={20} 
              color="rgba(255, 255, 255, 0.7)" 
            />
          </Pressable>
        </GlassView>

        {/* Quick Actions Section */}
        <View style={styles.quickActionsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
          <View style={styles.tilesGrid}>
            {quickActions.map((action, index) => (
              <Pressable
                key={index}
                onPress={() => handleQuickAction(action.route, action.params, action.functional)}
                style={({ pressed }) => [
                  styles.tile,
                  { 
                    opacity: pressed ? 0.7 : 1,
                    backgroundColor: action.color
                  }
                ]}
              >
                <Text style={styles.tileEmoji}>{action.emoji}</Text>
                <Text style={styles.tileTitle}>
                  {action.title}
                </Text>
                {action.count !== undefined && (
                  <Text style={styles.tileCount}>
                    {action.count}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Primary Specialty Picker Modal */}
      <Modal
        visible={showPrimaryPicker}
        transparent
        animationType="fade"
        onRequestClose={() => setShowPrimaryPicker(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setShowPrimaryPicker(false)}
        >
          <Pressable style={[styles.modalContent, { backgroundColor: theme.colors.card }]}>
            <View style={[styles.modalHeader, { borderBottomColor: theme.dark ? '#333' : '#E5E5EA' }]}>
              <Text style={[styles.modalTitle, { color: theme.colors.text }]}>Select Specialty</Text>
              <Pressable onPress={() => setShowPrimaryPicker(false)}>
                <IconSymbol 
                  ios_icon_name="xmark.circle.fill" 
                  android_material_icon_name="close" 
                  size={28} 
                  color={theme.dark ? '#98989D' : '#666'} 
                />
              </Pressable>
            </View>
            <ScrollView style={styles.optionsList}>
              {SPECIALTY_OPTIONS.map((option, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.optionItem,
                    primarySpecialty === option.primary && { backgroundColor: theme.colors.primary + '20' },
                    index < SPECIALTY_OPTIONS.length - 1 && { 
                      borderBottomWidth: 1, 
                      borderBottomColor: theme.dark ? '#333' : '#E5E5EA' 
                    }
                  ]}
                  onPress={() => handleSelectPrimarySpecialty(option.primary)}
                >
                  <Text style={[
                    styles.optionItemText, 
                    { color: theme.colors.text },
                    primarySpecialty === option.primary && { fontWeight: '600', color: theme.colors.primary }
                  ]}>
                    {option.primary}
                  </Text>
                  <View style={styles.optionItemRight}>
                    {primarySpecialty === option.primary && (
                      <IconSymbol 
                        ios_icon_name="checkmark" 
                        android_material_icon_name="check" 
                        size={20} 
                        color={theme.colors.primary} 
                      />
                    )}
                    {option.subOptions.length > 0 && (
                      <IconSymbol 
                        ios_icon_name="chevron.right" 
                        android_material_icon_name="arrow-forward" 
                        size={20} 
                        color={theme.dark ? '#98989D' : '#666'} 
                      />
                    )}
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>

      {/* Sub-Specialty Picker Modal */}
      <Modal
        visible={showSubPicker}
        transparent
        animationType="fade"
        onRequestClose={handleBackToPrimary}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={handleBackToPrimary}
        >
          <Pressable style={[styles.modalContent, { backgroundColor: theme.colors.card }]}>
            <View style={[styles.modalHeader, { borderBottomColor: theme.dark ? '#333' : '#E5E5EA' }]}>
              <Pressable onPress={handleBackToPrimary} style={styles.backButton}>
                <IconSymbol 
                  ios_icon_name="chevron.left" 
                  android_material_icon_name="arrow-back" 
                  size={24} 
                  color={theme.colors.primary} 
                />
              </Pressable>
              <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
                {selectedPrimaryForSub}
              </Text>
              <Pressable onPress={handleBackToPrimary}>
                <IconSymbol 
                  ios_icon_name="xmark.circle.fill" 
                  android_material_icon_name="close" 
                  size={28} 
                  color={theme.dark ? '#98989D' : '#666'} 
                />
              </Pressable>
            </View>
            <ScrollView style={styles.optionsList}>
              {getSubOptions().map((subOption, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.optionItem,
                    subSpecialty === subOption && { backgroundColor: theme.colors.primary + '20' },
                    index < getSubOptions().length - 1 && { 
                      borderBottomWidth: 1, 
                      borderBottomColor: theme.dark ? '#333' : '#E5E5EA' 
                    }
                  ]}
                  onPress={() => handleSelectSubSpecialty(subOption)}
                >
                  <Text style={[
                    styles.optionItemText, 
                    { color: theme.colors.text },
                    subSpecialty === subOption && { fontWeight: '600', color: theme.colors.primary }
                  ]}>
                    {subOption}
                  </Text>
                  {subSpecialty === subOption && (
                    <IconSymbol 
                      ios_icon_name="checkmark" 
                      android_material_icon_name="check" 
                      size={20} 
                      color={theme.colors.primary} 
                    />
                  )}
                </Pressable>
              ))}
            </ScrollView>
          </Pressable>
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
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 32,
    marginBottom: 24,
    gap: 12,
  },
  headerEmoji: {
    fontSize: 64,
  },
  badge: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  specialtyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 250,
    gap: 12,
  },
  specialtyText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
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
    color: '#FFFFFF',
  },
  tileCount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
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
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 4,
  },
  optionsList: {
    maxHeight: 400,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  optionItemText: {
    fontSize: 16,
    flex: 1,
  },
  optionItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
