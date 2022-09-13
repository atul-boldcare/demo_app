import { Box, Button, Flex, Text } from "native-base";
import { FC } from "react";

export interface BorderProps {
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}

export interface PlanItemProps {
  children?: React.ReactNode;
  borderProps?: BorderProps;
  withBg?: boolean;
  isCentered?: boolean;
}

const PlanItem: FC<PlanItemProps> = ({
  children,
  borderProps,
  withBg = true,
  isCentered = true,
}) => (
  <Flex
    {...borderProps}
    justifyContent="center"
    alignItems={isCentered ? "center" : "flex-start"}
    w="90px"
    h="100px"
    bg={withBg ? "#C8C8C8" : "none"}
    m="1px"
  >
    {children}
  </Flex>
);

const Plans = () => {
  return (
    <Box m="10px">
      {/* 1st row */}
      <Flex flexDir="row">
        <PlanItem withBg={false} />
        <PlanItem withBg={false}>
          <Text>1 Month</Text>
        </PlanItem>
        <PlanItem withBg={false}>
          <Text>3 Month</Text>
        </PlanItem>
        <PlanItem withBg={false}>
          <Text>6 Month</Text>
        </PlanItem>
      </Flex>
      {/* 2nd row */}
      <Flex flexDir="row">
        <PlanItem withBg={false} isCentered={false}>
          <Text>Expert Consultations</Text>
        </PlanItem>
        <PlanItem borderProps={{ borderTopLeftRadius: 20 }} />
        <PlanItem />
        <PlanItem borderProps={{ borderTopRightRadius: 20 }} />
      </Flex>
      {/* 3rd row */}
      <Flex flexDir="row">
        <PlanItem withBg={false} isCentered={false}>
          <Text>Effective Medicines</Text>
        </PlanItem>
        <PlanItem />
        <PlanItem />
        <PlanItem />
      </Flex>
      {/* 4th row */}
      <Flex flexDir="row">
        <PlanItem withBg={false} isCentered={false}>
          <Text>Therapy Sessions</Text>
        </PlanItem>
        <PlanItem />
        <PlanItem />
        <PlanItem />
      </Flex>
      {/* 5th row */}
      <Flex flexDir="row">
        <PlanItem withBg={false} isCentered={false}>
          <Text>Personal Assistant</Text>
        </PlanItem>
        <PlanItem borderProps={{ borderBottomLeftRadius: 20 }} />
        <PlanItem />
        <PlanItem borderProps={{ borderBottomRightRadius: 20 }} />
      </Flex>
      {/* 6th row */}
      <Flex flexDir="row">
        <PlanItem withBg={false} />
        <PlanItem withBg={false}>
          <Button bg="#000" colorScheme="black" width="100%">
            BUY
          </Button>
        </PlanItem>
        <PlanItem withBg={false}>
          <Button
            onPress={() => console.log("pressed")}
            bg="#000"
            colorScheme="black"
            width="100%"
          >
            BUY
          </Button>
        </PlanItem>
        <PlanItem withBg={false}>
          <Button
            onPress={() => console.log("pressed")}
            bg="#000"
            colorScheme="black"
            width="100%"
          >
            BUY
          </Button>
        </PlanItem>
      </Flex>
    </Box>
  );
};

export default Plans;
