
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { medicalSystems } from "@/components/homeData";
import { MedicalSystemCard } from "@/components/MedicalSystemCard";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={medicalSystems}
        renderItem={({ item }) => <MedicalSystemCard item={item} />}
        keyExtractor={(item) => item.route}
        contentContainerStyle={styles.listContainer}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
});
