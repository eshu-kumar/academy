import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  Button,
  Container,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { BsFillCheckCircleFill } from "react-icons/fa";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function CourseCard(item) {
  const initialFocusRef = React.useRef();
  return (
    <Center py={12}>
      <Container
        p={6}
        maxW={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <Box rounded={"lg"} pos={"relative"} height="380px">
          <Image
            rounded={"lg"}
            height={180}
            objectFit={"cover"}
            // src={item.imageUri}
            src={IMAGE}
            alt="Image of the course"
            onMouseOver={() => {
              console.log("xcvbhnjmk");
            }}
          />
          <Stack mt="3" spacing="2">
            <Heading size="md" color="red.900" fontWeight="semibold">
              {item.courseName}
            </Heading>
            <Text
              color="red.900"
              fontSize="sm"
              fontWeight="normal"
              noOfLines={2}
            >
              {item.courseDescription}
            </Text>
            <Text color="red.900" fontSize="sm" fontWeight="normal">
              {item.authorName}
            </Text>
            <Text color="red.900" fontSize="sm" fontWeight="thin">
              {item.rating}
            </Text>
            <Text color="red.900" fontSize="sm" fontWeight="semibold">
              ${item.price}
            </Text>
          </Stack>
          <Divider />
          <Popover
            initialFocusRef={initialFocusRef}
            placement="right"
            closeOnBlur={false}
            width="full"
          >
            <PopoverTrigger>
              <Button
                backgroundColor="primary.900"
                _hover={{ backgroundColor: "hover.900" }}
                color="text.900"
              >
                See Details
              </Button>
            </PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
              <PopoverHeader pt={4} fontWeight="bold" border="0">
                {item.courseName}
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} color="green.500" />
                    {item.authorName}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} color="green.500" />
                    {item.authorName}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} color="green.500" />
                    {item.authorName}
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} color="green.500" />
                    {item.authorName}
                  </ListItem>
                </List>
              </PopoverBody>
              <PopoverFooter
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                py={4}
              >
                <Button
                  backgroundColor="primary.900"
                  _hover={{ backgroundColor: "hover.900" }}
                  color="text.900"
                  py={3}
                >
                  Add To Cart
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
          {/* <Button
            my={3}
            backgroundColor="primary.900"
            _hover={{ backgroundColor: "hover.900" }}
            onClick={() => {
              router.push({
                pathname: item.isInstructor
                  ? "/instructor/course-edit"
                  : "/student/course-info",
                query: { _id: item._id },
              });
            }}
          /> */}
        </Box>
      </Container>
    </Center>
  );
}
