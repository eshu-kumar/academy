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
} from "@chakra-ui/react";
import ToastBox from "../others/ToastBox";
import { useRouter } from "next/router";
import NextLink from "next/link";
export default function Header(props) {
  console.log("this is header");
  const toast = useToast();
  const router = useRouter();
  function graphql() {
    router.push("/ex-graphql");
  }
  function signup() {
    router.push("/signup");
  }
  function login() {
    router.push("/login");
  }
  function uploader() {
    router.push("/uploader");
  }
  function goto(route) {
    router.push(route);
  }
  async function logout() {
    console.log("logut clicked");
    try {
      const token = await localStorage.getItem("token");
      if (token) {
        let response = await fetch(`http://localhost:4000/user/logout`, {
          method: "POST",
          body: JSON.stringify({ token: token }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        response = await response.json();
        console.log(response + "in logout");
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
        console.log("deleting the token");
        await localStorage.removeItem("token");
        router.push("/");
      } else {
        throw new Error("session expired ");
      }
    } catch (error) {
      console.log("in the errro logout client", error);
      toast({
        position: "bottom-left",
        duration: 4000,
        render: () => <ToastBox message={error.message} isError={true} />,
      });
      router.push("/");
    }
  }
  function profile() {
    router.push("/user-profile");
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
      toast({
        position: "bottom-left",
        duration: 4000,
        render: () => <ToastBox message={error.message} isError={true} />,
      });
      router.push("/");
    }
  }

  return (
    <Flex
      borderWidth={1}
      alignItems={"center"}
      justifyContent="space-between"
      py={4}
      px={8}
      wrap={true}
      direction={["column", "row"]}
    >
      <Link as={NextLink} href="/">
        <Center w="100px" color={"white"}>
          <Text fontSize="3xl" color={"black"}>
            Academy
          </Text>
        </Center>
      </Link>

      <Flex space={4} wrap={true} direction={["column", "column", "row"]}>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => goto("/create-course")}
        >
          Create course
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => goto("/view-course")}
        >
          View course
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => goto("/uploader")}
        >
          Uploader
        </Button>
        {/* <Button colorScheme="teal" variant="ghost" onClick={()=>goto("/ex-graphql")}>
          Graphql
        </Button> */}
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => goto("/signup")}
        >
          Signup
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => goto("/login")}
        >
          Login
        </Button>
        <Button colorScheme="teal" variant="ghost" onClick={logout}>
          Logout
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => goto("/user-profile")}
        >
          Profile
        </Button>
        {/* <Button colorScheme="teal" variant="ghost" onClick={closeServer}>
          Close Server
        </Button> */}
      </Flex>
    </Flex>
  );
}
