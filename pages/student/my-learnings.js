import React from "react";
import { Text, Box, VStack } from "@chakra-ui/react";
import { getCourseListService } from "../../services/courseService";
import Courses from "../../components/Courses";
import { NextSeo } from "next-seo";
import { authStore } from "../../store/authStore";
import { authenticateServerService } from "../../services/authService";
const SEO = {
  title: "MY learning page",
  description:
    "Welcome to your learning page here you will see all your active courses that you bought",
  openGraph: {
    title: "MY learning page",
    description:
      "Welcome to your learning page here you will see all your active courses that you bought",
  },
};
export default function MyLearnings(props) {
  const auth = authStore();
  //console.log("props in my learning", props);
  const { courseList } = props;
  return (
    <>
      <NextSeo {...SEO} />
      <VStack
        p={[4, 6, 6]}
        minH={"70vh"}
        spacing={2}
        w="full"
        bg="background.900"
        px={4}
      >
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
          pt={6}
        >
          Welcome back{" "}
          {auth.email ? auth.email.split("@")[0].split(".")[0] : ""}
        </Text>
        <Box
          borderWidth={1}
          borderColor="primary.900"
          p={4}
          alignItems="center"
        >
          <Text
            textAlign="center"
            color="text.900"
            fontWeight="semibold"
            fontSize="lg"
          >
            Learning that gets you skills for your present and for future
          </Text>
        </Box>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="start"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          My Active Courses
        </Text>
        <Courses list={courseList} isBought={true} />
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="start"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          What To Learn Next
        </Text>
        <Text
          color="text.900"
          fontWeight="semibold"
          fontSize="2xl"
          textAlign="start"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          Students Are Also Viewing
        </Text>
        <Courses list={courseList} />
      </VStack>
    </>
  );
}
export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (user.isError) {
    // Redirect to a "not found" page
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const response = await getCourseListService("myLearnings", user.email);
  //console.log("courselist in serverside props", response);
  const courseList = response.courses;
  return {
    props: {
      courseList,
    },
  };
}
