import React from 'react'
import { Avatar, Box, Button, Circle, Flex, Heading, HStack, Image, Spacer, Stack, Text, useColorMode, useMediaQuery,VStack } from '@chakra-ui/react'


function Profile() {
  return (
    <div>
      <VStack marginTop={'50px'} align='left'>
        <HStack wrap={'wrap'} w='100%'>
            <Text fontSize={"4xl"} fontWeight="semibold" color={'blue.500'}>Experience</Text>
        </HStack> 
        <Flex wrap={'wrap'}  align={'center'}> 
            <Avatar name='Cognizant' src='https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/276157605_10160070141142147_323367422381955456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=8iQX-3bb6hkAX_Mbnc7&_nc_ht=scontent.fccu10-1.fna&oh=00_AT9TpRk4bw2wewdh5WU5p90JnotfGs3IIqJyHFoFLk1DJg&oe=62BD6D22' 
            />
            <Flex direction={'column'} p='4'>
              <Text fontWeight={'semibold'} fontSize={'xl'}>Cognizant</Text>
              <Text fontWeight={'semibold'} color='gray.400'>CDE FSE Java Intern</Text>
            </Flex>
            <Spacer />
            <Text fontSize={'l'} fontStyle={'italic'} fontFamily='Verdana' align='right'> ( Feb 2022 - Current ) </Text>
      
        </Flex>
    </VStack>
  </div>
  )
}

export default Profile