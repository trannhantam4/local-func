import { View, Text, Button, Alert } from "react-native";
import React from "react";
import {
  useCameraPermissions,
  launchCameraAsync,
  PermissionStatus,
} from "expo-image-picker";

export default function ImagePicker() {
  const [cameraPermissionInfo, requestPermissions] = useCameraPermissions();
  async function verifyPermission() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermissions();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Needed",
        "Please allow camera access to continue"
      );
      return false;
    }
    return "true2";
  }
  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    console.log("permission " + hasPermission);
    if (!hasPermission) {
      return;
    }
    const img = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16.9],
      quality: 0.5,
    });
    console.log(img);
  }
  return (
    <View>
      <View>
        <Button title="take image" onPress={takeImageHandler}></Button>
      </View>
    </View>
  );
}
