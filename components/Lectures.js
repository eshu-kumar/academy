import React from "react";
import {
  Text,
  VStack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
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
  if (props.lectures || props.lectures.length != 0) {
    lectures = props.lectures;
  } else {
    // want to show default lectures? then put default lectures instead of null
    lectures = null;
  }
  return (
    <>
      {lectures ? (
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
                <Box width={["100%", "90%", "80%"]} px={[0, 5]} py={2}>
                  <Accordion bgColor="background.900" key={index} allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton
                          color="primary.900"
                          _expanded={{
                            bg: "primary.900",
                            color: "white",
                            fontWeight: "semibold",
                          }}
                        >
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color="text.900"
                            fontWeight="semibold"
                            fontSize="lg"
                          >
                            {item.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel py={4} color="text.900">
                        {item.description}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
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
