import React from "react";
import {
  Text,
  Divider,
  Link,
  VStack,
  Box,
  HStack,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      direction={"column"}
      width="full"
      bg="background.900"
      px={5}
      py={7}
      pt={5}
    >
      <HStack alignItems="center" justifyContent="space-between" py={5}>
        <Text textColor="text.900">
          Top companies choose{" "}
          <Link textColor="primary.900" href="https://chakra-ui.com">
            Academy
          </Link>{" "}
          Business to build in-demand career skills.
        </Text>
      </HStack>
      <Divider />
      <HStack
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems="start"
        py={5}
      >
        <HStack spacing={[4, 8, 10]}>
          <VStack spacing={2} alignItems="start">
<<<<<<< HEAD
            <Link textColor="text.900" fontSize="sm" href="#">
              Academy Business
            </Link>
            <Link textColor="text.900" fontSize="sm" href="#">
              Teach on Academy
            </Link>
            <Link textColor="text.900" fontSize="sm" href="#">
=======
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
              Academy Business
            </Link>
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
              Teach on Academy
            </Link>
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
>>>>>>> dd64e01e0674346d1e35e69ea4c8f95aa6ce2bf5
              Contact Us
            </Link>
          </VStack>
          <VStack spacing={2} alignItems="start">
<<<<<<< HEAD
            <Link textColor="text.900" fontSize="sm" href="#">
              Help And Support
            </Link>
            <Link textColor="text.900" fontSize="sm">
              NewsLetter
            </Link>
            <Link textColor="text.900" fontSize="sm" href="#">
=======
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
              Help And Support
            </Link>
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
              Affliate
            </Link>
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
>>>>>>> dd64e01e0674346d1e35e69ea4c8f95aa6ce2bf5
              Investors
            </Link>
          </VStack>
          <VStack spacing={2} alignItems="start">
<<<<<<< HEAD
            <Link textColor="text.900" fontSize="sm" href="#">
              Terms
            </Link>
            <Link textColor="text.900" fontSize="sm" href="#">
              Privacy Policy
            </Link>
            <Link textColor="text.900" fontSize="sm" href="#">
=======
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
              Terms
            </Link>
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
              Privacy Policy
            </Link>
            <Link
              textColor="text.900"
              fontSize="sm"
              href="https://chakra-ui.com"
            >
>>>>>>> dd64e01e0674346d1e35e69ea4c8f95aa6ce2bf5
              Cookiee Policy
            </Link>
          </VStack>
        </HStack>
        <Button variant="outline" _hover={{ backgroundColor: "hover.900" }}>
          <HStack alignItems="center">
            <Icon color="white" />
            <Text textColor="text.900" fontSize="sm">
              English
            </Text>
          </HStack>
        </Button>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between">
        <Text textColor="text.900">ACADEMY</Text>
        <Text textColor="text.900"> © 2022 Ademy, Inc.</Text>
      </HStack>
    </Flex>
  );
}
