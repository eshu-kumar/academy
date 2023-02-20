import React from "react";
import {
  Text,
  Button,
  Box,
  HStack,
  VStack,
  Flex,
  Stack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Reviews from "../../components/Reviews.js";

import { useRouter } from "next/router";

const rewards = [
  {
    primaryText: "Teach your way",
    secondaryText:
      "Take the liberty to plan your circulum and Publish the course you want,in the way you want,you have control",
  },
  {
    primaryText: "Contribute",
    secondaryText:
      "Teach what you know and help learners explore their interests and gain new skills",
  },
  {
    primaryText: "Get rewarded",
    secondaryText:
      "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
  },
];

export default function GetStarted(props) {
  chakra(Image);
  const router = useRouter();

  return (
    <VStack width="full" height="100%" backgroundColor="background.900">
      <Flex
        w="full"
        h="50vh"
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        loading="lazy"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color="text.900"
              fontSize={["lg", "2xl", "3xl"]}
              fontWeight="bold"
            >
              Teach new skills online
            </Text>
            <Text
              color={"white"}
              fontWeight="normal"
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              If kids can be super engaged in video games, there’s a way for
              them to be super engaged in education as well.
            </Text>
            <Stack direction={"row"}>
              <Button
                backgroundColor="primary.900"
                color="text.900"
                _hover={{ backgroundColor: "primary.600" }}
                onClick={() => {
                  router.push("../instructor/my-creations");
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        py={20}
      >
        <Text color="text.900" fontWeight="bold" fontSize="3xl">
          So many reasons to start
        </Text>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          spacing={10}
          pt={10}
        >
          {rewards.map((item, index) => {
            return (
              <VStack key={index} spacing={1} justifyContent="center">
                <Text color="text.900" fontWeight="bold" fontSize="xl">
                  {item.primaryText}
                </Text>
                <Text color="text.900" fontWeight="normal" fontSize="sm">
                  {item.secondaryText}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Box>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="3xl"
        textAlign="center"
      >
        What Other Teachers have to say
      </Text>
      <Reviews />
      <VStack
        px={5}
        alignItems="center"
        justifyContent="center"
        spacing={3}
        py={5}
      >
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="center"
        >
          Start teaching today
        </Text>
        <Text
          color="text.900"
          fontWeight="semibold"
          fontSize="sm"
          textAlign="center"
        >
          Create Your course and upload lectures and transform the life of
          students
        </Text>
        <Button
          backgroundColor="primary.900"
          color="text.900"
          width="50%"
          _hover={{ backgroundColor: "primary.600" }}
          onClick={() => {
            router.push("../instructor/my-creations");
          }}
        >
          Get Started
        </Button>
      </VStack>
    </VStack>
  );
}
