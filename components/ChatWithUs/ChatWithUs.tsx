import React, { FC } from "react";
import { Box, Flex, Icon, Image, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export interface ChatWithUsProps {}

export const ChatWithUs: FC<ChatWithUsProps> = (props) => {
  return (
    <Flex
      mx="30px"
      my="30px"
      bg="#7CAF2D"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="29px"
      shadow={9}
    >
      <Image
        borderLeftRadius="29px"
        source={{
          uri: "https://images.prismic.io/boldcare/fc5ecd62-8204-4e0f-8a5a-5abdb9e24bca_PA2.png?auto=compress,format",
        }}
        alt=""
        w="100px"
        minH="120px"
        bg="#ccc"
      />
      <Text ml="-20px" fontSize="24px" color="#fff">
        Chat with us
      </Text>
      <Box mr="20px">
        <FontAwesome name="whatsapp" size={40} color="#fff" />
      </Box>
    </Flex>
  );
};
