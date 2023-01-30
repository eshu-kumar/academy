import React from "react";
import {
  Flex,
  Center,
  Text,
  Button,
  Box,
  HStack,
  Link,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { useCustomToast } from "../../utils/useCustomToast";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cookies from "js-cookie";
import { authStore } from "../../store/authStore";
import { logoutService } from "../../services/authService";
export default function Header(props) {
  console.log("this is header");
  const { setAuthenticated, isAuthenticated } = authStore();
  console.log("is authenticated in header ", isAuthenticated);
  const { showToast } = useCustomToast();
  const router = useRouter();
  const url = router.asPath;
  const path = url.split("?")[0];
  let isStudent = true;
  const isInsructor = path.includes("/instructor/");
  isStudent = path.includes("/student/");
  function goto(route) {
    router.push(route, undefined, { shallow: false });
  }
  async function logout() {
    console.log("logut clicked");
    const response = await logoutService();
    if (!response.isError) {
      setAuthenticated();
      console.log("in header logout success function", response);
      console.log(
        "in header isauthenticated success function",
        isAuthenticated
      );
      showToast(response.isError, response.message);
    } else {
      console.log("in header logout error function", response);
      console.log("in header isauthenticated errro function", isAuthenticated);
      showToast(response.isError, response.error);
    }
    router.push("/");
  }
  async function closeServer() {
    try {
      let response = await fetch(`http://localhost:4000/close-server`, {
        method: "POST",
        //give actual token if you need authentication in future
        body: JSON.stringify({ token: "" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("in the errro close server client");
      showToast(true, error.message);
      router.push("/");
    }
  }
  function InstructorHeader() {
    return (
      <>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/instructor/my-creations")}
        >
          My Creations
        </Button>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/instructor/create-course")}
        >
          Create Course
        </Button>
        {/* <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/instructor/course-edit")}
        >
          Course Edit
        </Button> */}
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/student/my-learnings")}
        >
          Student View
        </Button>
      </>
    );
  }
  function StudentHeader() {
    return (
      <>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/student/my-learnings")}
        >
          My learnings
        </Button>
        {/* <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/student/course-info")}
        >
          CourseInfo
        </Button> */}
        {/* <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/view-course")}
        >
          View Course
        </Button> */}
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/instructor/get-started")}
        >
          Instructor View
        </Button>
      </>
    );
  }
  function ExperimentsHeader() {
    return (
      <>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/experiments/uploader")}
        >
          Uploader
        </Button>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/experiments/ex-graphql")}
        >
          Graphql
        </Button>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={closeServer}
        >
          Close Server
        </Button>
      </>
    );
  }
  function AuthCommonHeader() {
    return (
      <>
        {/* <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/auth-user/user-profile")}
        >
          Profile
        </Button> */}
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={logout}
        >
          Logout
        </Button>
      </>
    );
  }
  function NotAuthHeader() {
    return (
      <>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/auth-user/login")}
        >
          Login
        </Button>
        <Button
          colorScheme="teal"
          color="text.900"
          variant="ghost"
          _hover={{ backgroundColor: "hover.900" }}
          onClick={() => goto("/auth-user/signup")}
        >
          Signup
        </Button>
      </>
    );
  }
  return (
    <Flex
      w="100%"
      wrap={"wrap"}
      borderBottomWidth={1}
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={8}
      borderBottomColor="whiteAlpha.700"
      backgroundColor="background.900"
    >
      <Link mr={10} as={NextLink} href="/">
        <Center w="100px">
          <Text fontSize="3xl" color="text.900">
            Academy
          </Text>
        </Center>
      </Link>
      <Spacer />
      <Flex wrap={"wrap"}>
        {isAuthenticated ? (
          <>
            {isInsructor ? <InstructorHeader /> : <StudentHeader />}
            {/* <ExperimentsHeader /> */}
            <AuthCommonHeader />
          </>
        ) : (
          <NotAuthHeader />
        )}
      </Flex>
    </Flex>
  );
}
