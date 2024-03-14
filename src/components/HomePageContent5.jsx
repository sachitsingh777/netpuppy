import { Box, Flex, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';
import blog1 from '../assests/blog1.png';
import N360 from '../assests/N360.png';

const HomePageContent5 = () => {
  return (
    <Box className="reportSection" padding="50px">
      <Box
        backgroundImage={`url(${blog1})`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        aspectRatio="16/7"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="20px"
      >
        <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.437)" />
        <img src={N360} alt="Logo" height="50px" width="50px" filter="invert(40%) brightness(200%)" />
        <Box>
          <Text color="white" fontSize="25px" whiteSpace="nowrap">
            DIVINE INTO OUR...
          </Text>
          <Text color="white" fontSize="25px" whiteSpace="nowrap" ml="50%">
            VIRTUAL TOUR
          </Text>
        </Box>
      </Box>
      <Flex width="60%" backgroundColor="primary" margin="auto" transform="translateY(-50%)" padding="15px 30px" borderRadius="5px" gap="10px" bg="rgba(185, 1, 36, 1)">
        <Box textAlign="center" color="white">
          <CountUp end={100} suffix="%" />
          <Text fontSize="1rem" color="white" mt="10px">
            College Acceptance
          </Text>
        </Box>
        <Box textAlign="center" color="white">
          <CountUp end={20} />
          <Text fontSize="1rem" color="white" mt="10px">
            Years of Educational Excellence
          </Text>
        </Box>
        <Box textAlign="center" color="white">
          <CountUp end={60} suffix="%" />
          <Text fontSize="1rem" color="white" mt="10px">
            STEM Program Participation
          </Text>
        </Box>
        <Box textAlign="center" color="white">
          <CountUp end={15} suffix="+" />
          <Text fontSize="1rem" color="white" mt="10px">
            Extracurricular Activities
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePageContent5;
