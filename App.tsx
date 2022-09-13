import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Box, ScrollView } from "native-base";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestScreen from "./screen/TestScreen";
import OverviewCard from "./components/Overview/OverviewCard";
import Plans from "./components/Plans";
import MeetDoctors from "./components/MeetDoctors";
import DoctorReviews from "./components/DoctorReviews";
import { useFonts, loadAsync } from "expo-font";
import { theme } from "./theme";
import PlanTileSelector from "./components/PlanTileSelector/PlanTileSelector";
import HeroCarousel from "./components/Hero/HeroCarousel";
import { useEffect, useCallback, useState } from "react";
import Hero from "./components/Hero/Hero";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const customFonts = {
    "GTWalsheimPro-Bold": require("./assets/fonts/GTWalsheimPro-Bold.ttf"),
    "GTWalsheimPro-Regular": require("./assets/fonts/GTWalsheimPro-Regular.ttf"),
  };

  useEffect(() => {
    async function loadFonts() {
      await loadAsync(customFonts);
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  console.log(fontLoaded);
  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor="#000" style="light" />
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Header />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Test1" component={TestScreen} />
          </Stack.Navigator>
          {/* <Navbar /> */}
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
