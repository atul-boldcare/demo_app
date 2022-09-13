import React from "react";
import { Box, Image, Flex, Text } from "native-base";

const Card = () => (
  <Flex m="10px" flexDir="column" alignItems="center">
    <Box>
      <Image
        w="50px"
        h="50px"
        source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
        alt=""
        borderRadius={50}
      />
    </Box>
    <Text>Dr Name</Text>
    <Text>Information</Text>
  </Flex>
);

const MeetDoctors = () => {
  return (
    <>
      <Text mx="20px" fontWeight="bold" fontSize="24px">
        Meet our doctors
      </Text>
      <Flex flexDir="row" justifyContent="center">
        <Card />
        <Card />
        <Card />
      </Flex>
    </>
  );
};

export default MeetDoctors;
