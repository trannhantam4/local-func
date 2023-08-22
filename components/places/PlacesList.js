import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
export default function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>No places yet</Text>
      </View>
    );
  }
  function onSelect() {}
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        <PlaceItem place={item} onSelect={onSelect} />;
      }}
    />
  );
}
const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    fontSize: 16,
  },
});
