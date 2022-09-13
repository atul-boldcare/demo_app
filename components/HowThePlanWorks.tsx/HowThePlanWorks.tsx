import { Box, Text } from "native-base";
import Card from "./Card";

export const HowThePlanWorks = () => {
  return (
    <Box px="30px" my="10px">
      <Text mb="28px" fontSize="24px" fontWeight={700}>
        How the plan works
      </Text>

      <Text pb="8px" fontSize="16px">
        We've created a high-efficacy performance plan to let you to choose your
        own solution. So what's included in the 3-month Gameplan?
      </Text>
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};
