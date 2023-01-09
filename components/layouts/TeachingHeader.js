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

  async function logout() {
    console.log("logut clicked");
    try {
      const token = await localStorage.getItem("token");
      if (token) {
        let response = await fetch(`http://localhost:4000/logout`, {
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
        await localStorage.removeItem("token");
        router.push("/");
      } else {
        throw new Error("session expired ");
      }
    } catch (error) {
      console.log("in the errro logout client");
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
      borderBottomWidth={1}
      alignItems='center'
      justifyContent='space-between'
      py={4}
      px={8}
      borderBottomColor='whiteAlpha.700'
      backgroundColor='background.900'
    >
      <Link as={NextLink} href='/'>
        <Center w='100px'>
          <Text fontSize='3xl' color='text.900'>
            Academy
          </Text>
        </Center>
      </Link>

      <HStack space={4}>
        <Button
          colorScheme='teal'
          color='text.900'
          variant='ghost'
          _hover={{ backgroundColor: "hover.900" }}
          onClick={signup}
        >
          Signup
        </Button>
        <Button
          colorScheme='teal'
          color='text.900'
          variant='ghost'
          _hover={{ backgroundColor: "hover.900" }}
          onClick={login}
        >
          Login
        </Button>
        <Button
          colorScheme='teal'
          color='text.900'
          variant='ghost'
          _hover={{ backgroundColor: "hover.900" }}
          onClick={logout}
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
