import { Box, Center, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import logo from "../assests/logo.png";
import menu from "../assests/menu.png";

const Navbar = () => {
  return (
    
      <Flex w="100%" maxWidth={"1300px"}  m="auto" justifyContent="space-between" alignItems="center">
        <Box flex="1">
          <Image src={logo} alt="Logo" w="40%" mt="20" ml="10" />
        </Box>
        <Center flex="5" mx="90">
          <Flex justifyContent="space-evenly" gap="20">
            <Box>APPLY</Box>
            <Box>WHY CHOOSE US</Box>
            <Box>REGISTRATION</Box>
            <Box>|</Box>
            <Box>AWARD</Box>
            <Box>VIRTUAL TOUR</Box>
          </Flex>
        </Center>
        <Box flex="1" maxW="150px" textAlign="right">
          <Image src={menu} alt="Menu" w="40%" mt="20" mr="10" />
        </Box>
      </Flex>
    
  );
};

export default Navbar;
