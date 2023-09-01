import { View, Button, Alert, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  requestCameraPermissionsAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";
export default function ImagePicker() {
  const [imageUri, setImageUri] = useState("");
  async function verifyPermission() {
    const { status } = await requestCameraPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3], // Corrected aspect ratio array [width, height]
      quality: 1,
    });
    setImageUri(image.uri);
  }
  let imagePreview = <Text>No image taken yet</Text>;
  if (imageUri) {
    imagePreview = <Image style={styles.image} source={{ uri: imageUri }} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageView}>{imagePreview}</View>
      <OutlineButton icon={"camera"} onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
}
const styles = StyleSheet.create({
  imageView: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    backgroundColor: Colors.primary200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
