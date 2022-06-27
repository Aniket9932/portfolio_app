import { Box, Button, Circle, Flex, HStack, Image, Spacer, Stack, Text, useColorMode, useMediaQuery,VStack } from '@chakra-ui/react'
import React from 'react'

function About() {


  return (
    <div>
    <VStack marginTop={'50px'}>
        <HStack wrap={'wrap'} align='left' w='100%' >
            <Text fontSize={"4xl"} fontWeight="semibold" color={'blue.500'}>About</Text>
        </HStack> 
        <Flex> 
            <Text fontWeight={'semibold'} color='gray.400'>Efficient Student pursuing B.TECH degree from MAKAUT University. Successful in quick building skills,
self-teaching and acquiring new knowledge. </Text>
        </Flex>
    </VStack>
    </div>
  )
}

export default About