import { View, Text, StyleSheet } from "react-native";
import React from "react";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
export default function LocationPicker() {
  const [locationPermis, requestPermission] = useForegroundPermissions();

  async function verifyPermission() {
    const { status } = await requestPermission();
    if (status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }
    return true;
  }
  async function getLocationHandler() {
    const permission = await verifyPermission();
    if (!permission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
  }
  function pickMapHandler() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>

      <View style={styles.action}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate Me
        </OutlineButton>
        <OutlineButton icon={"map"} onPress={pickMapHandler}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    backgroundColor: Colors.primary200,
  },
  action: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
