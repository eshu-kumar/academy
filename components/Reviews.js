import React from "react";
import { Text, Avatar, Stack, VStack, Flex } from "@chakra-ui/react";

const studentReview = [
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    review:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    reviewer: "Will A",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];

const teachersReview = [
  {
    review:
      "Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own",
    reviewer: "Deborah Grayson Riege",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    isTrue: true,
  },
  {
    review:
      "Udemy has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college.",
    reviewer: "Paulo Dichone",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    isTrue: true,
  },
  {
    review:
      "I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”",
    reviewer: "Frank Kane",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    isTrue: true,
  },
  {
    review:
      "Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own",
    reviewer: "Will A",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
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
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 10, md: 4, lg: 10 }}
      align={"center"}
    >
      {reviews.map((item, index) => {
        return (
          <VStack key={index} spacing={5}>
            <Stack
              boxShadow={"lg"}
              rounded={"xl"}
              backgroundColor="whiteAlpha.200"
              p={8}
              align={"center"}
              pos={"relative"}
              _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderTopWidth: 16,
                pos: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Text textAlign={"center"} fontSize={"sm"} color="text.900">
                {item.review}
              </Text>
            </Stack>
            <Flex align={"center"} mt={8} direction={"column"}>
              <Avatar src={item.image} mb={2} />
              <Text fontWeight={600} color="text.900">
                {item.reviewer}
              </Text>
            </Flex>
          </VStack>
        );
      })}
    </Stack>
    // <HStack w="full" alignItems="stretch" overflow={"auto"} py={2}>
    //   {/* {isTrue === true */}
    //   {reviews.map((item, index) => {
    //     return (
    //       <Card
    //         minW={"250"}
    //         h="100%"
    //         alignItems="stretch"
    //         key={index}
    //         px={3}
    //         py={4}
    //         border="2px"
    //         borderColor="whiteAlpha.300"
    //       >
    //         <CardBody>
    //           <Text fontSize="md" fontWeight="medium" color="text.900">
    //             {item.review}
    //           </Text>
    //           <HStack spacing={2} alignItems="center" mt={2}>
    //             <Avatar
    //               name={item.reviewer}
    //               color="text.900"
    //               backgroundColor="primary.900"
    //               size="sm"
    //             />
    //             <Text fontSize="sm" color="text.900">
    //               {item.reviewer}
    //             </Text>
    //           </HStack>
    //         </CardBody>
    //       </Card>
    //     );
    //   })}
    // </HStack>
  );
}
