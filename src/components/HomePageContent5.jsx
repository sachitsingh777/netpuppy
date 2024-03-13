import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import home5 from "../assests/home5.png";


const HomePageContent5 = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center" mt={140} mb={80} position="relative">
      <Image src={home5} borderRadius="md" maxWidth="100%" opacity="1" />
      
    </Box>
  );
};

export default HomePageContent5;
