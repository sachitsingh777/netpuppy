import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import home9CO from "../assests/home9CO.png";
import home9AS from "../assests/home9AS.png";
import home9CT from "../assests/home9CT.png";
import home9DAN from "../assests/home9DAN.png";
import home9IN from "../assests/home9IN.png";
import home9LEO from "../assests/home9LIO.png";
import home9PEN from "../assests/home9PEN.png";
import home9TRI from "../assests/home9TRI.png";
import home9UN from "../assests/home9UN.png";
import home9YOU from "../assests/home9YOU.png";

const HomePageContent9 = () => {
  return (
    <Flex>
      <Box position="relative">
        <Image src={home9CO} w="80%" />
        <Box position="absolute" top="60%" left="0" transform="translateY(-50%)" px="4">
          <Text w="40%" color="white" pl="40" fontSize={20}>
            What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive.
          </Text>
        </Box>
      </Box>
      <Box ml="20px" position="relative" right="20px">
        <Box>
          <Flex gap={20}>
            <Box>
              <Image src={home9AS} w="80%" />
            </Box>
            <Box>
              <Image src={home9YOU} w="80%" />
            </Box>
            <Box>
              <Image src={home9LEO} w="80%" />
            </Box>
            <Box>
              <Image src={home9PEN} w="80%" />
            </Box>
          </Flex>
        </Box>
        <Box >
          <Flex position="absolute" top="70%" right="30%" transform="translateY(-50%)" px="4" gap={40}>
            <Box w="300%">
              <Image src={home9UN} w="300%" />
            </Box>
            <Box w="300%">
              <Image src={home9IN} w="300%" />
            </Box>
            <Box w="300%">
              <Image src={home9TRI} w="300%" />
            </Box>
            <Box w="300%">
              <Image src={home9DAN} w="300%" />
            </Box>
            <Box w="300%">
              <Image src={home9CT} w="300%" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomePageContent9;
