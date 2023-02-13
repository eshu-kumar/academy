import React from "react";
import { Flex, Text, Link, Menu, MenuButton } from "@chakra-ui/react";
import Lectures from "../Lectures";

export default function NavItem({ title, active, navSize }) {
  return (
    <Flex flexDir="column" w="100%">
      <Menu placement="right">
        {/* <Lectures /> */}
        <Link
          backgroundColor={active && "#AEC8CA"}
          p={3}
          _hover={{ textDecor: "none", backgroundColor: "primary.900" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Text display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
