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
    <Flex direction={"column"} width="full" bg="background.900" py={7} pt={5}>
      <HStack alignItems="center" justifyContent="space-between" py={5} px={10}>
        <Text textColor="text.900">
          Top companies choose <Link textColor="primary.900">Academy</Link>{" "}
          Business to build in-demand career skills.
        </Text>
      </HStack>
      <Divider />
      <HStack
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems="start"
        py={5}
        px={10}
      >
        <HStack spacing={[4, 8, 10]}>
          <VStack spacing={2} alignItems="start">
            <Link textColor="text.900" fontSize="sm">
              Academy Business
            </Link>
            <Link textColor="text.900" fontSize="sm">
              Teach on Academy
            </Link>
            <Link textColor="text.900" fontSize="sm">
              Contact Us
            </Link>
          </VStack>
          <VStack spacing={2} alignItems="start">
            <Link textColor="text.900" fontSize="sm">
              Help And Support
            </Link>
            <Link textColor="text.900" fontSize="sm">
              Affliate
            </Link>
            <Link textColor="text.900" fontSize="sm">
              Investors
            </Link>
          </VStack>
          <VStack spacing={2} alignItems="start">
            <Link textColor="text.900" fontSize="sm">
              Terms
            </Link>
            <Link textColor="text.900" fontSize="sm">
              Privacy Policy
            </Link>
            <Link textColor="text.900" fontSize="sm">
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
      <HStack alignItems="center" justifyContent="space-between" px={10}>
        <Text textColor="text.900">ACADEMY</Text>
        <Text textColor="text.900"> © 2022 Ademy, Inc.</Text>
      </HStack>
    </Flex>
  );
}
