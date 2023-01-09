import React from "react";
import {
  Flex,
  Center,
  Text,
  Button,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import CardComponent from "../components/Card";

export default function StudentLandingPage(props) {
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
  function CardHstack(props) {
    return (
      <HStack px={10} spacing={3}>
        {info.map((item, index) => {
          return (
            <CardComponent
              isBought={props.isBought}
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
    <>
      <VStack flex={1} bg="background.900" height="100%" px={4} spacing={6}>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
          pt={6}
        >
          Welcome Back User&apos;s Name
        </Text>
        <Box
          borderWidth={1}
          borderColor="primary.900"
          p={4}
          alignItems="center"
        >
          <Text color="text.900" fontWeight="semibold" fontSize="lg">
            Learning that gets you skills for your present and for future
          </Text>
        </Box>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
        >
          My Active Courses
        </Text>
        <CardHstack isBought={true} />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="start"
        >
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
        <CardHstack />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
          pt={6}
        >
          Top In Business
        </Text>
        <CardHstack />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
        >
          Top in Business
        </Text>
        <CardHstack />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
        >
          Top In IT And Software
        </Text>
        <CardHstack />
      </VStack>
    </>
  );
}
