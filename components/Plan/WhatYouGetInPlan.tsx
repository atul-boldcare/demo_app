import { FC } from "react";
import { Flex, Image, Text } from "native-base";

export interface WhatYouGetInPlanProps {
  text: string;
}

const WhatYouGetInPlan: FC<WhatYouGetInPlanProps> = (props) => {
  const text = props.text.split(" ");
  return (
    <Flex alignItems="center" flexDir="column" m="5px" color="#fff">
      <Image
        src="https://via.placeholder.com/150"
        alt=""
        w="40px"
        h="40px"
        borderRadius={50}
        m="2px"
        ml="0"
      />
      {/* <Text textAlign="center" color="#fff" fontSize="12px" lineHeight={15}>
        {props.text}
      </Text> */}
      <Text color="#fff" fontSize="14px" lineHeight={14}>
        {text[0]}
      </Text>
      <Text color="#fff" fontSize="14px" lineHeight={14}>
        {text[1]}
      </Text>
    </Flex>
  );
};

export default WhatYouGetInPlan;
