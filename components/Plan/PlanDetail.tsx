import { FC } from "react";
import { Flex, Text } from "native-base";
import { BorderRadiusProps } from "./borderProps";

export interface PlanDetailProps {
  borderProps?: BorderRadiusProps;
}

const PlanDetail: FC<PlanDetailProps> = (props) => {
  return (
    <Flex
      flexBasis="100"
      m="1px"
      // bg="rgba(0, 0, 0, .4)"
      color="#000"
      alignItems="center"
      justifyContent="center"
      {...props.borderProps}
    >
      <Text color="#fff" fontSize="20px" fontWeight="bold">
        1
      </Text>
      <Text fontSize="20px" color="#fff">
        worth
      </Text>
      <Text color="#fff" fontSize="20px" fontWeight="bold">
        &#8377;899
      </Text>
    </Flex>
  );
};

export default PlanDetail;
