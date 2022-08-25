import { Text, Box } from "native-base";
import React, { FC } from "react";
import { Pressable } from "react-native";

export interface IconButtonProps {
  icon: React.ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ icon }) => {
  return (
    <Pressable onPress={() => console.log("pressed")}>
      {/* @ts-ignore */}
      <Box>{icon}</Box>
    </Pressable>
  );
};

export default IconButton;
