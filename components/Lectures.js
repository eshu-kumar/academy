import React from "react";
import { Text, HStack, VStack, Center } from "@chakra-ui/react";
import MyTooltip from "./others/MyTooltip";
const defaultLectures = [
  {
    name: "Lecture : 1",
    description: "Introduction",
  },
  {
    name: "Lecture : 2",
    description: "Brief about the topic",
  },
  {
    name: "Lecture : 3",
    description: "Prerequisite",
  },
  {
    name: "Lecture : 4",
    description: "Starter Project",
  },
  {
    name: "Lecture : 5",
    description: "Coding Chalange",
  },
];
export default function Lectures(props) {
  let lectures;
  if (props.lectures) {
    lectures = props.lectures;
  } else {
    lectures = defaultLectures;
  }
  return (
    <>
      {lectures.length > 0 ? (
        <VStack width="full" alignItems="flex-start">
          {lectures.map((item, index) => {
            return (
              <MyTooltip
                key={index}
                message={
                  props.playble
                    ? "Click to play the video"
                    : "Buy or add the course  and go to view course to watch the lecture "
                }
              >
                <HStack
                  alignItems="center"
                  spacing={4}
                  borderWidth={1}
                  borderColor="primary.900"
                  _hover={{ backgroundColor: "whiteAlpha.300" }}
                  borderRadius="md"
                  p={5}
                  width="full"
                  onClick={() => {
                    console.log(" lecture clicked ", item._id && item._id);
                    if (props.playble && props.setViewing) {
                      props.setViewing(item.file);
                    } else {
                      console.log("please buy the course");
                    }
                  }}
                >
                  <Text fontWeight="semibold" color="text.900" fontSize="sm">
                    {item.name}
                  </Text>
                  <Text fontWeight="semibold" color="text.900" fontSize="sm">
                    {item.description}
                  </Text>
                </HStack>
              </MyTooltip>
            );
          })}
        </VStack>
      ) : (
        <Text
          w="full"
          m={6}
          fontWeight="semibold"
          color="text.900"
          textAlign={"center"}
          fontSize="xl"
        >
          No lectures yet
        </Text>
      )}
    </>
  );
}
