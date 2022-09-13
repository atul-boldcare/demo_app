import { Box, Image, Text, Flex, Icon, FlatList } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import DoctorCard from "./MeetExperts/DoctorCard";
import ReviewCard from "./MeetExperts/ReviewCard";
import { Fontisto } from "@expo/vector-icons";

// const DoctorCard = () => (
//   <Box minW="180px" ml="10px" color="white">
//     <Box position="relative">
//       <Image
//         w="180px"
//         h="260px"
//         source={{
//           uri: "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
//         }}
//         alt=""
//         borderRadius={17}
//       />
//       <Box p="10px" position="absolute" top="40%">
//         <Text color="white">Dr Name</Text>
//         <Text color="white" my="5px" fontSize="10px" w="150px">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vel
//           quam rerum soluta repellendus asperiores ipsum labore omnis, est enim!
//         </Text>
//         <Flex flexDir="row" alignItems="center">
//           <Box mr="5px">
//             <SimpleLineIcons name="badge" size={24} color="white" />
//           </Box>
//           <Text color="white" w="150px" fontSize="10px">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//           </Text>
//         </Flex>
//       </Box>
//     </Box>
//   </Box>
// );

// const ReviewCard = () => (
//   <Box minW="180px" ml="10px">
//     <Box position="relative">
//       <Image
//         w="180px"
//         h="260px"
//         source={{
//           uri: "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
//         }}
//         alt=""
//         borderRadius={17}
//       />
//       <Box p="10px" position="absolute" top="45%">
//         <Text>Name</Text>
//         <Flex flexDir="row">
//           <FontAwesome name="star" size={24} color="white" />
//           <FontAwesome name="star" size={24} color="white" />
//           <FontAwesome name="star" size={24} color="white" />
//           <FontAwesome name="star" size={24} color="white" />
//           <FontAwesome name="star-o" size={24} color="white" />
//         </Flex>
//         <Text color="white" fontSize="10px">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
//           accusantium possimus ad laudantium culpa, magnam vel animi doloremque
//           dicta sapiente?
//         </Text>
//       </Box>
//     </Box>
//   </Box>
// );

const DoctorReviews = () => {
  return (
    <Box>
      <Box my="25px">
        <DoctorCard />
      </Box>

      {/* <AnimationBox translateX={30}>
        <Flex overflow="auto" position="relative" left="20px">
          <ReviewCard /
          <ReviewCard />
          <ReviewCard />
        </Flex>
      </AnimationBox> */}
      <Flex flexDir="row" alignItems="center">
        <Text mx="30px" fontSize="20px" color="#707070">
          Reviews
        </Text>
        <Fontisto name="arrow-right-l" size={24} color="#707070" />
      </Flex>
      <FlatList horizontal data={[1, 2, 3]} renderItem={() => <ReviewCard />} />
    </Box>
  );
};

export default DoctorReviews;
