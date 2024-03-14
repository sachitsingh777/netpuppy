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
    
    <Box className="questionSection" padding="50px" display="flex" flexWrap="wrap">
    <Text as="h1" width="100%" textAlign="center" fontSize="30px" fontStyle="italic" marginBottom="30px">
      Why <Text as="span" color="rgba(185, 1, 36, 1)">TIS</Text>?
    </Text>
    <Flex flex="1" width="50%" flexDirection="column" justifyContent="center">
      <Text fontSize="28px" textAlign={'start'} m="0">A FOCUS ON...</Text>
      <Text color="rgba(185, 1, 36, 1)" fontSize="46px" m="0"  textAlign={'center'}>MANAGEMENT</Text>
      <Text marginTop="50px" marginRight="50px">
        Extremely Friendly and Approachable Management. Tula’s International School combines – respect for tradition with a progressive application of modern sciences, academic rigour with a caring heart, and individual appreciation with the warmth of a school community
      </Text>
    </Flex>
    <Flex flex="1" width="50%" marginRight="50px">
      <Image src={why2} alt="Background" borderRadius="5px" width="calc(100% - 150px)" marginRight="50px" objectFit="cover" />
      <Box>
        <ul style={{ padding: 0, margin: 0, listStyle: 'none', width: '100px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <li style={{ textAlign: 'center', fontSize: '.9rem', borderRadius: '5px', padding: '5px' }}>
            <Image src={why1} alt="Campus" height="40px" width="40px" />
            <Text>CAMPUS</Text>
          </li>
          <li style={{ textAlign: 'center', fontSize: '.9rem', borderRadius: '5px', padding: '5px' }}>
            <Image src={why12} alt="Expert Instruction" height="40px" width="40px" />
            <Text>EXPERT INSTRUCTION</Text>
          </li>
          <li style={{ textAlign: 'center', fontSize: '.9rem', borderRadius: '5px', padding: '5px' }}>
            <Image src={why123} alt="Training Methods" height="40px" width="40px" />
            <Text>TRAINING METHODS</Text>
          </li>
          <li style={{ textAlign: 'center', fontSize: '.9rem', borderRadius: '5px', padding: '5px' }}>
            <Image src={why124} alt="Ratio" height="40px" width="40px" />
            <Text>RATIO</Text>
          </li>
          <li style={{ textAlign: 'center', fontSize: '.9rem', borderRadius: '5px', padding: '5px', backgroundColor: 'rgba(185, 1, 36, 1)' }}>
            <Image src={why125} alt="Management" height="40px" width="40px" />
            <Text color="white">MANAGEMENT</Text>
          </li>
        </ul>
      </Box>
    </Flex>
  </Box>
  );
}

export default HomePageContent4;
