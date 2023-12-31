import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm() {
  const [title, setTitle] = useState("");

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>PlaceForm</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTitle(text);
          }}
          value={title}
        ></TextInput>
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    color: Colors.primary500,
  },
});
