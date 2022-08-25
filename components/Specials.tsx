import { Box, Image, Text, Flex, Button, IconButton, Icon } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SubSection = () => {
  return (
    <Box mt="15px">
      <Flex flexDir="row">
        <Box mr="15px" position="relative">
          <Image
            borderRadius="20px"
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            alt=""
            width="88px"
            height="94px"
          />
          <Box position="absolute" top="10px" right="10px">
            <AntDesign name="arrowright" size={30} color="white" />
          </Box>
        </Box>
        <Flex justifyContent="space-between">
          <Text fontSize="16px" width="220px">
            Add these superfoods to your diet to improve your erection
          </Text>
          <Text fontSize="16px" mb="5px">
            {" "}
            5 minute read
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const Specials = () => {
  return (
    <Box shadow="9" mt="10px" borderRadius="29px" bg="#fff" p="10px" mx="10px">
      <Text fontSize="24px">
        <Text fontWeight="bold">Free Video</Text> Content
      </Text>
      <Box position="relative">
        <Image
          borderRadius="29px"
          source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
          alt=""
          width="366px"
          height="180px"
        />
        <Text
          width="250px"
          fontSize="24px"
          position="absolute"
          top="90px"
          left="30px"
          color="#fff"
        >
          How to last longer easily in bed
        </Text>
        <Box position="absolute" top="30px" right="30px">
          <IconButton
            onPress={() => console.log("pressed ")}
            _icon={{
              as: AntDesign,
              name: "caretright",
              color: "white",
              size: 55,
            }}
            variant="ghost"
            colorScheme="coolGray"
          />
        </Box>
      </Box>
      <SubSection />
      <SubSection />
      <SubSection />
      <Button my="20px" borderRadius={16} bg="#000">
        SEE MORE
      </Button>
    </Box>
  );
};

export default Specials;
