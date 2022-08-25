import React from "react";
import { Box, Flex, Text } from "native-base";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

{
  /* <Foundation name="home" size={24} color="black" /> */
  /* <FontAwesome name="shopping-bag" size={24} color="black" /> */
  /* <Foundation name="play-video" size={24} color="black" /> */
}

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <Box mt="50px" position="absolute" bottom="0" width="100%">
      <Flex bg="#000" flexDir="row" justifyContent="space-around" p="5px">
        <Pressable
          onPress={() => {
            // @ts-ignore
            navigation.navigate("Home");
          }}
        >
          <Box>
            <Foundation name="home" size={40} color="white" />
            <Text fontSize="14px" textAlign="center" color="#fff">
              Home
            </Text>
          </Box>
        </Pressable>
        <Pressable
          onPress={() => {
            // @ts-ignore
            navigation.navigate("Test1");
          }}
        >
          <Box bg="black">
            <Box position="relative">
              <MaterialCommunityIcons
                name="rectangle-outline"
                size={40}
                color="white"
              />
              <Box position="absolute" top="2" left="2">
                <MaterialCommunityIcons
                  name="rectangle-outline"
                  size={40}
                  color="white"
                />
              </Box>
            </Box>
            <Text fontSize="14px" textAlign="center" color="#fff">
              Program
            </Text>
          </Box>
        </Pressable>
        <Pressable>
          <Box>
            <Foundation name="play-video" size={40} color="white" />
            <Text fontSize="14px" textAlign="center" color="#fff">
              Video
            </Text>
          </Box>
        </Pressable>
        <Pressable>
          <Box>
            <Feather name="shopping-bag" size={40} color="white" />
            <Text fontSize="14px" textAlign="center" color="#fff">
              Shop
            </Text>
          </Box>
        </Pressable>
      </Flex>
    </Box>
  );
};

export default Navbar;
