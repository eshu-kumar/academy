import React, { useEffect, useState } from "react";
import {
  Text,
  Button,
  Box,
  HStack,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Courses from "../../components/Courses";
import { getCourseListService } from "../../services/courseService";
import { loaderStore } from "../../store/loaderStore";
import { authStore } from "../../store/authStore";
import { authenticateServerService } from "../../services/authService";
export default function MyCreations(props) {
  const auth = authStore();
  console.log("props in my learning", props);
  const { courseList } = props;
  const router = useRouter();
  function redirectToCoursePage() {
    router.push("../instructor/create-course");
  }
  let uri =
    "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  return (
    <VStack width="full" backgroundColor="background.900">
      <Center alignItems="center" w="full" h={[250, 360, 400]}>
        <Image
          w="full"
          //maxW="100%"
          maxH="100%"
          alt={"create courses on academy"}
          src={uri}
        />
      </Center>

      <VStack w="full" alignItems="center" p={[4, 6, 6]} spacing={2}>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
        >
          Welcome back{" "}
          {auth.email ? auth.email.split("@")[0].split(".")[0] : ""}
        </Text>
        <HStack
          marginY={4}
          w="100%"
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          <Text
            color="text.900"
            fontWeight="semibold"
            fontSize="lg"
            textDecoration="underline"
            textDecorationColor="primary.900"
          >
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
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="xl"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          My Active Courses
        </Text>
        <Courses isInstructor={true} list={courseList} />
        <VStack marginTop={4} borderWidth={1} borderColor="primary.900" p={4}>
          <Text
            color="text.900"
            fontWeight="bold"
            fontSize="2xl"
            textDecoration="underline"
            textDecorationColor="primary.900"
          >
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

        <HStack
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          p={2}
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
              textDecoration="underline"
              textDecorationColor="primary.900"
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
              textDecoration="underline"
              textDecorationColor="primary.900"
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
      </VStack>
    </VStack>
  );
}
export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (user.isError) {
    // Redirect to a "not found" page
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const response = await getCourseListService("myCreations", user.email);
  console.log("courselist in serverside props", response);
  const courseList = response.courses;
  return {
    props: {
      courseList,
    },
  };
}
