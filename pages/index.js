import React from "react";
import { Link, Text, VStack, HStack } from "@chakra-ui/react";
import CardComponent from "../components/Card";
import ReviewsComponent from "../components/others/Reviews";
export default function Home() {
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
  function CardHstack() {
    return (
      <HStack w="full" overflow={"auto"} spacing={3}>
        {info.map((item, index) => {
          return (
            <CardComponent
              courseName={item.courseName}
              authorName={item.authorName}
              rating={item.rating}
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
