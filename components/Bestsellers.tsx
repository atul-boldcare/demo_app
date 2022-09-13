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
          width="150px"
          height="150px"
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
    <Box>
      <Text mb="20px" mx="30px" fontSize="24px" fontWeight={700}>
        Get products worth ₹3000
      </Text>
      <Box mx="30px">
        <Flex flexDir="row" flexWrap="wrap">
          <Card />
          <Card />
        </Flex>
        {/* <Button mx="10px" my="20px" borderRadius={16} bg="#000">
          SEE MORE
        </Button> */}
      </Box>
    </Box>
  );
};

export default Bestsellers;
