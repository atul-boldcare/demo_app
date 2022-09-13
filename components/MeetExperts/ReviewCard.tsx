import {
  Box,
  Image,
  Flex,
  Text,
  Modal,
  Pressable,
  ScrollView,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const ReviewCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const MAX_LENGTH = 50;
  const review = "lakdfjdslkfdjslfkdsajflakfd;lfkdslkdsfjlakdfjaldskfjjklsadlk";
  const name = "alkfj";
  const age = 34;
  return (
    <Box minW="180px" ml="10px">
      <Box position="relative">
        <Image
          w="180px"
          h="260px"
          source={{
            uri: "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
          }}
          alt=""
          borderRadius={17}
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, .9)", "transparent"]}
          end={[1, 0.2]}
          start={[1, 0.8]}
          style={styles.gradientContainer}
        />
        <Flex
          p="10px"
          color="white"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          flexDir="column"
          height="100%"
          justifyContent={"flex-end"}
        >
          <Box position="relative" zIndex={10000}>
            {review.length > MAX_LENGTH ? (
              <Box>
                <Text lineHeight={20} fontSize="16px" color="#fff">
                  {review.substring(0, MAX_LENGTH)}{" "}
                </Text>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Text fontSize="16px" color="#fff" underline>
                    read more
                  </Text>
                </Pressable>
                <Modal
                  isOpen={modalVisible}
                  onClose={() => setModalVisible(false)}
                >
                  <Modal.Content bg="#000" color="#fff" mx="10px">
                    <Modal.CloseButton />
                    <Modal.Header bg="#000">
                      <Text color="#fff">
                        {name} - {age}
                      </Text>
                      <Flex flexDir="row" mb="8px">
                        <FontAwesome name="star" size={20} color="#fff" />
                        <FontAwesome name="star" size={20} color="#fff" />
                        <FontAwesome name="star" size={20} color="#fff" />
                        <FontAwesome name="star" size={20} color="#fff" />
                        <FontAwesome name="star-o" size={20} color="#fff" />
                      </Flex>
                    </Modal.Header>
                    <Modal.Body pb="20px">
                      <ScrollView>
                        <Text color="#fff">{review}</Text>
                      </ScrollView>
                    </Modal.Body>
                  </Modal.Content>
                </Modal>
              </Box>
            ) : (
              <Text color="#fff" fontSize="16px">
                {review}
              </Text>
            )}
          </Box>
          <Text color="#fff" mt="10px" mb="5px" fontWeight="bold">
            {name}, {age}
          </Text>
          <Flex flexDir="row" mb="8px">
            <FontAwesome name="star" size={20} color="#fff" />
            <FontAwesome name="star" size={20} color="#fff" />
            <FontAwesome name="star" size={20} color="#fff" />
            <FontAwesome name="star" size={20} color="#fff" />
            <FontAwesome name="star-o" size={20} color="#fff" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  gradientContainer: {
    position: "absolute",
    width: 180,
    height: 260,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 17,
  },
});
{
  /* <Box position="relative">
{image}
<Flex
  p="10px"
  color="white"
  position="absolute"
  top={0}
  left={0}
  right={0}
  bottom={0}
  flexDir="column"
  height="100%"
  justifyContent={"end"}
>
  <Box position="relative" zIndex={10000}>
    {review.length > MAX_LENGTH ? (
      <Box lineHeight={1.2}>
        <Text>{review.substring(0, MAX_LENGTH)} </Text>
        <Text onClick={onOpen} as="u">
          read more
        </Text>
        <Modal isCentered size="sm" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="#000" color="#fff" mx="10px">
            <ModalHeader>
              <Text>
                {name} - {age}
              </Text>
              <Flex mb="8px">
                <Icon as={AiFillStar} w={4} h={4} color="white" />
                <Icon as={AiFillStar} w={4} h={4} color="white" />
                <Icon as={AiFillStar} w={4} h={4} color="white" />
                <Icon as={AiFillStar} w={4} h={4} color="white" />
                <Icon as={AiOutlineStar} w={4} h={4} color="white" />
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb="20px">{review}</ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    ) : (
      <Text>{review}</Text>
    )}
  </Box>
  <Text textStyle={"body1"} mt="10px" mb="5px" fontWeight="bold">
    {name}, {age}
  </Text>
  <Flex mb="8px">
    <Icon as={AiFillStar} w={4} h={4} color="white" />
    <Icon as={AiFillStar} w={4} h={4} color="white" />
    <Icon as={AiFillStar} w={4} h={4} color="white" />
    <Icon as={AiFillStar} w={4} h={4} color="white" />
    <Icon as={AiOutlineStar} w={4} h={4} color="white" />
  </Flex>
</Flex>
</Box> */
}
