import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

const HomePageContent10 = () => {
  return (
    <Flex w="100%" m="auto" h="140px"   boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" justifyContent="center" alignItems="center">
      <Box mr="4">
        <Text textAlign="start" fontSize={30} m="0">FIND YOUR</Text>
        <Text textAlign="end" fontSize={30} color="rgba(166, 0, 40, 1)" m="0">FOCUS</Text>
      </Box>
      <Flex>
        <List styleType="none" textAlign="center" spacing={10}>
          <ListItem>-FAQ</ListItem>
          <ListItem>-Calendar</ListItem>
          <ListItem>-E-Prospectus</ListItem>
        </List>
        <List styleType="none" textAlign="center" mt="4" spacing={10}>
          <ListItem>-Registration Form</ListItem>
          <ListItem>-Blogs</ListItem>
          <ListItem>-Privacy Policy</ListItem>
        </List>
        <List styleType="none" textAlign="center" mt="4" spacing={10}>
        <ListItem></ListItem>
        <br></br>
        <ListItem>-Terms & Conditions</ListItem>
        <ListItem></ListItem>
        </List>
        
      </Flex>
    </Flex>
  );
};

export default HomePageContent10;
