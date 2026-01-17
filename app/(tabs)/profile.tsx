
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { supabase } from '@/app/integrations/supabase/client';
import * as Haptics from 'expo-haptics';

export default function ProfileScreen() {
  const { authState, user, profile, signOut, error: authError } = useAuth();
  const [primarySpecialty, setPrimarySpecialty] = useState<string | null>(null);
  const [subSpecialty, setSubSpecialty] = useState<string | null>(null);
  const [showPrimaryDropdown, setShowPrimaryDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [savingSpecialty, setSavingSpecialty] = useState(false);

  useEffect(() => {
    if (profile) {
      setPrimarySpecialty(profile.primary_specialty || null);
      setSubSpecialty(profile.sub_specialty || null);
    }
  }, [profile]);

  const primarySpecialties = [
    'Advanced Practice Registered Nurse',
    'Physician',
    'Physician Associate',
    'Registered Nurse',
    'Local Vocational Nursing',
    'Student',
    'Other',
  ];

  const subSpecialties: { [key: string]: string[] } = {
    'Advanced Practice Registered Nurse': [
      'Acute Care Nurse Practitioner',
      'Adult-Gerontology Nurse Practitioner',
      'Family Nurse Practitioner',
      'Pediatric Nurse Practitioner',
      'Psychiatric Mental Health Nurse Practitioner',
      'Women\'s Health Nurse Practitioner',
      'Certified Nurse Midwife',
      'Certified Registered Nurse Anesthetist',
    ],
    'Physician': [
      'Family Medicine',
      'Internal Medicine',
      'Hospitalist',
      'Emergency Medicine',
      'Pediatrics',
      'Obstetrics and Gynecology',
      'Surgery',
      'Psychiatry',
      'Anesthesiology',
      'Radiology',
      'Pathology',
      'Other Specialty',
    ],
    'Physician Associate': [
      'Family Medicine',
      'Internal Medicine',
      'Emergency Medicine',
      'Surgery',
      'Pediatrics',
      'Orthopedics',
      'Dermatology',
      'Psychiatry',
      'Other Specialty',
    ],
    'Registered Nurse': [
      'Medical-Surgical',
      'Critical Care',
      'Emergency',
      'Pediatrics',
      'Labor and Delivery',
      'Operating Room',
      'Oncology',
      'Psychiatric',
      'Other Specialty',
    ],
    'Student': [
      'Medical Student',
      'Nursing Student',
      'PA Student',
      'NP Student',
      'Other Healthcare Student',
    ],
  };

  const saveSpecialty = async () => {
    if (authState !== 'authenticated' || !user) {
      Alert.alert(
        'Authentication Required',
        'Please sign in to save your specialty selection.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Sign In', onPress: () => router.push('/auth/sign-in') },
        ]
      );
      return;
    }

    if (!primarySpecialty) {
      Alert.alert('Error', 'Please select a primary specialty');
      return;
    }

    setSavingSpecialty(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    try {
      console.log('[Profile] Saving specialty for user:', user.id);
      console.log('[Profile] Primary specialty:', primarySpecialty);
      console.log('[Profile] Sub specialty:', subSpecialty);

      const { data, error } = await supabase
        .from('profiles')
        .upsert(
          {
            user_id: user.id,
            primary_specialty: primarySpecialty,
            sub_specialty: subSpecialty,
            email: user.email,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: 'user_id',
          }
        )
        .select();

      if (error) {
        console.error('[Profile] Supabase error:', error);
        throw error;
      }

      console.log('[Profile] Specialty saved successfully:', data);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert('Success', 'Your specialty has been saved');
    } catch (error: any) {
      console.error('[Profile] Error saving specialty:', error);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', `Failed to save specialty: ${error.message || 'Please try again.'}`);
    } finally {
      setSavingSpecialty(false);
    }
  };

  const handleSignOut = async () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOut();
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              Alert.alert('Signed Out', 'You have been signed out successfully');
            } catch (error) {
              console.error('[Profile] Sign out error:', error);
              Alert.alert('Error', 'Failed to sign out. Please try again.');
            }
          },
        },
      ]
    );
  };

  // SAFE NAVIGATION: Wrap navigation in try-catch to prevent render errors
  const handleNavigateToFilter = (filterType: string) => {
    try {
      console.log(`[Profile] Navigating to ${filterType}`);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      router.push(`/(tabs)/(home)/flashcards?filter=${filterType}`);
    } catch (error) {
      console.error(`[Profile] Navigation error for ${filterType}:`, error);
      Alert.alert('Navigation Error', 'Unable to navigate. Please try again.');
    }
  };

  // Handle loading state (max 8 seconds via AuthContext timeout)
  if (authState === 'loading') {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading profile...</Text>
        <Text style={styles.loadingSubtext}>Checking authentication status</Text>
      </View>
    );
  }

  // Handle auth error (timeout or other error)
  if (authError) {
    return (
      <View style={styles.errorContainer}>
        <IconSymbol
          ios_icon_name="exclamationmark.triangle.fill"
          android_material_icon_name="warning"
          size={64}
          color={colors.warning}
        />
        <Text style={styles.errorTitle}>Authentication Timeout</Text>
        <Text style={styles.errorMessage}>
          Unable to verify authentication status. This may be due to a slow connection or server issue.
        </Text>
        <Text style={styles.errorHint}>
          You can continue using the app in guest mode, but some features (like saving progress) will be unavailable.
        </Text>
        <View style={styles.errorButtons}>
          <Pressable
            style={styles.retryButton}
            onPress={() => router.replace('/(tabs)/profile')}
          >
            <IconSymbol
              ios_icon_name="arrow.clockwise"
              android_material_icon_name="refresh"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.retryButtonText}>Retry</Text>
          </Pressable>
          <Pressable
            style={styles.signInButton}
            onPress={() => router.push('/auth/sign-in')}
          >
            <IconSymbol
              ios_icon_name="person.circle.fill"
              android_material_icon_name="login"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Authentication Status Card */}
        <View style={styles.authCard}>
          {authState === 'authenticated' && user ? (
            <>
              <View style={styles.authHeader}>
                <IconSymbol
                  ios_icon_name="person.circle.fill"
                  android_material_icon_name="account-circle"
                  size={60}
                  color={colors.primary}
                />
                <View style={styles.authInfo}>
                  <Text style={styles.authName}>{profile?.full_name || 'User'}</Text>
                  <Text style={styles.authEmail}>{user.email}</Text>
                  <View style={styles.authBadge}>
                    <IconSymbol
                      ios_icon_name="checkmark.seal.fill"
                      android_material_icon_name="check-circle"
                      size={16}
                      color="#27AE60"
                    />
                    <Text style={styles.authBadgeText}>Authenticated</Text>
                  </View>
                </View>
              </View>
              <Pressable style={styles.signOutButton} onPress={handleSignOut}>
                <IconSymbol
                  ios_icon_name="arrow.right.square.fill"
                  android_material_icon_name="logout"
                  size={20}
                  color={colors.primary}
                />
                <Text style={styles.signOutButtonText}>Sign Out</Text>
              </Pressable>
            </>
          ) : (
            <>
              <View style={styles.guestHeader}>
                <IconSymbol
                  ios_icon_name="person.fill.questionmark"
                  android_material_icon_name="person"
                  size={60}
                  color={colors.textSecondary}
                />
                <View style={styles.guestInfo}>
                  <Text style={styles.guestTitle}>Guest Mode</Text>
                  <Text style={styles.guestSubtitle}>
                    Sign in to save your progress and preferences
                  </Text>
                </View>
              </View>
              <Pressable
                style={styles.signInButton}
                onPress={() => router.push('/auth/sign-in')}
              >
                <IconSymbol
                  ios_icon_name="arrow.right.circle.fill"
                  android_material_icon_name="login"
                  size={20}
                  color="#FFFFFF"
                />
                <Text style={styles.signInButtonText}>Sign In</Text>
              </Pressable>
              <View style={styles.guestWarning}>
                <IconSymbol
                  ios_icon_name="exclamationmark.triangle.fill"
                  android_material_icon_name="warning"
                  size={16}
                  color="#F39C12"
                />
                <Text style={styles.guestWarningText}>
                  In guest mode, your feedback and preferences are not saved
                </Text>
              </View>
            </>
          )}
        </View>

        {/* MedAtlas Scholar Badge */}
        <View style={styles.scholarBadge}>
          <IconSymbol
            ios_icon_name="graduationcap.fill"
            android_material_icon_name="school"
            size={32}
            color="#FFFFFF"
          />
          <Text style={styles.scholarText}>MedAtlas Scholar</Text>
        </View>

        {/* Specialty Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Specialty</Text>
          
          <Pressable
            style={styles.dropdown}
            onPress={() => {
              console.log('[Profile] Toggling primary specialty dropdown');
              setShowPrimaryDropdown(!showPrimaryDropdown);
            }}
          >
            <Text style={primarySpecialty ? styles.dropdownTextSelected : styles.dropdownTextPlaceholder}>
              {primarySpecialty || 'Select Primary Specialty'}
            </Text>
            <IconSymbol
              ios_icon_name="chevron.down"
              android_material_icon_name="arrow-drop-down"
              size={24}
              color={colors.text}
            />
          </Pressable>

          {showPrimaryDropdown && (
            <View style={styles.dropdownMenu}>
              <ScrollView style={styles.dropdownScrollView} nestedScrollEnabled={true}>
                {primarySpecialties.map((specialty, index) => (
                  <Pressable
                    key={index}
                    style={[
                      styles.dropdownItem,
                      index === primarySpecialties.length - 1 && styles.dropdownItemLast
                    ]}
                    onPress={() => {
                      console.log('[Profile] Selected primary specialty:', specialty);
                      setPrimarySpecialty(specialty);
                      setSubSpecialty(null);
                      setShowPrimaryDropdown(false);
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{specialty}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}

          {primarySpecialty && subSpecialties[primarySpecialty] && (
            <>
              <Pressable
                style={[styles.dropdown, { marginTop: 12 }]}
                onPress={() => {
                  console.log('[Profile] Toggling sub-specialty dropdown');
                  setShowSubDropdown(!showSubDropdown);
                }}
              >
                <Text style={subSpecialty ? styles.dropdownTextSelected : styles.dropdownTextPlaceholder}>
                  {subSpecialty || 'Select Sub-Specialty'}
                </Text>
                <IconSymbol
                  ios_icon_name="chevron.down"
                  android_material_icon_name="arrow-drop-down"
                  size={24}
                  color={colors.text}
                />
              </Pressable>

              {showSubDropdown && (
                <View style={styles.dropdownMenu}>
                  <ScrollView style={styles.dropdownScrollView} nestedScrollEnabled={true}>
                    {subSpecialties[primarySpecialty].map((specialty, index) => (
                      <Pressable
                        key={index}
                        style={[
                          styles.dropdownItem,
                          index === subSpecialties[primarySpecialty].length - 1 && styles.dropdownItemLast
                        ]}
                        onPress={() => {
                          console.log('[Profile] Selected sub-specialty:', specialty);
                          setSubSpecialty(specialty);
                          setShowSubDropdown(false);
                          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{specialty}</Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              )}
            </>
          )}

          <Pressable
            style={[styles.saveButton, savingSpecialty && styles.saveButtonDisabled]}
            onPress={saveSpecialty}
            disabled={savingSpecialty || !primarySpecialty}
          >
            {savingSpecialty ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <IconSymbol
                  ios_icon_name="checkmark.circle.fill"
                  android_material_icon_name="check-circle"
                  size={20}
                  color="#FFFFFF"
                />
                <Text style={styles.saveButtonText}>Save Specialty</Text>
              </>
            )}
          </Pressable>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.grid}>
            {/* Favorites - FIXED: Safe navigation */}
            <Pressable
              style={[styles.tile, { backgroundColor: '#E91E63' }]}
              onPress={() => handleNavigateToFilter('favorites')}
            >
              <Text style={styles.tileEmoji}>❤️</Text>
              <Text style={styles.tileTitle}>Favorites</Text>
              <Text style={styles.tileSubtitle}>Favorite cards</Text>
            </Pressable>

            {/* Bookmarked - FIXED: Safe navigation */}
            <Pressable
              style={[styles.tile, { backgroundColor: '#FF9800' }]}
              onPress={() => handleNavigateToFilter('bookmarked')}
            >
              <Text style={styles.tileEmoji}>🔖</Text>
              <Text style={styles.tileTitle}>Bookmarked</Text>
              <Text style={styles.tileSubtitle}>Saved cards</Text>
            </Pressable>

            {/* Difficult - FIXED: Safe navigation */}
            <Pressable
              style={[styles.tile, { backgroundColor: '#F44336' }]}
              onPress={() => handleNavigateToFilter('difficult')}
            >
              <Text style={styles.tileEmoji}>⚠️</Text>
              <Text style={styles.tileTitle}>Difficult</Text>
              <Text style={styles.tileSubtitle}>Review again</Text>
            </Pressable>

            {/* Ask Dr. Elias Reed */}
            <Pressable
              style={[styles.tile, { backgroundColor: '#9C27B0' }]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                router.push('/(tabs)/(home)/chatbot');
              }}
            >
              <Text style={styles.tileEmoji}>💬</Text>
              <Text style={styles.tileTitle}>Ask Dr. Elias Reed</Text>
              <Text style={styles.tileSubtitle}>Medical guidelines</Text>
            </Pressable>

            {/* Progress Report */}
            <Pressable
              style={[styles.tile, { backgroundColor: '#2196F3' }]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                router.push('/progress-report');
              }}
            >
              <Text style={styles.tileEmoji}>📊</Text>
              <Text style={styles.tileTitle}>Progress Report</Text>
              <Text style={styles.tileSubtitle}>View stats</Text>
            </Pressable>

            {/* Future CE Activity */}
            <Pressable style={[styles.tile, styles.tileDisabled, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.tileEmoji}>🎯</Text>
              <Text style={styles.tileTitle}>Future CE Activity</Text>
              <Text style={styles.tileSubtitle}>Coming soon</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  loadingSubtext: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 20,
  },
  errorHint: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  errorButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  authCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  authHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  authInfo: {
    flex: 1,
  },
  authName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  authEmail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  authBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  authBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#27AE60',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.background,
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  signOutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  guestHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  guestInfo: {
    flex: 1,
  },
  guestTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  guestSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 12,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  guestWarning: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: '#FFF9E6',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F39C12',
  },
  guestWarningText: {
    flex: 1,
    fontSize: 12,
    color: colors.text,
    lineHeight: 18,
  },
  scholarBadge: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 16,
  },
  scholarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dropdownTextPlaceholder: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  dropdownTextSelected: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  dropdownMenu: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.border,
    maxHeight: 300,
    overflow: 'hidden',
  },
  dropdownScrollView: {
    maxHeight: 300,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dropdownItemLast: {
    borderBottomWidth: 0,
  },
  dropdownItemText: {
    fontSize: 16,
    color: colors.text,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 16,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    minHeight: 120,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tileDisabled: {
    opacity: 0.6,
  },
  tileTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
  tileSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
    textAlign: 'center',
  },
  tileEmoji: {
    fontSize: 32,
  },
});
