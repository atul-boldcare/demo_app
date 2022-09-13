import { Box, Image, Text } from "native-base";
import React, { FC } from "react";
import { Feather } from "@expo/vector-icons";
import { images } from "./ReviewsCarousel";

export interface CardProps {
  imageUrl: string;
}

const Card: FC<CardProps> = ({ imageUrl }) => {
  return (
    <Box shadow="5" m="5px" position="relative">
      <Image
        source={{ uri: imageUrl }}
        width={300}
        height={150}
        borderRadius="17px"
        alt=""
      />
      <Box position="absolute" bottom="10px" left="10px">
        <Text fontWeight="bold" color="white" width="80px">
          Better Sex from Day 1
        </Text>
      </Box>
      <Box position="absolute" bottom="10px" left="250px">
        <Feather name="arrow-right" size={40} color="white" />
      </Box>
    </Box>
  );
};

const PreviewCard = () => {
  return (
    <Box shadow="9" bg="#fff" p="20px" mx="auto" borderRadius="29px">
      <Card imageUrl={images[0].imageUrl} />
      <Card imageUrl={images[1].imageUrl} />
    </Box>
  );
};

export default PreviewCard;
