import { Box, Flex, Icon, Text } from "native-base";
import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export interface CardProps {
  //   icon: typeof MaterialCommunityIcons.glyphMap | typeof Feather.glyphMap | typeof AntDesign.glyphMap;
  icon: React.ReactNode;
  text: string;
  desc: string;
}

const Card: FC<CardProps> = ({ icon, text, desc }) => {
  return (
    <Flex flexDir="row">
      <Box mr="2px">{icon}</Box>
      <Flex p="2px">
        <Text mb="0">{text}</Text>
        <Text>{desc}</Text>
      </Flex>
    </Flex>
  );
};

const Speciality = () => {
  return (
    <Flex mt="5px" flexDir="row" justifyContent="space-around">
      <Card
        icon={
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={40}
            color="black"
          />
        }
        text="12"
        desc="weeks"
      />
      <Card
        icon={<Feather name="users" size={40} color="black" />}
        text="91:1"
        desc="Consults"
      />
      <Card
        icon={<AntDesign name="idcard" size={40} color="black" />}
        text="10+"
        desc="Yrs of Exp"
      />
    </Flex>
  );
};

export default Speciality;
