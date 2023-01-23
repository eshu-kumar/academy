import React, { useEffect, useState } from "react";
import { Link, Text, VStack, HStack } from "@chakra-ui/react";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import { getCourseListService } from "../services/courseService";
import { loaderStore } from "../store/loaderStore";
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
      w="full"
      minH="70vh"
      backgroundColor="background.900"
      spacing={5}
      pt={5}
      pb={6}
      px={10}
    >
      <VStack alignItems={"center"} w="full">
        <Text
          textAlign="center"
          fontWeight="extrabold"
          fontSize="2xl"
          color="text.900"
        >
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

      <VStack w="full" mt={3} spacing={5}>
        <Courses userEmail={userEmail} list={courseList} />
        <Text
          fontSize="xl"
          color="text.900"
          fontWeight="medium"
          textAlign="left"
        >
          What Students have to say
        </Text>
        <Reviews />
        <Text
          fontSize="xl"
          color="text.900"
          fontWeight="medium"
          textAlign="left"
        >
          What Students are Looking into
        </Text>
        <Courses userEmail={userEmail} list={courseList} />
      </VStack>
    </VStack>
  );
}
