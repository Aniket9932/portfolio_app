import { Avatar, Box, Button, Circle, Flex, Heading, HStack, Image, Link, List, ListItem, Spacer, Stack, Text, UnorderedList, useColorMode, useMediaQuery,VStack } from '@chakra-ui/react'

import React from 'react'

function Projects() {
  return (
    <div>
        <VStack marginTop={'50px'} align='left'>
        <HStack wrap={'wrap'} w='100%'>
            <Text fontSize={"4xl"} fontWeight="semibold" color={'blue.500'}>Projects</Text>
        </HStack> 
        <Flex wrap={'wrap'}  align={'center'}> 
            <Avatar name='Cognizant' src='https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/276157605_10160070141142147_323367422381955456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=8iQX-3bb6hkAX_Mbnc7&_nc_ht=scontent.fccu10-1.fna&oh=00_AT9TpRk4bw2wewdh5WU5p90JnotfGs3IIqJyHFoFLk1DJg&oe=62BD6D22' 
            />
            <Flex direction={'column'} p='4'>
              <Text fontWeight={'semibold'} fontSize={'2xl'}>Return-Order-Management-System</Text>
              <Text fontWeight={'semibold'} color='gray.400' fontStyle={'italic'}>Spring Boot Project</Text>

              <UnorderedList mt={4}>
        
                <ListItem>Spring-Boot Microservices</ListItem>
                <ListItem>Insomnia/Postman</ListItem>
                <ListItem>H2-Console/MYSQL</ListItem>
        
              </UnorderedList>
              <Flex align={'center'} p='4'>
                <Avatar src='https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg' />
                <Link href='https://github.com/Aniket9932/Return-Order.git' fontStyle={'italic'} color='red.300' p='4' textDecoration={'underline'}>Return Order Management - github</Link>
              </Flex>
              
            </Flex>
        </Flex>
    </VStack>
    </div>
  )
}

export default Projects