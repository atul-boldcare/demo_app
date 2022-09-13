import React, { FC, ReactNode } from "react";
import { Box, FlatList, Image, Text, Flex } from "native-base";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export interface CardProps {
  icon: ReactNode;
  text: string;
}

const Card: FC<CardProps> = (props) => (
  <Flex
    flexDir="row"
    alignItems="center"
    bg="#fff"
    borderRadius="15px"
    m="2px"
    p="10px"
  >
    <Box mx="10px">{props.icon}</Box>
    <Text color="#000">{props.text}</Text>
  </Flex>
);

{
  /* <MaterialCommunityIcons name="arm-flex" size={24} color="black" /> */
  /* <Ionicons name="md-star" size={24} color="black" /> */
}

export const images = [
  { id: 1, imageUrl: "https://wallpaperaccess.com/full/317501.jpg" },
  {
    id: 2,
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
  },
];

const ReviewCarousel = () => {
  return (
    <Box my="10px">
      <Text mx="30px" fontSize="24px">
        <Text fontWeight={700}>Real </Text>People,{" "}
        <Text fontWeight={700}>Real</Text> Stories
      </Text>
      <FlatList
        horizontal
        data={images}
        renderItem={(itemData) => {
          return (
            <Box shadow="9" key={itemData.item.imageUrl}>
              <Box position="relative">
                <Image
                  borderRadius="20px"
                  source={{ uri: itemData.item.imageUrl }}
                  alt=""
                  width={350}
                  height={350}
                  m="5px"
                />
                <LinearGradient
                  colors={["rgba(0, 0, 0, .9)", "transparent"]}
                  end={[1, 0.4]}
                  start={[1, 0.8]}
                  style={styles.gradientContainer}
                />
                <Box
                  pb="15px"
                  position="absolute"
                  bottom={0}
                  right={0}
                  left={0}
                >
                  <Flex alignItems="center" justifyContent="flex-end">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Box>
                        <Text fontSize="24px" color="#fff">
                          "Your Performance"
                        </Text>
                        <Box mt="10px">
                          <Card
                            icon={
                              <MaterialCommunityIcons
                                name="arm-flex"
                                size={24}
                                color="#000"
                              />
                            }
                            text="Incresed Performance Levels"
                          />
                          <Card
                            icon={
                              <Ionicons name="md-star" size={24} color="#000" />
                            }
                            text="Lasted 5x Longer"
                          />
                        </Box>
                      </Box>
                    </Flex>
                    <Text m="10px" fontSize="18px" color="#fff">
                      Name - age
                    </Text>
                  </Flex>
                </Box>

                {/* <Box position="absolute" top="10px" right="30px">
                  <Feather name="arrow-right" size={50} color="white" />
                </Box> */}
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default ReviewCarousel;

const styles = StyleSheet.create({
  gradientContainer: {
    position: "absolute",
    width: 350,
    height: 350,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20,
    margin: 5,
  },
});

// <Box position="absolute" bottom="80px" left="40px">
//                   <Text fontSize="24px" color="white">
//                     Your
//                   </Text>
//                   <Text fontSize="24px" color="white" fontWeight="bold">
//                     Performance
//                   </Text>
//                 </Box>
//                 <Box position="absolute" bottom="60px" left="40px">
//                   <Flex flexDir="row">
//                     <FontAwesome name="star" size={24} color="white" />
//                     <FontAwesome name="star" size={24} color="white" />
//                     <FontAwesome name="star" size={24} color="white" />
//                     <FontAwesome name="star" size={24} color="white" />
//                     <FontAwesome name="star-o" size={24} color="white" />
//                   </Flex>
//                 </Box>
//                 <Box position="absolute" bottom="10px" left="40px">
//                   <Text color="white" width={300}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Dignissimos, ea!
//                   </Text>
//                 </Box>
