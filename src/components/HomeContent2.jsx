import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import youtube from "../assests/youtube.png";
import youlogo from "../assests/youlogo.png";

const HomeContent2 = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center" mt={140} mb={80} position="relative">
      <Image src={youtube} borderRadius="md" maxWidth="100%" opacity="1" />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="1">
        <Box
          w="80px"
          h="60px"
          bg="rgba(255, 255, 255, 0.7)"
          borderRadius="10%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="2px solid green"
        >
          <Image src={youlogo} maxWidth="80%" opacity="100" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent2;
