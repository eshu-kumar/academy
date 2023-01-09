import React from "react";
import { Flex, Center, Text, Button, Box, VStack } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import StudentsActiveCourses from "../components/others/StudentsActiveCourses";

export default function StudentLandingPage(props) {
  return (
    <>
      <VStack flex={1} bg="background.900" height="100%" px={4} spacing={6}>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
          pt={6}
        >
          Welcome Back User&apos;s Name
        </Text>
        <Box
          borderWidth={1}
          borderColor="primary.900"
          p={4}
          alignItems="center"
        >
          <Text color="text.900" fontWeight="semibold" fontSize="lg">
            Learning that gets you skills for your present and for future
          </Text>
        </Box>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
        >
          My Active Courses
        </Text>
        <StudentsActiveCourses />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="start"
        >
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
        <CardComponent />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
          pt={6}
        >
          Top In Business
        </Text>
        <CardComponent />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
        >
          Top in Business
        </Text>
        <CardComponent />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
        >
          Top In IT And Software
        </Text>
        <CardComponent />
      </VStack>
    </>
  );
}
