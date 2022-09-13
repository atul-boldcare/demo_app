import React, { FC, useState } from "react";
import { Box, Flex, Text, Pressable, Button } from "native-base";
import { ImageBackground } from "react-native";
import GridItem from "./GridItem";
import PlanDetail from "./PlanDetail";
import PlanPrice from "./PlanPrice";
import WhatYouGetInPlan from "./WhatYouGetInPlan";
import { FontAwesome } from "@expo/vector-icons";
{
  /* <FontAwesome name="check-circle" size={24} color="black" /> */
}

export interface PlansProps {}

export interface MonthProps {
  month: 1 | 3 | 6;
}

const Month: FC<MonthProps> = (props) => (
  <Flex justifyContent="center" alignItems="center">
    <Text fontSize="16px" color="#fff">
      {props.month}
    </Text>
    <Text fontSize="16px" color="#fff">
      Month
    </Text>
  </Flex>
);

export const Plans: FC<PlansProps> = (props) => {
  const [plan, setPlan] = useState<1 | 3 | 6>(3);

  return (
    <ImageBackground
      source={require("../../assets/images/plan_background.png")}
    >
      <Box py="20px">
        <Text px="20px" py="10px" color="white" fontSize="24px">
          Explore <Text fontWeight={700}>all plans</Text>
        </Text>
        <Flex flexDir="row">
          <Flex flexBasis="95" borderWidth={2} borderColor="transparent">
            <GridItem withBg={false} hasMinH={false} minH="60px"></GridItem>
            <GridItem withBg={false}>
              <WhatYouGetInPlan text="Expert Consultation" />
            </GridItem>
            <GridItem withBg={false}>
              <WhatYouGetInPlan text="Therapist Consultation" />
            </GridItem>
            <GridItem withBg={false}>
              <WhatYouGetInPlan text="Nutrition Session" />
            </GridItem>
            <GridItem withBg={false}>
              <WhatYouGetInPlan text="Products Worth" />
            </GridItem>
            <GridItem withBg={false}>
              <WhatYouGetInPlan text="Personal Assistant" />
            </GridItem>
          </Flex>
          <Flex
            flexBasis="95"
            borderWidth={2}
            borderColor={plan === 1 ? "#fff" : "transparent"}
            borderRadius={23}
          >
            <Pressable onPress={() => setPlan(1)}>
              <GridItem hasMinH={false} minH="60px" withBg={false}>
                <Month month={1} />
              </GridItem>
              <GridItem borderRadiusProps={{ borderTopLeftRadius: "23px" }}>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem borderRadiusProps={{ borderBottomLeftRadius: "23px" }}>
                <FontAwesome name="check-circle" size={35} color="#fff" />
              </GridItem>
              <GridItem withBg={false}>
                <PlanPrice />
              </GridItem>
              <GridItem withBg={false} hasMinH={false} minH="0">
                <Button
                  borderRadius={20}
                  width="100%"
                  bg={plan === 1 ? "#fff" : "#000"}
                  _text={{
                    color: `${plan === 1 ? "#000" : "#fff"}`,
                    fontWeight: 700,
                  }}
                >
                  BUY
                </Button>
              </GridItem>
            </Pressable>
          </Flex>
          <Flex
            flexBasis="95"
            borderWidth={2}
            borderColor={plan === 3 ? "#fff" : "transparent"}
            borderRadius={20}
          >
            <Pressable onPress={() => setPlan(3)}>
              <GridItem hasMinH={false} minH="60px" withBg={false}>
                <Month month={3} />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <FontAwesome name="check-circle" size={35} color="#fff" />
              </GridItem>
              <GridItem withBg={false}>
                <PlanPrice />
              </GridItem>
              <GridItem withBg={false} hasMinH={false} minH="0">
                <Button
                  bg={plan === 3 ? "#fff" : "#000"}
                  _text={{
                    color: `${plan === 3 ? "#000" : "#fff"}`,
                    fontWeight: 700,
                  }}
                  borderRadius={20}
                  width="100%"
                >
                  BUY
                </Button>
              </GridItem>
            </Pressable>
          </Flex>
          <Flex
            flexBasis="95"
            borderWidth={2}
            borderColor={plan === 6 ? "#fff" : "transparent"}
            borderRadius={20}
          >
            <Pressable onPress={() => setPlan(6)}>
              <GridItem hasMinH={false} minH="60px" withBg={false}>
                <Month month={6} />
              </GridItem>
              <GridItem borderRadiusProps={{ borderTopRightRadius: "23px" }}>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem>
                <PlanDetail />
              </GridItem>
              <GridItem borderRadiusProps={{ borderBottomRightRadius: "23px" }}>
                <FontAwesome name="check-circle" size={35} color="#fff" />
              </GridItem>
              <GridItem withBg={false}>
                <PlanPrice />
              </GridItem>
              <GridItem withBg={false} hasMinH={false} minH="0">
                <Button
                  borderRadius={20}
                  width="100%"
                  bg={plan === 6 ? "#fff" : "#000"}
                  _text={{
                    color: `${plan === 6 ? "#000" : "#fff"}`,
                    fontWeight: 700,
                  }}
                >
                  BUY
                </Button>
              </GridItem>
            </Pressable>
          </Flex>
        </Flex>
      </Box>
    </ImageBackground>
  );
};

{
  /* <Flex flexDir="row">
        <Box flexBasis="95">
          <PlanBenefitsContainer />
        </Box>
        <Box
          flexBasis="95"
          borderWidth={2}
          borderColor={plan === 1 ? "#fff" : "transparent"}
          borderRadius={23}
        >
          <Pressable onPress={() => setPlan(1)}>
            <Container month={1} />
          </Pressable>
        </Box>
        <Box
          flexBasis="95"
          borderWidth={2}
          borderColor={plan === 3 ? "#fff" : "transparent"}
          borderRadius={23}
        >
          <Pressable onPress={() => setPlan(3)}>
            <Container month={3} />
          </Pressable>
        </Box>
        <Box
          flexBasis="95"
          borderWidth={2}
          borderColor={plan === 6 ? "#fff" : "transparent"}
          borderRadius={23}
        >
          <Pressable onPress={() => setPlan(6)}>
            <Container month={6} />
          </Pressable>
        </Box>
      </Flex> */
}
