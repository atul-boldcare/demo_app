import React from "react";
import { SafeAreaView } from "react-native";
import ReviewCarousel from "../components/ReviewsCarousel";
import Overview from "../components/Overview";
import Section from "../components/Section";
import Speciality from "../components/Speciality";
import Specials from "../components/Specials";
import { Text, Box, ScrollView } from "native-base";

const TestScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box
          shadow="9"
          mt="10px"
          p="10px"
          bg="#fff"
          borderRadius="29px"
          mx="auto"
        >
          <Section />
          <Speciality />
          {/* <Box mt="5px" height="3px" bg="#959595"></Box> */}
        </Box>
        <Box mt="10px" bg="#fff" py="10px" shadow="9">
          <Text ml="20px" fontSize="24px">
            <Text fontWeight="bold">Real</Text> People,{" "}
            <Text fontWeight="bold">Unreal</Text> Stories
          </Text>
          <ReviewCarousel />
        </Box>
        <Box pb="100px" mx="auto">
          <Overview />
          <Specials />
          <Specials />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestScreen;
