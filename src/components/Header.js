import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

function Header() {

  const { colorMode } =  useColorMode();
  const isDark = colorMode === "dark";

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width : 600px)");


  return (
    <Stack>
       <Circle position="absolute" bg="blue.100" opacity={"0.1"} 
       w="240px" h="240px" alignSelf={"flex-end"} />

      <Flex direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf={"flex-start"}>
         
          <Box mt={isNotSmallerScreen ? "16" : "0"} alignSelf={"flex-start"}>
              <Text fontSize={"5xl"} fontWeight="semibold">Hey, I am </Text>
              <Text fontSize={"7xl"} fontWeight="bold" bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"} bgClip="text">Aniket Mahato</Text>
              <Text color={isDark ? "gray.200" : "gray.500"} > UnderGrad Student, Front-End Developer </Text>
              <a href='mailto:aniket.mahata.06@example.com'><Button mt={"8"} colorScheme="blue">Contact Me</Button></a>
          </Box>
          <Image alignSelf={"center"} mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          ml={isNotSmallerScreen ? "4" : "0"} borderRadius="full"
          backgroundColor={"transparent"} boxShadow="lg"
          boxSize={"300px"}
           src='https://avatars.githubusercontent.com/u/60846286?s=400&u=6f5e731d6d3d6aa9f08d0ee2afdb31e7324f150d&v=4'/>
          
      </Flex>

    </Stack>
  )
}

export default Header