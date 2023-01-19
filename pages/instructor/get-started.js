import React from 'react';
import {
  Text,
  Button,
  Box,
  HStack,
  Link,
  VStack,
  Container,
  Flex,
  chakra,
  Center,
} from '@chakra-ui/react';
import Image from 'next/image';
import Reviews from '../../components/Reviews.js';

import { useRouter } from 'next/router';

const rewards = [
  {
    primaryText: 'Teach your way',
    secondaryText:
      'Take the liberty to plan your circulum and Publish the course you want,in the way you want,you have control',
  },
  {
    primaryText: 'Contribute',
    secondaryText:
      'Teach what you know and help learners explore their interests and gain new skills',
  },
  {
    primaryText: 'Get rewarded',
    secondaryText:
      'Expand your professional network, build your expertise, and earn money on each paid enrollment.',
  },
];

export default function GetStarted(props) {
  chakra(Image);
  const router = useRouter();

  return (
    <VStack width='full' height='100%' backgroundColor='background.900' px={16}>
      <Flex alignItems='center' flexDirection='row'>
        <Image
          width='1300'
          height='0'
          alt={'get started on academy'}
          src='/teacher2.jpg'
          fit
        />
        <Container position='absolute' width={['40%', '50%', '80%']}>
          <VStack alignItems='flex-start' spacing={2}>
            <Text
              color='text.900'
              fontSize={['lg', '2xl', '3xl']}
              fontWeight='bold'
            >
              Teach new skills online
            </Text>
            <Text
              color='text.900'
              fontSize={['sm', 'md', 'lg']}
              fontWeight={['normal', 'semibold', 'semibold']}
            >
              If kids can be super engaged in video games, there’s a way for
              them to be super engaged in education as well.
            </Text>
            <Button
              backgroundColor='primary.900'
              color='text.900'
              _hover={{ backgroundColor: 'primary.600' }}
              onClick={() => {
                router.push('../instructor/my-creations');
              }}
            >
              Get Started
            </Button>
          </VStack>
        </Container>
      </Flex>
      <Box
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        py={20}
        zIndex={1111111}
      >
        <Text color='text.900' fontWeight='bold' fontSize='3xl'>
          So many reasons to start
        </Text>
        <HStack
          alignItems='center'
          justifyContent='space-between'
          spacing={10}
          pt={10}
        >
          {rewards.map((item, index) => {
            return (
              <VStack key={index} spacing={1} justifyContent='center'>
                <Text color='text.900' fontWeight='bold' fontSize='xl'>
                  {item.primaryText}
                </Text>
                <Text color='text.900' fontWeight='normal' fontSize='sm'>
                  {item.secondaryText}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Box>
      <Text
        color='text.900'
        fontWeight='bold'
        fontSize='3xl'
        textAlign='center'
      >
        What Other Teachers have to say
      </Text>
      <Reviews />
      <VStack
        px={5}
        alignItems='center'
        justifyContent='center'
        spacing={3}
        py={5}
      >
        <Text
          color='text.900'
          fontWeight='bold'
          fontSize='3xl'
          textAlign='center'
        >
          Start teaching today
        </Text>
        <Text
          color='text.900'
          fontWeight='semibold'
          fontSize='sm'
          textAlign='center'
        >
          Create Your course and upload lectures and transform the life of
          students
        </Text>
        <Button
          backgroundColor='primary.900'
          color='text.900'
          width='50%'
          _hover={{ backgroundColor: 'primary.600' }}
          onClick={() => {
            router.push('../instructor/my-creations');
          }}
        >
          Get Started
        </Button>
      </VStack>
    </VStack>
  );
}
