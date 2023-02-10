import React, { useState, useEffect } from "react";
import { Flex, Text, VStack, Container } from "@chakra-ui/react";
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
      <Flex alignItems="center" flexDirection="row">
        <Image
          width="1300"
          height="0"
          alt={"get started on academy"}
          src="/StudentLanding4.jpg"
          fit
          loading="lazy"
        />
        <Container position="absolute" width={["40%", "50%", "80%"]}>
          <Text
            color="text.900"
            fontSize="4xl"
            fontWeight="bold"
            as="mark"
            background="primary.900"
          >
            Never Stop Learning
          </Text>
          <Text color="text.900" fontWeight="semibold" fontSize="lg">
            Learning that gets you skills for your present and for future
          </Text>
        </Container>
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
