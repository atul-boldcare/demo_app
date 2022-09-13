import { Box, Divider, Flex, Text, Image } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import OverviewCard from "./Overview/OverviewCard";

const ProgressIcon = () => (
  <Box
    width="20px"
    height="20px"
    borderWidth="1px"
    borderColor="#000000"
    borderRadius={50}
    justifyContent="center"
    alignItems="center"
  >
    <Box p="2px" bg="#F8C857" width="80%" height="80%" borderRadius={50}></Box>
  </Box>
);

const OverViewItem = () => {
  return (
    <Box justifyContent="space-between">
      <Flex flexDir="row">
        <Flex flexDir="row">
          <Text flexShrink={0} mr="5px">
            Day
          </Text>
          <Flex alignItems="center">
            <ProgressIcon />
            <Divider height="100" orientation="vertical" />
          </Flex>
        </Flex>

        <Box>
          <Flex
            ml="4"
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontSize="24px">Initial introduction call</Text>
              <Flex flexDir="row" alignItems="center">
                <Box
                  mr="10px"
                  borderRadius={50}
                  borderWidth={1}
                  borderColor="#000"
                  p="1"
                >
                  <Image
                    source={{
                      uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    width="35"
                    height="35"
                    alt=""
                    borderRadius={50}
                  />
                </Box>
                <Text fontSize="16px">Personal Assistant</Text>
              </Flex>
            </Box>
            <Box>
              <AntDesign name="caretright" size={55} color="black" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const Overview = () => {
  return (
    <Box shadow="9" p="10px" mt="15px" mx="auto" borderRadius="29px" bg="#fff">
      <Box>
        <Text mb="10px" fontSize="24px">
          <Text fontWeight="bold">Overview </Text>of my{" "}
          <Text fontWeight="bold">90-day </Text>journey
        </Text>
      </Box>
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </Box>
  );
};

export default Overview;
