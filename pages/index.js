import React, { useEffect, useState } from "react";
import { Link, Text, VStack, HStack } from "@chakra-ui/react";
import CardComponent from "../components/Card";
import ReviewsComponent from "../components/others/Reviews";
import { getCourseListService } from "../services/courseService";
export default function Home() {
  const [courseList, setCourseList] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const info = [
    {
      courseName: "Build Responsive Real-World Websites with HTML and CSS",
      authorName: "jhon doe",
      rating: "4.5",
      price: "100",
    },
    {
      courseName: "The Complete Financial Analyst Course Year 2022",
      authorName: "jhon doe",
      rating: "4.2",
      price: "100",
    },
    {
      courseName: "The Complete 2023 Web Development Bootcamp",
      authorName: "jhon doe",
      rating: "4.4",
      price: "100",
    },
    {
      courseName: "The Complete 2023 Web Development Bootcamp",
      authorName: "jhon doe",
      rating: "4.1",
      price: "100",
    },
    {
      courseName: "Build Responsive Real-World Websites with HTML and CSS",
      authorName: "jhon doe",
      rating: "4",
      price: "100",
    },
  ];
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

  function CardHstack() {
    return (
      <HStack w="full" overflow={"auto"} spacing={3}>
        {courseList.map((item, index) => {
          return (
            <CardComponent
              courseName={item.coursename}
              authorName={item.author}
              imageUri={`http://localhost:4000/course/get-course?file=${item.file.toString()}&&userEmail=${userEmail.toString()}`}
              rating={4.2}
              price={item.price}
              key={index}
            />
          );
        })}
      </HStack>
    );
  }
  return (
    <VStack
      alignItems={"center"}
      w="full"
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
        <CardHstack />
        <Text
          fontSize="xl"
          color="text.900"
          fontWeight="medium"
          textAlign="left"
        >
          What Students have to say
        </Text>
        <ReviewsComponent />
        <Text
          fontSize="xl"
          color="text.900"
          fontWeight="medium"
          textAlign="left"
        >
          What Students are Looking into
        </Text>
        <CardHstack />
      </VStack>
    </VStack>
  );
}
