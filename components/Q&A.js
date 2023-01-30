import React from "react";
import { Text, Avatar, HStack, VStack } from "@chakra-ui/react";

const Discussions = [
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Jhon Doe",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
  },
];
export default function QuestionAndAnswer(props) {
  return (
    <VStack
      maxH={600}
      overflowY="auto"
      alignItems="flex-start"
      spacing={6}
      pt={6}
    >
      {props.comments.map((item, index) => {
        return (
          <HStack
            alignItems="center"
            key={index}
            spacing={4}
            onClick={() => {
              console.log("test");
            }}
          >
            <Avatar
              name={item.commentor}
              color="text.900"
              backgroundColor="primary.900"
              size="md"
            />
            <Text fontWeight="normal" color="text.900" fontSize="sm">
              {item.comment}
            </Text>
          </HStack>
        );
      })}
    </VStack>
  );
}
