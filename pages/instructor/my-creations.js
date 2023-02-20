import React, { useEffect, useState } from "react";
import {
  Text,
  Button,
  Box,
  HStack,
  VStack,
  Flex,
  Stack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Courses from "../../components/Courses";
import TrendingCourses from "../../components/TrendingCourses";
import { getCourseListService } from "../../services/courseService";
import { loaderStore } from "../../store/loaderStore";
export default function MyCreations(props) {
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();
  const loader = loaderStore();
  useEffect(() => {
    async function getCourseList() {
      loader.setStatus("Fetching my creations...");
      loader.setIsLoading(true);
      const response = await getCourseListService();
      loader.setIsLoading(false);
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
    <VStack width="full" backgroundColor="background.900" height="100%">
      <Flex
        w="full"
        h="50vh"
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        loading="lazy"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color="text.900"
              fontSize={["lg", "2xl", "3xl"]}
              fontWeight="bold"
            >
              Teach new skills online
            </Text>
            <Text
              color={"white"}
              fontWeight="normal"
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Teaching is the greatest act of optimism
            </Text>
            <Stack direction={"row"}>
              <Button
                type="submit"
                backgroundColor="primary.900"
                color="text.900"
                _hover={{ backgroundColor: "primary.600" }}
                onClick={redirectToCoursePage}
              >
                Create New Course
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      <VStack
        w={["100%", "90%", "90%"]}
        alignItems="center"
        p={[4, 6, 6]}
        spacing={2}
      >
        <VStack marginTop={4} borderWidth={1} borderColor="primary.900" p={4}>
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
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          My Active Courses
        </Text>
        <Courses isInstructor={true} userEmail={userEmail} list={courseList} />
        <Text
          fontSize="2xl"
          color="text.900"
          fontWeight="medium"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          Trending Courses
        </Text>
        <TrendingCourses />
        <VStack spacing={3} pt={5}>
          <Text
            color="text.900"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
          >
            Become an instructor today
          </Text>
          <Text
            color="text.900"
            fontSize="lg"
            fontWeight="semibold"
            textAlign="center"
          >
            Join one of the world’s largest online learning marketplaces.
          </Text>
          <Button
            type="submit"
            backgroundColor="primary.900"
            color="text.900"
            width={["60%", "70%", "30%"]}
            _hover={{ backgroundColor: "primary.600" }}
            onClick={redirectToCoursePage}
          >
            Get Started
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
}
