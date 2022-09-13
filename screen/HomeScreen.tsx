import React from "react";
import { Box, ScrollView, Text, Button, Image } from "native-base";
import Welcome from "../components/Welcome";
import PreviewCard from "../components/PreviewCard";
import ReviewCarousel from "../components/ReviewsCarousel";
import Specials from "../components/Specials";
import Bestsellers from "../components/Bestsellers";
import Section from "../components/Section";
// import Plans from "../components/Plans";
import OverviewCard from "../components/Overview/OverviewCard";
import MeetDoctors from "../components/MeetDoctors";
import DoctorReviews from "../components/DoctorReviews";
import Hero from "../components/Hero/Hero";
import PlanTileSelector from "../components/PlanTileSelector/PlanTileSelector";
import { HowThePlanWorks } from "../components/HowThePlanWorks.tsx/HowThePlanWorks";
import { Plans } from "../components/Plan/Plans";
import { ChatWithUs } from "../components/ChatWithUs/ChatWithUs";
import Overview from "../components/Overview/Overview";
import Calls from "../components/Calls/Call";

const HomeScreen = () => {
  return (
    <ScrollView pb="100px">
      <Welcome />
      <PlanTileSelector />
      <Hero />
      <HowThePlanWorks />
      <ReviewCarousel />
      <Plans />
      <ChatWithUs />
      <Bestsellers />
      <DoctorReviews />
      <Overview />
      <Calls />
      {/* <Overview /> */}
      {/* <PreviewCard /> */}
      {/* <Section />
      <Box shadow="9" mt="25px" bg="#fff" py="10px">
        <Text ml="25px" mb="10px" fontSize="24px">
          <Text fontWeight="bold">Real</Text> People,{" "}
          <Text fontWeight="bold">Unreal</Text> Stories
        </Text>
        <ReviewCarousel />
        <Plans />
        <Button
          mx="10px"
          my="20px"
          borderRadius={16}
          bg="#000"
          size="lg"
          p="10px"
        >
          <Text fontSize="24px" color="white">
            Contact us for queries
          </Text>
        </Button>
        <Image
          source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
          alt=""
          width="100%"
          height={279}
          mb="-10px"
        />
      </Box>

      <Box mt="10px">
        <Text textAlign="center" mb="10px" fontSize="24px">
          <Text fontWeight="bold">Overview </Text>of my{" "}
          <Text fontWeight="bold">90-day </Text>journey
        </Text>

        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </Box>
      <Bestsellers />
      <MeetDoctors />
      <DoctorReviews />
      <DoctorReviews />
      <DoctorReviews /> */}
    </ScrollView>
  );
};

export default HomeScreen;
