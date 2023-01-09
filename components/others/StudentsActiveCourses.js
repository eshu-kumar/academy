import React from "react";
import {
  Text,
  Divider,
  Image,
  Heading,
  Stack,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";

const info = [
  {
    courseName: "Build Responsive Real-World Websites with HTML and CSS",
    authorName: "jhon doe",
    rating: "4.5",
  },
  {
    courseName: "The Complete Financial Analyst Course Year 2022",
    authorName: "jhon doe",
    rating: "4.2",
  },
  {
    courseName: "The Complete 2023 Web Development Bootcamp",
    authorName: "jhon doe",
    rating: "4.4",
  },
  {
    courseName: "The Complete 2023 Web Development Bootcamp",
    authorName: "jhon doe",
    rating: "4.1",
  },
  {
    courseName: "Build Responsive Real-World Websites with HTML and CSS",
    authorName: "jhon doe",
    rating: "4",
  },
];
export default function StudentsActiveCourses(props) {
  return (
    <HStack px={10} spacing={3}>
      {info.map((item, index) => {
        return (
          <Card
            maxW='sm'
            key={index}
            flex={1}
            border='2px'
            borderColor='whiteAlpha.300'
          >
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='3' spacing='2'>
                <Heading size='md' color='text.900' fontWeight='semibold'>
                  {item.courseName}
                </Heading>
                <Text textColor='text.900' fontSize='sm' fontWeight='normal'>
                  {item.authorName}
                </Text>
                <Text color='text.900' fontSize='sm' fontWeight='thin'>
                  {item.rating}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        );
      })}
    </HStack>
  );
}
