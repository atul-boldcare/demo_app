import React from "react";
import { Box, Text } from "native-base";
import Card from "./Card";

const Calls = () => {
  return (
    <Box>
      <Card />
      <Box p="20px" fontSize="15px">
        <Text>Hello Name ,</Text>
        <Text py="20px">
          We are looking forward to your third diet review consultation call
          with you nutritionist join the call and get all your questions and
          queries related to your diet solved on this call. Why ls This Call
          Important? - This is the third call with your nutritionist after you
          have received your diet plans. In this call you can ask your
          nutritionist questions related to current diet plan.
        </Text>
        <Text>
          - Your expert has gone through your lifestyle, medical conditions and
          food habits by which the expert has made the necessary changes as per
          your requirements still if you are not able to follow your plan due to
          any reason speak to ourexpert on this call to get further
          customization of your diet plan.We are eager to answer all your
          queries and assist you with your nutritional and dietary concerns.
        </Text>
      </Box>
    </Box>
  );
};

export default Calls;
