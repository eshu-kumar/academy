import React, { useEffect, useState } from "react";
import { Link, Text, VStack, Flex, Container, Button } from "@chakra-ui/react";
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
      <Flex alignItems="center" flexDirection="row">
        <Image
          width="1300"
          height="0"
          alt={"get started on academy"}
          src="/LandingPage.jpg"
          fit
          loading="lazy"
        />
        <Container position="absolute" width={["40%", "50%", "80%"]}>
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
        </Container>
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
    </VStack>
  );
}
