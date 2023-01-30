import React from "react";
import { Text, Avatar, Card, CardBody, HStack } from "@chakra-ui/react";

const studentReview = [
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

const teachersReview = [
  {
    review:
      "Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own",
    reviewer: "Deborah Grayson Riege",
    isTrue: true,
  },
  {
    review:
      "Udemy has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college.",
    reviewer: "Paulo Dichone",
    isTrue: true,
  },
  {
    review:
      "I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”",
    reviewer: "Frank Kane",
    isTrue: true,
  },
  {
    review:
      "Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own",
    reviewer: "Will A",
    isTrue: true,
  },
];

export default function Reviews(props) {
  let orgReviews;
  if (props.reviews && props.reviews.length > 0) {
    orgReviews = props.reviews;
  } else {
    orgReviews = studentReview;
  }
  console.log("student reviews", props.reviews);

  const reviews = props.isTeacher ? teachersReview : orgReviews;
  return (
    <HStack w="full" alignItems="stretch" overflow={"auto"} py={2}>
      {/* {isTrue === true */}
      {reviews.map((item, index) => {
        return (
          <Card
            minW={"250"}
            h="100%"
            alignItems="stretch"
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
