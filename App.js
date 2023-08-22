import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllPlace"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  onPress={() => navigation.navigate("AddPlace")}
                  icon="add"
                  size={24}
                  color={tintColor}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
