import { Box, Button, Circle, Flex, Image, Spacer, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

function Header() {

  const { colorMode } =  useColorMode();
  const isDark = colorMode === "dark";

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width : 600px)");


  return (
    <Stack>

      <Flex direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf={"space-evenly"}>
         
          <Box mt={isNotSmallerScreen ? "16" : "0"} alignSelf={"flex-start"}>
              <Text fontSize={"5xl"} fontWeight="semibold">Hey, I am </Text>
              <Text fontSize={"7xl"} fontWeight="bold" bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"} bgClip="text">Aniket Mahato</Text>
              <Text color={isDark ? "gray.200" : "gray.500"} > UnderGrad Student, Front-End Developer </Text>
              <a href='mailto:aniket.mahata.06@example.com'><Button mt={"8"} colorScheme="blue">Contact Me</Button></a>
          </Box>
          <Spacer />
          <Image alignSelf={"center"} mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          ml={isNotSmallerScreen ? "4" : "0"} borderRadius="full"
          backgroundColor={"transparent"} boxShadow="lg"
          boxSize={"300px"}
           src='https://media-exp2.licdn.com/dms/image/C5603AQH7lgdhUPQMQQ/profile-displayphoto-shrink_400_400/0/1644138369827?e=1661990400&v=beta&t=R3QK2x-9X1SZkhX3aBHeznUoj2cAZKMankWP1MqmlYM'/>
          
      </Flex>

    </Stack>
  )
}

export default Header