import React from "react";
import { Box, Image } from "native-base";
import Carousel from "react-native-snap-carousel";

const images = [
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

const CustomCarousel = () => {
  // @ts-ignore
  const _renderItem = ({ item, index }) => {
    return (
      <Box>
        <Image source={{ uri: item.imageUrl }} width={100} height={100} />
      </Box>
    );
  };
  return (
    <Box>
      <Carousel
        data={images}
        renderItem={_renderItem}
        sliderHeight={100}
        sliderWidth={100}
      />
    </Box>
  );
};

export default CustomCarousel;
