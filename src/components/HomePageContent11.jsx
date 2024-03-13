import { Box, Image, Text,Flex, Button } from '@chakra-ui/react';
import React from 'react';
import map from "../assests/map.png";


const HomePageContent11 = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center"  mb={80} position="relative" bg="black" >
      <Image src={map} borderRadius="md" maxWidth="100%"  opacity="0.5" />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="1">
        <Box
        
         
          
          
        >
         <Text textAlign={'start'} fontSize={'30'} m="0" color="white"   fontWeight={800}>BECOME A PART OF THE...</Text>
         <Text textAlign={'end'} color="rgba(166, 0, 40, 1)" m="0" fontWeight={800} fontSize={'30'}>TULA’S FAMILY</Text>
         <Text color="white" noOfLines={2}>VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR <br></br>Dehradun, Uttarakhand, 248197</Text>
         
         <Flex justifyContent={'space-around'}>
            <Box color="white">(+91) 9458311000</Box>
            <Box color="white">info@tis.edu.in</Box>
         </Flex>
         <Flex mt="40" justifyContent={'space-between'} >
            <Box bg="rgba(166, 0, 40, 1)"  p="6" color="white">VIRTUAL TOUR</Box>
            <Box bg="rgba(166, 0, 40, 1)" p="6" color="white">APPLY NOW</Box>
            <Box bg="rgba(166, 0, 40, 1)" p="6" color="white">fedena LOGIN</Box>
         </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageContent11;
