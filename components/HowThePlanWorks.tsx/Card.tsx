import { Box, Flex, Text, Image } from "native-base";

const Card = () => {
  return (
    <Box shadow={9} bg="#000" my="15px" p="30px" borderRadius="29px">
      <Flex flexDir="row" alignItems="center">
        <Box width="70px">
          <Image
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            alt=""
            w="70px"
            h="70px"
            borderRadius={50}
          />
        </Box>
        <Box ml="10px">
          <Text fontSize="20px" color="#fff">
            4 Consultations with
          </Text>
          <Text fontSize="20px" color="#FFCC24">
            Expert Sexologist
          </Text>
          <Flex>
            <Text
              fontSize="20px"
              bg="#fff"
              color="#000"
              px="6px"
              py="4px"
              mt="6px"
            >
              Worth ₹2000
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Text fontSize="16px" color="#fff" mt="11px">
        5,00,000+ users have trusted Bold Care to solve their problems in the
        last 2 years. We are the largest{" & s"}most trusted digital sexual
        wellness company in India.
      </Text>
    </Box>
  );
};

export default Card;
