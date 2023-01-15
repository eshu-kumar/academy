import React, { useState, useEffect } from "react";
import {
  Flex,
  Center,
  Text,
  Button,
  Box,
  VStack,
  HStack,
  useEditable,
  useFocusEffect,
} from "@chakra-ui/react";
import { getCourseListService } from "../../services/courseService";
import Courses from "../../components/Courses";
export default function MyLearnings(props) {
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
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
  }, []);
  return (
    <VStack p={[4, 6, 6]} spacing={2} w="full" bg="background.900" px={4}>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="2xl"
        textAlign="center"
        pt={6}
      >
        Welcome Back {userEmail.split(".")[0]}
      </Text>
      <Box borderWidth={1} borderColor="primary.900" p={4} alignItems="center">
        <Text
          textAlign="center"
          color="text.900"
          fontWeight="semibold"
          fontSize="lg"
        >
          Learning that gets you skills for your present and for future
        </Text>
      </Box>
      <Text color="text.900" fontWeight="bold" fontSize="2xl" textAlign="start">
        My Active Courses
      </Text>
      <Courses userEmail={userEmail} list={courseList} isBought={true} />
      <Text color="text.900" fontWeight="bold" fontSize="3xl" textAlign="start">
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
      <Courses userEmail={userEmail} list={courseList} />
    </VStack>
  );
}
