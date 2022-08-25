import { ImageBackground, Pressable } from "react-native";
import { Box, Flex, Image, Slide, Text } from "native-base";
import React, { FC, useState } from "react";

export interface SubSectionProps {
  imageUrl: string;
  text: string;
}

export interface SubSectionTextProps {
  text: string;
}

const SubSection: FC<SubSectionProps> = ({ imageUrl, text }) => {
  return (
    <Box position="relative">
      <ImageBackground
        style={{ width: 170, height: 80 }}
        source={{ uri: imageUrl }}
        borderRadius={10}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          justifyContent="center"
          alignItems="center"
        >
          <Text pb="15px" fontSize="24px" color="white">
            {text}
          </Text>
        </Box>
      </ImageBackground>
    </Box>
  );
};

const SubSectionText: FC<SubSectionTextProps> = ({ text }) => {
  return (
    <Box width="170px" borderRadius="10px" bg="#000" borderBottomRadius={0}>
      <Text p="15px" fontSize="24px" color="white">
        {text}
      </Text>
    </Box>
  );
};

const images = [
  "https://wallpaperaccess.com/full/317501.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
];

const Section = () => {
  const [active, setActive] = useState(0);

  const pressHandler = (index: number) => {
    if (index === 0) setActive(1);
    else setActive(0);
  };

  return (
    <Box shadow="9">
      <Flex mt="5px" flexDir="row" justifyContent="space-between">
        <Box position="relative" top={active === 0 ? "15px" : "0"}>
          {active === 0 ? (
            <Pressable onPress={() => pressHandler(active)}>
              <SubSectionText text="Better Sex from Day 1" />
            </Pressable>
          ) : (
            <Pressable onPress={() => pressHandler(active)}>
              <SubSection
                text="Better Sex from Day 1"
                imageUrl="https://wallpaperaccess.com/full/317501.jpg"
              />
            </Pressable>
          )}
        </Box>
        <Box position="relative" top={active === 1 ? "15px" : "0"}>
          {active === 1 ? (
            <Pressable onPress={() => pressHandler(active)}>
              <SubSectionText text="Last Longer in Bed" />
            </Pressable>
          ) : (
            <Pressable onPress={() => pressHandler(active)}>
              <SubSection
                text="Last Longer in Bed"
                imageUrl="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              />
            </Pressable>
          )}
        </Box>
      </Flex>
      <Box>
        <Pressable onPress={() => pressHandler(active)}>
          <Image
            source={{ uri: images[active] }}
            alt="alt text"
            width="350px"
            height="350px"
            borderRadius="20px"
          />
        </Pressable>
      </Box>
    </Box>
  );
};

export default Section;
