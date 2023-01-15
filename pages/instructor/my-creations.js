import React, { useEffect, useState } from "react";
import { Text, Button, Box, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Courses from "../../components/Courses";
import { getCourseListService } from "../../services/courseService";
export default function MyCreations(props) {
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const router = useRouter();
  useEffect(() => {
    async function getCourseList() {
      const response = await getCourseListService();
      if (!response.isError) {
        setCourseList(response.courses);
        setUserEmail(response.userEmail);
      }
      console.log("course list in index", response);
    }
    getCourseList();
    console.log("course list ", courseList);
  }, []);
  function redirectToCoursePage() {
    router.push("../instructor/create-course");
  }

  return (
    <VStack
      width="full"
      backgroundColor="background.900"
      alignItems="center"
      px={10}
      py={10}
    >
      <Text color="text.900" fontWeight="bold" fontSize="2xl">
        Welcome
      </Text>
      <Text color="text.900" fontWeight="normal" fontSize="lg">
        {userEmail}
      </Text>
      <HStack
        marginY={10}
        w="100%"
        alignItems="center"
        justifyContent="center"
        spacing={10}
      >
        <Text color="text.900" fontWeight="semibold" fontSize="lg">
          Create Your Course
        </Text>
        <Button
          type="submit"
          backgroundColor="primary.900"
          color="text.900"
          _hover={{ backgroundColor: "primary.600" }}
          onClick={redirectToCoursePage}
        >
          New Course
        </Button>
      </HStack>

      <VStack borderWidth={1} borderColor="primary.900" p={4}>
        <Text color="text.900" fontWeight="bold" fontSize="2xl">
          Create an Engaging Course
        </Text>
        <Text
          color="text.900"
          fontWeight="normal"
          fontSize="md"
          textAlign="center"
        >
          Whether you have been teaching for years or are teaching for the first
          time, you can make an engaging course. We have compiled resources and
          best practices to help you get to the next level, no matter where you
          are starting.
        </Text>
      </VStack>

      <HStack
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        pt={6}
        pb={12}
      >
        <Box
          borderWidth={1}
          borderColor="primary.900"
          p={4}
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
        <Box borderWidth={1} borderColor="primary.900" p={4}>
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
      <Courses isInstructor={true} userEmail={userEmail} list={courseList} />
    </VStack>
  );
}
