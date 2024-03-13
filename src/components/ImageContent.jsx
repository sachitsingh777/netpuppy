import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ImageContent = ({ imageUrl, text, paragraph }) => {
  return (
    <Box position="relative" display="inline-block">
      <Image src={imageUrl} alt="Image" maxWidth="100%" w="90%" height="auto" />
      <Box
        position="absolute"
        bottom="10"
        left="20"
        p="5px"
        bg="transparent"
      >
        <Text
          fontFamily="Mirador"
          fontSize="40px"
          fontStyle="italic"
          fontWeight="900"
          lineHeight="20px"
          letterSpacing="0.02em"
          margin="0"
          color="white"
        >
          {text}
        </Text>
        <Text
          fontFamily="Mirador"
          fontSize="16px"
          fontStyle="italic"
          fontWeight="900"
          lineHeight="20px"
          letterSpacing="0.02em"
          margin="0"
          color="white"
          noOfLines={2}
        >
          {paragraph}
        </Text>
      </Box>
    </Box>
  );
};

export default ImageContent;
