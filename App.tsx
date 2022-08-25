import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Box, ScrollView } from "native-base";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestScreen from "./screen/TestScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" style="light" />
      <NativeBaseProvider>
        <NavigationContainer>
          <Header />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Test1" component={TestScreen} />
          </Stack.Navigator>
          <Navbar />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
