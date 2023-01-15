import React from "react";
import { Text, Avatar, Card, CardBody, HStack } from "@chakra-ui/react";

const review = [
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
    reviewer: "Will A",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
  },
];
export default function Reviews(props) {
  return (
    <HStack w="full" overflow={"auto"} py={2}>
      {review.map((item, index) => {
        return (
          <Card
            minW={"200"}
            key={index}
            px={3}
            py={4}
            border="2px"
            borderColor="whiteAlpha.300"
          >
            <CardBody>
              <Text fontSize="md" fontWeight="medium" color="text.900">
                {item.review}
              </Text>
              <HStack spacing={2} alignItems="center" mt={2}>
                <Avatar
                  name={item.reviewer}
                  color="text.900"
                  backgroundColor="primary.900"
                  size="sm"
                />
                <Text fontSize="sm" color="text.900">
                  {item.reviewer}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        );
      })}
    </HStack>
  );
}
