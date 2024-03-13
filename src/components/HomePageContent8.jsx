import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import phone from "../assests/phone.png";
import home81 from "../assests/home81.png";
import home82 from "../assests/home82.png";

const HomePageContent8 = () => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center" gap="30">
      <Box w="70%" textAlign="center" pr={300} pl="20">
        <Text fontSize="80px" fontWeight="800" lineHeight="3px" letterSpacing="0.02em" textAlign="center">From the</Text>
        <Text color="rgba(185, 1, 36, 1)" fontFamily="Mirador" fontSize="80px" fontStyle="italic" fontWeight="900" lineHeight="3px" letterSpacing="0.02em" textAlign="center" display="block">Parent</Text>
        <Box mt={4} >
          <Image src={home81} w="60px" h="60px" mx="auto" />
          <Image src={home82} w="500px" h="6px" mx="auto" mt="2" />
        </Box>
        <Text
          fontFamily="TT Chocolates Trl"
          fontSize="20px"
          fontWeight="400"
          noOfLines={4}
          letterSpacing="0.02em"
          textAlign="left"
          mt={40}
        >
          What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success.
        </Text>
      </Box>
      <Box w="30%" bg="rgba(185, 1, 36, 1)" borderTopLeftRadius="30%" borderBottomLeftRadius="30%" p={4}>
        <Box position="relative" right="300px">
          <Image src={phone} />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomePageContent8;
