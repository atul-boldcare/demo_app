import React from "react";
import { Box, Divider, Flex, Text, Image, IconButton } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const OverviewCard = () => {
  return (
    <Box m="10px" bg="#fff" borderRadius={30} maxHeight="120px" shadow="9">
      <Flex flexDir="row" justifyContent="space-between">
        <Box pt="15px" pl="15px">
          <Text fontSize="14px">Day</Text>
          <Text fontSize="24px" fontWeight="bold">
            01
          </Text>
        </Box>
        <Box position="relative" mx="15px">
          <Divider orientation="vertical" height="100%" />
          <Box
            justifyContent="center"
            alignItems="center"
            borderWidth="1px"
            width="30px"
            height="30px"
            borderRadius={50}
            position="absolute"
            top="15px"
            left="-15px"
            bg="#fff"
          >
            <Ionicons name="ios-call" size={20} color="black" />
          </Box>
        </Box>
        <Box pt="15px">
          <Text fontSize="20px">Initial Introduction Call</Text>
          <Flex my="10px" flexDir="row" alignItems="center">
            <Image
              source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
              alt=""
              width="50px"
              height="50px"
              borderRadius={50}
              mr="10px"
            />
            <Text fontSize="16px" width="70px">
              Personal Assistant
            </Text>
          </Flex>
        </Box>
        <Box pr="5px">
          <IconButton
            _icon={{ as: AntDesign, name: "arrowright", size: 45 }}
            variant="ghost"
            colorScheme="coolGray"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default OverviewCard;
