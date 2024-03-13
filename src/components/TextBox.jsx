import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TextBox = ({ heading, subtitle, description }) => {
  return (
    <Box bg="rgba(185, 1, 36, 1)" w="200px" h="200px">
      <Text
        fontFamily="Miltonian"
        fontSize="40px"
        fontWeight="400"
        lineHeight="2px"
        letterSpacing="0.02em"
        textAlign="center"
      >
        {heading}
      </Text>
      <Text
        fontFamily="Mirador"
        fontSize="18px"
        fontStyle="italic"
        fontWeight="900"
        lineHeight="3px"
        letterSpacing="0.02em"
        textAlign="center"
      >
        {subtitle}
      </Text>
      <Text
        fontFamily="TT Chocolates Trl"
        fontSize="15px"
        fontWeight="400"
        lineHeight="18px"
        letterSpacing="0.02em"
        textAlign="center"
      >
        {description}
      </Text>
    </Box>
  );
};

export default TextBox;
