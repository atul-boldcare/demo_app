import { Box, Text } from "native-base";
import React from "react";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <Box mt="20px">
      <Box mx="30px">
        <Text mb="10px" fontSize="24px">
          <Text fontWeight={700}>Overview </Text>of my{" "}
          <Text fontWeight={700}>90-day </Text>journey
        </Text>
      </Box>
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </Box>
  );
};

export default Overview;
