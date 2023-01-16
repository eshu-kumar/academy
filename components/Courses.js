import React from "react";
import { Text, Button, Box, HStack, VStack, Center } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
const defaultList = [
  {
    coursename: "Build Responsive Real-World Websites with HTML and CSS",
    author: "jhon doe",
    rating: "4.5",
    isActive: true,
    price: "100",
  },
  {
    coursename: "The Complete Financial Analyst Course Year 2022",
    authorName: "jhon doe",
    rating: "4.2",
    isActive: false,
    price: "100",
  },
  {
    coursename: "The Complete 2023 Web Development Bootcamp",
    author: "jhon doe",
    rating: "4.4",
    isActive: true,
    price: "100",
  },
  {
    coursename: "The Complete 2023 Web Development Bootcamp",
    author: "jhon doe",
    rating: "4.1",
    isActive: true,
    price: "100",
  },
  {
    coursename: "Build Responsive Real-World Websites with HTML and CSS",
    author: "jhon doe",
    rating: "4",
    isActive: true,
    price: "100",
  },
];
export default function Courses(props) {
  console.log("props in card hstack", props);
  let list;

  if (!props.list || props.list.length == 0) {
    // want to show default courses? then put default courses instead of null
    list = null;
  } else {
    list = props.list;
  }
  return (
    <>
      {" "}
      {list ? (
        <HStack
          justifyItems="center"
          w="full"
          overflowX={"auto"}
          alignItems="stretch"
          spacing={[3, 4, 6]}
          justifyContent={["left", "left", list.length < 4 ? "center" : "left"]}
        >
          {list.map((item, index) => {
            const uri =
              item.file && props.userEmail
                ? `http://localhost:4000/course/get-course?file=${item.file.toString()}&&userEmail=${props.userEmail.toString()}`
                : "https://images.unsplash.com/photo-1541411438265-4cb4687110f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGQlMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
            return (
              <CourseCard
                _id={item._id}
                isInstructor={props.isInstructor}
                courseName={item.coursename}
                authorName={item.author}
                imageUri={uri}
                rating={4.2}
                price={item.price}
                key={index}
              />
            );
          })}
        </HStack>
      ) : (
        <Center>
          <Text color="text.900" fontSize="2xl">
            No Courses
          </Text>
        </Center>
      )}
    </>
  );
}
