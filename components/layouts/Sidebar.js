import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="absolute"
      right="0"
      top="20"
      zIndex={1}
      h="80vh"
      width={navSize == "small" ? "75px" : "300px"}
      flexDir="column"
      justifyContent="space-between"
      backgroundColor="text.900"
      overflowY="auto"
    >
      <Flex p="5%" flexDir="column" w="100%" alignItems="center" as="nav">
        <SidebarContent />
      </Flex>
    </Flex>
  );
}
