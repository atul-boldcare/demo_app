import { Box, Flex } from "native-base";
import React, { useState } from "react";
import PlanTile from "./PlanTile";
import { Pressable } from "native-base";

const PlanTileSelector = () => {
  const [active, setActive] = useState<0 | 1>(0);
  return (
    <Flex
      flexDir="row"
      //   flexBasis="10"
      // flexGrow={1}
      justifyContent="space-between"
      mx="10px"
      mt="10px"
    >
      <Pressable onPress={() => setActive(0)}>
        <PlanTile active={active === 0} text="Better Sex from Day 1" />
      </Pressable>
      <Pressable onPress={() => setActive(1)}>
        <PlanTile active={active === 1} text="Last Longer in Bed" />
      </Pressable>
    </Flex>
  );
};

export default PlanTileSelector;
