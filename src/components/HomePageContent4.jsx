import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import WhyTIS from "../assests/WhyTIS.png";
import why2 from "../assests/why2.png";
import why1 from "../assests/why1.png";
import why12 from "../assests/why12.png";
import why123 from "../assests/why123.png";
import why124 from "../assests/why124.png";
import why125 from "../assests/why125.png";
import ImageWithText from './ImageWithText';

const HomePageContent4 = () => {
  return (
    <Flex w="85%" m="auto"  direction={'column'} justifyContent={'space-between'} >
      <Flex justifyContent="center">
        <Image src={WhyTIS} />
      </Flex>
      <Flex w="100%" justifyContent="center" flexWrap="wrap" gap="10">
        <Box flex="1" p="4" w="40%">
         
             <Text textAlign={'start'} fontSize="25" color="rgba(32, 40, 51, 1)" m='0'>A FOCUS ON...</Text>
       
         
           <Text textAlign={'end'} fontSize="40" color="red" m='0'>MANAGEMENT</Text>
       
          <Flex justifyContent={'end'} m="10">
            <Text textAlign={'start'}>Extremely Friendly and Approachable Management. Tula’s International School combines – respect for tradition with a progressive application of modern sciences, academic rigour with a caring heart, and individual appreciation with the warmth of a school community</Text>
          </Flex>
          
        </Box>
        <Box w="50%" flex="1" p="4" display="flex" justifyContent="center" alignItems="center">
          <Image src={why2} width="90%" height="auto" />
        </Box>
        <Flex flex="1" w="20%" justifyContent={"center"} direction={"column"} >
          <ImageWithText src={why1} text="CAMPUS" />
          <ImageWithText src={why12} text="EXPERT INSTRUCTION"/>
          <ImageWithText src={why123} text="TRAINING METHOD"/>
          <ImageWithText src={why124} text="RATIO"/>
          <ImageWithText src={why125} bg="red"/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HomePageContent4;
