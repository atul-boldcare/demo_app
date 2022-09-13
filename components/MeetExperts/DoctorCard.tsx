import { Box, Image, Flex, Text } from "native-base";
import React from "react";

const DoctorCard = () => {
  return (
    <Box mx="30px">
      <Flex flexDir="row">
        <Image
          src="https://via.placeholder.com/150"
          alt=""
          w="72px"
          h="72px"
          borderRadius={50}
        />
        <Flex flexDir="column" ml="10px">
          <Text fontSize="24px" fontWeight={700}>
            Your Sexologists
          </Text>
          <Text fontSize="14px" w="300px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Flex>
      </Flex>
      <Flex
        bg="#000"
        mt="5px"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        p="5px"
      >
        <Text color="#fff">2 Consultation worth 1000</Text>
        <Text color="#fff">3 month plan</Text>
      </Flex>
    </Box>
  );
};

export default DoctorCard;
