import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import rank from "../assests/rank.png"
import arrow from "../assests/arrow.png"
import TextBox from './TextBox'
const HomePageContent7 = () => {
  return (
    <Flex
    bg={'rgba(248, 245, 240, 1)'}
    justifyContent={'center'}
    alignContent={"center"}
    gap="20"
    p="100"
    >
      <Box 
      flex 
      justifyContent="center"
      textAlign="center"
       bg={'white'} 
        p="20"
         w="30%"
        borderRadius="17px"
        borderWidth="2.5px"
        borderStyle="solid "
        borderColor={'rgba(185, 1, 36, 1)'}
        >
      <Image src={rank} alt="Image" />
      <Text
  fontFamily="Mirador"
  fontSize="35px"
  fontStyle="italic"
  fontWeight="900"
  lineHeight="42px"
  letterSpacing="0em"
  textAlign="center"
  color="rgba(185, 1, 36, 1)"
>
  Our Rankings
</Text>
      <Text mt="2" fontSize={"16"}>Top Board School</Text>
    </Box>
    <Flex
     justifyContent={'center'}
     alignItems={"center"}
     gap="20"
    >
      <Box>
      <Image src={arrow} alt="arrow" />
    </Box>
    <TextBox
  heading="#1"
  subtitle="In Dehradun"
  description="Co-Educational Boarding School in Dehradun by Education Today 2020"
/> 
<TextBox
  heading="#2"
  subtitle="In Uttarakhand"
  description="Co-Educational Boarding School in North India by Education Today 2020"
/>
<TextBox
  heading="#4"
  subtitle="In India"
  description="Co-Educational Boarding School in India by Education Today 2020"
/>
    </Flex>
    
    </Flex>
  )
}

export default HomePageContent7