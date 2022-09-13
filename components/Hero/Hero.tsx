import { Box, Text, Flex, Button } from "native-base";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Hero = () => {
  return (
    <Box>
      <HeroCarousel />
      <Box mt="10px" mx="30px">
        <Text fontSize="24px" fontWeight={700}>
          Complete Performance Program
        </Text>
        <Text fontSize="20px" mb="20px">
          3 month plan
        </Text>
        <Text fontSize="24px" fontWeight={700}>
          For
        </Text>
        <Text fontSize="20px">All-round Performance</Text>
        <Flex flexDir="row" alignItems="center" mt="5px" mb="25px">
          <Box mr="10px">
            <FontAwesome name="circle" size={30} color="#B57900DE" />
          </Box>
          <Text fontSize="20px" color="#B57900DE">
            95% Success Rate
          </Text>
        </Flex>
        <Flex flexDir="row" alignItems="center">
          <Text mr="10px" fontSize="26px" fontWeight="700">
            ₹4999
          </Text>
          <Text color="#B57900DE" fontSize="20px">
            {" "}
            30% OFF
          </Text>
        </Flex>
        <Flex flexDir="row">
          <Text mr="10px" fontSize="18px">
            MRP
          </Text>
          <Text strikeThrough fontSize="18px">
            ₹7999
          </Text>
        </Flex>
        <Flex flexDir="row" mt="20px">
          <SimpleLineIcons name="badge" size={24} color="#B57900DE" />
          <Text ml="10px" fontSize="14px">
            <Text fontWeight="700" fontSize="16px">
              5,00,000+ men
            </Text>{" "}
            improved their performance this year!
          </Text>
        </Flex>
        <Button mt="20px" bg="#000" fontSize="16px">
          Start the Plan
        </Button>
        <Text fontSize="16px" my="30px">
          Bold Care+ is a 360* program that brings the best products, doctors,
          counsellors and nutrition experts under one program to help Indian men
          achieve more confidence in bed.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
