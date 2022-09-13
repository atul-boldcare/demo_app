import { Box, Flex, Icon, Text, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Card = () => (
  <Box p="10px" shadow={9} bg="#fff" borderRadius="29px" mx="10px">
    <Flex flexDir="row" justifyContent="space-between">
      <Box>
        <Text>
          On Day <Text fontWeight={700}> 01</Text>
        </Text>
        <Flex flexDir="row" alignItems="center">
          <Image
            w="61px"
            h="61px"
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            alt=""
            borderRadius={50}
            mr="10px"
          />
          <Flex>
            <Text fontWeight={500}>Initial Introduction Call</Text>
            <Text>Personal Assistant</Text>
          </Flex>
        </Flex>
      </Box>
      <AntDesign name="arrowleft" size={24} color="black" />
    </Flex>
  </Box>
);

export default Card;
