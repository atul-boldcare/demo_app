import { Box, Text } from "native-base";
import React, { FC, useRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Animated } from "react-native";

export interface PlatTileProps {
  text: string;
  active: boolean;
}

// export interface RotateArrowProps {
//   children: React.ReactNode;
//   active: boolean;
// }

// const RotateArrow: FC<RotateArrowProps> = ({ children, active }) => {
//   const rotateArrow = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(rotateArrow, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, [rotateArrow]);

//   return (
//     <Animated.View style={active ? { transform: [{ rotate: "90deg" }] } : {}}>
//       {children}
//     </Animated.View>
//   );
// };

const PlanTile: FC<PlatTileProps> = ({ text, active = 0 }) => {
  return (
    <Box
      width="170px"
      borderRadius="16px"
      bg={active ? "#000" : "#fff"}
      shadow={active ? 0 : 9}
      position="relative"
      bottom={active ? "-10px" : "0px"}
      borderBottomRadius={active ? 0 : "16px"}
    >
      <Text p="15px" fontSize="24px" color={active ? "#fff" : "#000"}>
        {text}
      </Text>
      <Box
        style={
          active
            ? { transform: [{ rotate: "90deg" }, { perspective: 100 }] }
            : {}
        }
        position="absolute"
        top="35%"
        right="5px"
      >
        <AntDesign
          name="arrowright"
          size={30}
          color={active ? "#fff" : "#000"}
        />
      </Box>
    </Box>
  );
};

export default PlanTile;
