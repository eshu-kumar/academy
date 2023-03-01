import React, { useEffect, useState } from "react";
import {
  Link,
  Text,
  VStack,
  Flex,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import { getCourseListService } from "../services/courseService";
import { loaderStore } from "../store/loaderStore";
import FrequentlyAskedQuestion from "../components/others/FaQ";
import TrendingCourses from "../components/TrendingCourses";
import Image from "next/image";
export default function Home() {
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const loader = loaderStore();

  useEffect(() => {
    async function getCourseList() {
      loader.setIsLoading(true);
      loader.setStatus("Fetching  courses ...");
      const response = await getCourseListService();
      loader.setIsLoading(false);
      if (!response.isError) {
        setCourseList(response.courses);
        setUserEmail(response.userEmail);
      }
      console.log("course list in index", response);
    }
    getCourseList();
  }, []);

  return (
    <VStack
      alignItems={"center"}
      w="100%"
      backgroundColor="background.900"
      spacing={10}
      pt={5}
      pb={6}
      px={10}
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
            <VStack alignItems="flex-start" spacing={2}>
              <Text fontWeight="extrabold" fontSize="4xl" color="text.900">
                Learn{" "}
                <Link color="primary.900" textDecoration="none">
                  in-demand{" "}
                </Link>{" "}
                professional skills
              </Text>
              <Text
                textAlign="center"
                fontWeight="medium"
                fontSize="xl"
                color="text.900"
              >
                Choose from courses in English and many other languages
              </Text>
            </VStack>
          </Stack>
        </VStack>
      </Flex>

      <VStack w="full" mt={3} spacing={5}>
        {/* <Courses userEmail={userEmail} list={courseList} /> */}
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
        <Text
          fontSize="2xl"
          color="text.900"
          fontWeight="medium"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          What Students have to say
        </Text>
        <Reviews />

        <Text
          fontSize="2xl"
          color="text.900"
          fontWeight="medium"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          Frequently Asked Questions
        </Text>
        <FrequentlyAskedQuestion />
      </VStack>
    </>
  );
}
export async function getStaticProps() {
  const response = await getCourseListService("all");
  if (response.isError) {
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const courseList = response.courses;

  return {
    props: {
      courseList,
    },
  };
}
