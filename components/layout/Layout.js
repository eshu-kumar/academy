import React from "react";
import { Flex, Center, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import Header from "./header";
export default function Layout(props) {
  if (typeof window !== undefined) console.log("this is layout ");
  return (
    <Flex w="100%" direction="column">
      <Header />
      <Flex>{props.children}</Flex>
    </Flex>
  );
}
