import { Flex, Text } from "native-base";
import { FC } from "react";

export interface PlanPriceProps {
  mrp?: number;
  discount?: number;
  price?: number;
}

const PlanPrice: FC<PlanPriceProps> = (props) => {
  return (
    <Flex
      flexBasis="100"
      color="#fff"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="16px" fontWeight="bold" color="#FFDD6DDE">
        30%Off
      </Text>
      <Text fontSize="24px" fontWeight="bold" color="#fff">
        &#8377;4999
      </Text>
      <Text fontSize="16px" strikeThrough color="#fff">
        &#8377;7999
      </Text>
    </Flex>
  );
};

export default PlanPrice;
