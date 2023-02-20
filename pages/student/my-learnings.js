import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  VStack,
  Container,
  Stack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { getCourseListService } from "../../services/courseService";
import Courses from "../../components/Courses";
import { loaderStore } from "../../store/loaderStore";
import Image from "next/image";
import TrendingCourses from "../../components/TrendingCourses";
export default function MyLearnings(props) {
  const loader = loaderStore();
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function getCourseList() {
      loader.setIsLoading(true);
      loader.setStatus("Fetching your courses...");
      const response = await getCourseListService();
      loader.setIsLoading(false);
      if (!response.isError) {
        setCourseList(response.courses);
        setUserEmail(response.userEmail);
      }
      console.log("course list in my-learnings", response);
    }
    getCourseList();
  }, []);
  return (
    <VStack
      p={[4, 6, 6]}
      minH={"70vh"}
      spacing={2}
      w="full"
      bg="background.900"
    >
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
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Never Stop Learning
            </Text>
            <Text color="text.900" fontWeight="semibold" fontSize="lg">
              Learning that gets you skills for your present and for future
            </Text>
            <Stack direction={"row"}>
              <Button
                bg="primary.900"
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "primary.600" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Text color="text.900" fontWeight="bold" fontSize="2xl" textAlign="start">
        My Active Courses
      </Text>
      <Courses userEmail={userEmail} list={courseList} isBought={true} />
      <Text color="text.900" fontWeight="bold" fontSize="3xl" textAlign="start">
        What To Learn Next
      </Text>
      <TrendingCourses />
      <Text
        color="text.900"
        fontWeight="semibold"
        fontSize="2xl"
        textAlign="start"
      >
        Students Are Also Viewing
      </Text>
      {/* <Courses userEmail={userEmail} list={courseList} /> */}
      <Text color="text.900" fontWeight="bold" fontSize="3xl" textAlign="start">
        Trending Courses
      </Text>
      <TrendingCourses />
    </VStack>
  );
}
