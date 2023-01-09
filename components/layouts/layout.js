import React from "react";
import {
  Flex,
  Center,
  Text,
  Spinner,
  Box,
  Container,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import { authStore } from "../../store/authStore";
import { useRouter } from "next/router";
import ToastBox from "../others/ToastBox";
import { useEffect, useLayoutEffect, useState, memo } from "react";
export default function Layout(props) {
  const toast = useToast();
  const router = useRouter();
  const auth = authStore();
  const url = router.asPath;
  const publicPaths = ["/login", "/", "/signup", "/ex-graphql"];
  const path = url.split("?")[0];
  useEffect(() => {
    auth.fetchData();
  }, []);
  console.log("authstroe in layout ", auth);
  return (
    <Flex w="full" direction="column" minH="100vh" position="relative">
      <Header />
      <Skeleton
        minH="100%"
        isLoaded={auth.isAuthenticated || publicPaths.includes(path)}
      >
        <Flex>{props.children}</Flex>
      </Skeleton>
      {/* {auth.error
        ? toast({
            position: "bottom-left",
            duration: 4000,
            render: () => (
              <ToastBox message={auth.error} isError={auth.error} />
            ),
          })
        : null} */}
      <Footer />
    </Flex>
  );
}
