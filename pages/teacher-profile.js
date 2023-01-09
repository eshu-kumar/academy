import React from "react";
import { Text, Button, Box, HStack, VStack } from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import StudentsActiveCourses from "../components/others/StudentsActiveCourses";

export default function TeacherProfilePage(props) {
  function redirectToCoursePage() {
    Router.push("/CreateCourse");
  }
  return (
    <VStack
      flex={1}
      height="100%"
      backgroundColor="background.900"
      justifyContent="center"
      px={5}
      pt={10}
    >
      <Text color="text.900" fontWeight="bold" fontSize="2xl">
        Welcome User name
      </Text>
      <HStack alignItems="center" justifyContent="space-between" spacing={20}>
        <Text color="text.900" fontWeight="semibold" fontSize="lg">
          Create Your Course
        </Text>
        <Button
          type="submit"
          backgroundColor="primary.900"
          color="text.900"
          width="full"
          _hover={{ backgroundColor: "primary.600" }}
          onClick={redirectToCoursePage}
        >
          New Course
        </Button>
      </HStack>
      <Box borderWidth={1} borderColor="primary.900" p={4} width="60%">
        <VStack>
          <Text color="text.900" fontWeight="bold" fontSize="2xl">
            Create an Engaging Course
          </Text>
          <Text
            color="text.900"
            fontWeight="normal"
            fontSize="md"
            textAlign="center"
          >
            Whether you have been teaching for years or are teaching for the
            first time, you can make an engaging course. We have compiled
            resources and best practices to help you get to the next level, no
            matter where you are starting.
          </Text>
        </VStack>
      </Box>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        px={10}
        pt={6}
        pb={12}
      >
        <Box
          borderWidth={1}
          borderColor="primary.900"
          p={4}
          width="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color="text.900"
            fontWeight="bold"
            fontSize="xl"
            textAlign="center"
          >
            Get Started with Video
          </Text>
          <Text
            color="text.900"
            fontWeight="normal"
            fontSize="md"
            textAlign="center"
          >
            Quality video lectures can set your course apart and make the
            lectures engaging and easy to
          </Text>
        </Box>
        <Box borderWidth={1} borderColor="primary.900" p={4} width="50%">
          <Text
            color="text.900"
            fontWeight="bold"
            fontSize="xl"
            textAlign="center"
          >
            Build Your Audience
          </Text>
          <Text
            color="text.900"
            fontWeight="normal"
            fontSize="md"
            textAlign="center"
          >
            Quality video lectures can set your course apart and make the
            lectures engaging and easy to
          </Text>
        </Box>
      </HStack>
      <Text color="text.900" fontWeight="bold" fontSize="xl">
        My Active Courses
      </Text>
      <StudentsActiveCourses />
    </VStack>
  );
}
