import React from "react";
import {
  Text,
  Divider,
  Link,
  VStack,
  HStack,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Footer(props) {
  const router = useRouter();
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
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Academy Business
            </Button>
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Teach on Academy
            </Button>
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Contact Us
            </Button>
          </VStack>
          <VStack spacing={2} alignItems="start">
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Help And Support
            </Button>
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
              onClick={() => router.push("/student/newsletter")}
            >
              NewsLetter
            </Button>

            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
              onClick={() => router.push("/student/contact-us")}
            >
              Contact Us
            </Button>
          </VStack>
          <VStack spacing={2} alignItems="start">
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Terms
            </Button>
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Privacy Policy
            </Button>
            <Button
              variant="ghost"
              textColor="text.900"
              fontSize="sm"
              _hover={{ backgroundColor: "primary.900" }}
            >
              Cookiee Policy
            </Button>
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
