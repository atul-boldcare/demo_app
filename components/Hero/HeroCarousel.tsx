import { Box, Image, FlatList } from "native-base";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

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

const width = Dimensions.get("window").width;

const HeroCarousel = () => {
  return (
    <Box>
      <FlatList
        horizontal
        data={images}
        renderItem={(itemData) => {
          return (
            <Box mt="10px" shadow="9" key={itemData.item.imageUrl}>
              <Box position="relative">
                <Image
                  // borderRadius="20px"
                  source={{ uri: itemData.item.imageUrl }}
                  alt=""
                  // width="100%"
                  width={width}
                  height={350}
                  // mr="5px"
                />
              </Box>
             
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default HeroCarousel;

