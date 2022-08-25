import React from "react";
import { Box, Flex, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <Box bg="#000" pt="35px">
      <Flex
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        p="2"
      >
        <Text fontSize="20" color="#fff">
          BoldCare +
        </Text>
        <FontAwesome name="user-circle" size={24} color="white" />
      </Flex>
    </Box>
  );
};

export default Header;
