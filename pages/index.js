import React from "react";
import {
  Link,
  Text,
  VStack,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import { motion, useScroll, isValidMotionProp } from "framer-motion";
import { getCourseListService } from "../services/courseService";
import FAQ from "../components/FAQ";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
export default function Home(props) {
  const { scrollYProgress } = useScroll();
  const { courseList } = props;
  return (
    <>
      <motion.div
        position="fixed"
        top="0"
        left="0"
        right="0"
        height="10px"
        background="red.600"
        transform-origin="0%"
        zIndex="1111111111"
        style={{ scaleX: scrollYProgress }}
      />
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
            textDecoration="underline"
            textDecorationColor="primary.900"
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
          <Courses list={courseList} />
          <Text
            fontSize="2xl"
            color="text.900"
            fontWeight="medium"
            textDecoration="underline"
            textDecorationColor="primary.900"
          >
            What Students have to say
          </Text>
          <Reviews isStudent={true} />
          <Text
            fontSize="2xl"
            color="text.900"
            fontWeight="medium"
            textDecoration="underline"
            textDecorationColor="primary.900"
          >
            What Students are Looking into
          </Text>
          <Courses list={courseList} />
          <Text
            fontSize="2xl"
            color="text.900"
            fontWeight="medium"
            textDecoration="underline"
            textDecorationColor="primary.900"
          >
            Frequently Asked Questions
          </Text>
          <FAQ />
        </VStack>
      </VStack>
    </>
  );
}
export async function getStaticProps() {
  const response = await getCourseListService("all");
  if (response.isError) {
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const courseList = response.courses;
  return {
    props: {
      courseList,
    },
  };
}
