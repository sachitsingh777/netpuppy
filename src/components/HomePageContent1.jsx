import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import swim from "../assests/swim.png"
import seeall from "../assests/seeall.png"
import seemore from "../assests/seemore.png"
import kudo from "../assests/kudo.png"
import riding from "../assests/riding.png"
import ImageContent from './ImageContent'

const HomePageContent1 = () => {
  return (
    <Flex w="90%" m="auto">
        <Box className='left' w="45%">
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
                <ImageContent imageUrl={swim} text={'Swimming'} paragraph={'22 Acres, Pollution-Free, World-Class'} />
            </Center>
            <Box className='left3'w="250px" h="16px" mt="150px" ml="70">
                <Image src={seeall} w="100%" />
            </Box>
        </Box>
        <Box className='mid' w="10%" ml="40"  mr="10"display="flex" justifyContent="center" alignItems="center">
            <Image src={seemore} />
        </Box>
        <Box className='right' w="45%">
            <Box m="30" mr="60" mb="60" className='right1'>
                <ImageContent imageUrl={kudo} text={'Taekwondo'} paragraph={'22 Acres, Pollution-Free, World-Class'} />
            </Box>
            <Box m="30" ml="60" mt="60" className='right2'>
                <ImageContent imageUrl={riding} text={'Horse Riding'} paragraph={'22 Acres, Pollution-Free, World-Class'} />
            </Box>
        </Box>
    </Flex>
  )
}

export default HomePageContent1
