
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
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
  const [name, setName] = useState("John Doe");
  const [profession, setProfession] = useState("Nurse Practitioner");
  const [showProfessionPicker, setShowProfessionPicker] = useState(false);

  const quickActions = [
    { 
      title: "❤️ Favorites", 
      route: "/favorites", 
      color: "#FF3B30",
      icon: "favorite"
    },
    { 
      title: "🔖 Bookmarked", 
      route: "/bookmarked", 
      color: "#FF9500",
      icon: "bookmark"
    },
    { 
      title: "💬 Ask Expert", 
      route: "/(tabs)/(home)/chatbot", 
      color: "#007AFF",
      icon: "chat"
    },
    { 
      title: "📊 Progress Report", 
      route: "/progress-report", 
      color: "#34C759",
      icon: "bar-chart"
    }
  ];

  const handleQuickAction = (route: string) => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push(route as any);
  };

  const handleProfessionPress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setShowProfessionPicker(true);
  };

  const handleSelectProfession = (selectedProfession: string) => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setProfession(selectedProfession);
    setShowProfessionPicker(false);
    console.log('Selected profession:', selectedProfession);
    // TODO: Backend Integration - Save profession to user profile
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
          Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
        ]} glassEffectStyle="regular">
          <IconSymbol ios_icon_name="person.circle.fill" android_material_icon_name="person" size={80} color={theme.colors.primary} />
          <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
          
          {/* Profession Dropdown */}
          <Pressable 
            style={[styles.professionButton, { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }]}
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
                onPress={() => handleQuickAction(action.route)}
                style={({ pressed }) => [
                  styles.tile,
                  { 
                    backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    opacity: pressed ? 0.7 : 1 
                  }
                ]}
              >
                <View style={[styles.iconContainer, { backgroundColor: action.color }]}>
                  <Text style={styles.tileEmoji}>{action.title.split(' ')[0]}</Text>
                </View>
                <Text style={[styles.tileTitle, { color: theme.colors.text }]}>
                  {action.title.substring(action.title.indexOf(' ') + 1)}
                </Text>
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
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileEmoji: {
    fontSize: 28,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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
