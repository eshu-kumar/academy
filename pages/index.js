import React from "react";
import { Link, Text, VStack } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import ReviewsComponent from "../components/others/Reviews";
export default function Home() {
  return (
    <VStack flex={1} backgroundColor="background.900" spacing={5} pt={5} pb={6}>
      <Text
        textAlign="left"
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
        textAlign="start"
        fontWeight="medium"
        fontSize="xl"
        color="text.900"
      >
        Choose from courses in English and many other languages
      </Text>
      <VStack mt={3} spacing={5}>
        <CardComponent />
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
        <CardComponent />
      </VStack>
    </VStack>
  );
}
