import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  useToast,
  Center,
  HStack,
  SimpleGrid,
  Image,
  chakra,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import ImageUploading from "react-images-uploading";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import ToastBox from "../components/others/ToastBox";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
chakra(ReactPlayer);
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function ViewCourse() {
  const toast = useToast();
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [viewingCourse, setViewingCourse] = useState("");

  useEffect(() => {
    async function getCoursesList() {
      try {
        const token = await localStorage.getItem("token");
        if (!token) {
          throw new Error("session expired");
        }
        let response = await fetch(
          `http://localhost:4000/course/get-courses-list`,
          {
            method: "POST",
            body: JSON.stringify({ token: token }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        setCourseList(response.data.courses);
        setUserEmail(response.data.userEmail);
        if (courseList.length > 0) setViewingCourse(courseList[0]);
        if (response.isError) {
          throw new Error(response.isError);
        }
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => (
            <ToastBox message={response.message} isError={response.isError} />
          ),
        });
      } catch (error) {
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => <ToastBox message={"session expired"} isError={true} />,
        });
        //router.push("/");
      }
    }
    let result = getCoursesList();
  }, []);

  return (
    <VStack
      spacing={10}
      bg="gray.50"
      align="center"
      justify="center"
      h="90vh"
      w="100%"
    >
      {/* <Text fontSize={"6xl"}>View courses</Text> */}
      <HStack w="100%" justifyContent={"space-around"}>
        <VStack w="25%" h="700" mx={10} align="left" spacing={2}>
          <Text fontSize="3xl"> Courses </Text>
          <VStack alignItems="left" spacing={4}>
            {courseList.length > 0 ? (
              courseList.map((item, index) => {
                return (
                  <VStack
                    p={4}
                    borderRadius="md"
                    align="left"
                    key={index}
                    spacing="1"
                    bg="white"
                  >
                    <Text fontSize="lg" color="gray.800">
                      {item.coursename}
                    </Text>
                    <Text color="gray.600">{`in category ${item.category}`}</Text>
                    <Text color="gray.500">{`created by ${item.author}`}</Text>
                    <Button
                      mt={1}
                      onClick={() => {
                        setViewingCourse(item.file);
                      }}
                    >
                      View course
                    </Button>
                  </VStack>
                );
              })
            ) : (
              <Link as={NextLink} href="/create-course">
                <Text fontSize="lg" color="blue.600">
                  No courses here click to create course
                </Text>
              </Link>
            )}
          </VStack>
        </VStack>
        <VStack w="75%" mx={20} pr={20}>
          <Center h="600" w="full" mx={40} bg="black">
            {viewingCourse.length > 0 ? (
              <ReactPlayer
                width="100%"
                height="100%"
                mx={20}
                controls
                url={`http://localhost:4000/course/get-course?file=${viewingCourse.toString()}&&userEmail=${userEmail.toString()}`}
              />
            ) : (
              <ReactPlayer
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=Oedp_e35Vmk`}
              />
            )}
          </Center>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default memo(ViewCourse);
