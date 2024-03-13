import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ImageWithText = ({ src, text,bg }) => {
  return (
    <Box flex justifyContent="center"textAlign="center" bg={bg} w="30%">
      <Image src={src} alt="Image" />
      <Text mt="2">{text}</Text>
    </Box>
  );
};

export default ImageWithText;
