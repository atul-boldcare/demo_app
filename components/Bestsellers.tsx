import React from "react";
import { Box, Flex, Text, Image, Button } from "native-base";
import { Feather } from "@expo/vector-icons";

const Card = () => {
  return (
    <Box
      shadow="9"
      my="10px"
      mx="auto"
      bg="#fff"
      borderRadius="20px"
      maxW="180px"
    >
      <Box position="relative">
        <Image
          borderRadius="20px"
          source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
          width="180px"
          height="180px"
          alt=""
        />
      </Box>
      <Flex p="10px" flexDir="row" justifyContent="space-between">
        <Text fontWeight="bold">Product Name</Text>
        <Text pr="5px" fontWeight="bold">
          100
        </Text>
      </Flex>
      <Box position="absolute" top="10px" right="10px">
        <Feather name="arrow-right" size={40} color="white" />
      </Box>
    </Box>
  );
};

const Bestsellers = () => {
  return (
    <Box mx="auto">
      <Text mx="20px" fontSize="24px" fontWeight="bold">
        Bestsellers
      </Text>
      <Flex flexDir="row" flexWrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
      <Button mx="10px" my="20px" borderRadius={16} bg="#000">
        SEE MORE
      </Button>
    </Box>
  );
};

export default Bestsellers;
