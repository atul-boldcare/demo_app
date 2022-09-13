import { Flex } from "native-base";
import React, { FC, ReactNode } from "react";
import { BorderRadiusProps } from "./borderProps";

export interface GridItemProps {
  withBg?: boolean;
  children?: ReactNode;
  borderRadiusProps?: BorderRadiusProps;
  hasMinH?: boolean;
  minH?: string;
}

const GridItem: FC<GridItemProps> = ({
  children,
  borderRadiusProps,
  withBg = true,
  minH = "95px",
  hasMinH = true,
}) => (
  <Flex
    {...borderRadiusProps}
    justifyContent="center"
    alignItems="center"
    flexBasis="90"
    minH={hasMinH ? "90px" : minH}
    bg={withBg ? "rgba(0, 0, 0, 0.6)" : "none"}
    m="2px"
  >
    {children}
  </Flex>
);

export default GridItem;
