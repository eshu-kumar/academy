import React from "react";
import {
  Flex,
  Center,
  Text,
  Button,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Courses from "../../components/Courses";

export default function MyLearnings(props) {
  return (
    <VStack w="full" bg="background.900" px={4} spacing={6}>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="2xl"
        textAlign="start"
        pt={6}
      >
        Welcome Back User&apos;s Name
      </Text>
      <Box borderWidth={1} borderColor="primary.900" p={4} alignItems="center">
        <Text
          textAlign="center"
          color="text.900"
          fontWeight="semibold"
          fontSize="lg"
        >
          Learning that gets you skills for your present and for future
        </Text>
      </Box>
      <Text color="text.900" fontWeight="bold" fontSize="2xl" textAlign="start">
        My Active Courses
      </Text>
      <Courses isBought={true} />
      <Text color="text.900" fontWeight="bold" fontSize="3xl" textAlign="start">
        What To Learn Next
      </Text>
      <Text
        color="text.900"
        fontWeight="semibold"
        fontSize="2xl"
        textAlign="start"
      >
        Students Are Viewing
      </Text>
      <Courses />
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="2xl"
        textAlign="start"
        pt={6}
      >
        Top In Business
      </Text>
      <Courses />
      <Text color="text.900" fontWeight="bold" fontSize="2xl" textAlign="start">
        Top in Business
      </Text>
      <Courses />
      <Text color="text.900" fontWeight="bold" fontSize="2xl" textAlign="start">
        Top In IT And Software
      </Text>
      <Courses />
    </VStack>
  );
}
