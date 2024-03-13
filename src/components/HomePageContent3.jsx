import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import image19 from "../assests/image19.png";
import Group12 from "../assests/Group12.png";

const HomePageContent3 = () => {
  return (
    <Flex  justifyContent="space-between" p="4"  borderRadius="lg">
      <Box flex="1" mr="4">
        <Flex justifyContent="center">
          <Image src={image19} alt="School Image" />
        </Flex>
      </Box>
      <Box flex="1">
        <Box mb="4" w="90%">
          <Text fontWeight="bold" fontSize={36} color="red" mb="2">At Tula’s, we ask, “How can we make school better?”</Text>
          <Text fontSize="md">Using the latest research on how girls learn best, we designed an innovative modular schedule, personalized for each student. Our girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying here. Develop leadership skills, build compassion, gain responsibility, and prepare to change the world.</Text>
        </Box>
        <Flex justifyContent="flex-end" mt="120">
          <Image src={Group12} alt="Learn More" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomePageContent3;
