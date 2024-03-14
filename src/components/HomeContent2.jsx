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
          _hover="cur"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" stroke-width="0" fill="currentColor" />
</svg>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent2;
