import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import award from "../assests/award.png"
import seemore from "../assests/seemore.png"
import home61 from "../assests/home61.png"
import home62 from "../assests/home62.png"
import home63 from "../assests/home63.png"
import ImageContent from './ImageContent'

const HomePageContent6 = () => {
  return (
    <Flex w="90%" m="auto" mb="90">
        <Box className='left' w="45%">
            <Box m="30" mr="60" mb="60" className='right1'>
                <ImageContent imageUrl={home61}  paragraph={'Best Residential School in Uttarakhand, India'} />
            </Box>
            <Box m="30" ml="60" mt="60" className='right2'>
                <ImageContent imageUrl={home63}  paragraph={'Best Residential School in Uttarakhand, India'} />
            </Box>
        </Box>
        <Box className='mid' w="10%" ml="40"  mr="10"display="flex" justifyContent="center" alignItems="center">
            <Image src={seemore} />
        </Box>
        <Box className='right' w="45%">
            <Box className='left1'>
                <Text fontFamily="Mirador"
                    fontSize="30px"
                    fontStyle="italic"
                    fontWeight="900"
                    lineHeight="28px"
                    letterSpacing="0.02em"
                    textAlign="left"
                    noOfLines={3}
                >
                    Our commitment to all-round development shines in diverse extracurricular activities.
                </Text>
                <Text fontSize="30px" color="rgba(96, 189, 187, 1)">( Our Students love that! )</Text>
            </Box>
            <Center m="50"className='left2'>
                <ImageContent imageUrl={home62} paragraph={'International School Award, India 2019'} />
            </Center>
            <Box className='left3'w="250px" h="16px" mt="150px" ml="70">
                <Image src={award} w="100%" />
            </Box>
        </Box>
    </Flex>
  )
}

export default HomePageContent6
