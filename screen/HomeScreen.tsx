import React from "react";
import { Box, ScrollView, Text, Button, Image } from "native-base";
import Welcome from "../components/Welcome";
import PreviewCard from "../components/PreviewCard";
import Carousel from "../components/Carousel";
import Specials from "../components/Specials";
import Bestsellers from "../components/Bestsellers";

const HomeScreen = () => {
  return (
    <ScrollView pb="100px">
      <Welcome />
      <PreviewCard />
      <Box shadow="9" mt="25px" bg="#fff" py="10px">
        <Text ml="25px" mb="10px" fontSize="24px">
          <Text fontWeight="bold">Real</Text> People,{" "}
          <Text fontWeight="bold">Unreal</Text> Stories
        </Text>
        <Carousel />
        <Button
          // android_ripple={{ color: "#ccc" }}
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

      <Specials />
      <Bestsellers />
    </ScrollView>
  );
};

export default HomeScreen;
