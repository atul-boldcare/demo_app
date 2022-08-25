import React from "react";
import { Box, FlatList, Image, Text, Flex } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

{
  /* 
  <FontAwesome name="star" size={24} color="black" />
  <FontAwesome name="star-o" size={24} color="black" />
  <Feather name="arrow-right" size={24} color="black" />
 */
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

const Carousel = () => {
  return (
    <Box>
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
                <Box position="absolute" bottom="80px" left="40px">
                  <Text fontSize="24px" color="white">
                    Your
                  </Text>
                  <Text fontSize="24px" color="white" fontWeight="bold">
                    Performance
                  </Text>
                </Box>
                <Box position="absolute" bottom="60px" left="40px">
                  <Flex flexDir="row">
                    <FontAwesome name="star" size={24} color="white" />
                    <FontAwesome name="star" size={24} color="white" />
                    <FontAwesome name="star" size={24} color="white" />
                    <FontAwesome name="star" size={24} color="white" />
                    <FontAwesome name="star-o" size={24} color="white" />
                  </Flex>
                </Box>
                <Box position="absolute" bottom="10px" left="40px">
                  <Text color="white" width={300}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, ea!
                  </Text>
                </Box>
                <Box position="absolute" top="10px" right="30px">
                  <Feather name="arrow-right" size={50} color="white" />
                </Box>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default Carousel;
