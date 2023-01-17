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
          Welcome back {userEmail.split("@")[0].split(".")[0]}
        </Text>
        <HStack
          marginY={4}
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
        <Text color="text.900" fontWeight="bold" fontSize="xl">
          My Active Courses
        </Text>
        <Courses isInstructor={true} userEmail={userEmail} list={courseList} />
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
      </VStack>
    </VStack>
  );
}
