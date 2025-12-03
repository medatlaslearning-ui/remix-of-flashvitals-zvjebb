
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Tabs } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Home',
    },
    {
      name: 'profile',
      route: '/(tabs)/profile',
      icon: 'person.fill',
      label: 'Profile',
    },
  ];

  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Screen name="(home)">
          <NativeTabs.Trigger>
            <Icon sf="house.fill" drawable="ic_home" />
            <Label>Home</Label>
          </NativeTabs.Trigger>
        </NativeTabs.Screen>
        <NativeTabs.Screen name="profile">
          <NativeTabs.Trigger>
            <Icon sf="person.fill" drawable="ic_profile" />
            <Label>Profile</Label>
          </NativeTabs.Trigger>
        </NativeTabs.Screen>
      </NativeTabs>
    );
  }

  // For Android and Web, use Tabs with custom tab bar
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => <FloatingTabBar tabs={tabs} />}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
