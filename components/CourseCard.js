import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  Button,
  Container,
  useDisclosure,
  MenuItem,
  Menu,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function CourseCard(item) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center py={12}>
      <Container
        p={6}
        maxW={"300px"}
        w={"full"}
        backgroundColor="whiteAlpha.200"
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <Box rounded={"lg"} pos={"relative"} height="380px">
          <Image
            rounded={"lg"}
            height={180}
            objectFit={"cover"}
            src={item.imageUri}
            alt="Image of the course"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          />
          <Stack mt="3" spacing="2">
            <Heading size="md" color="text.900" fontWeight="semibold">
              {item.courseName}
            </Heading>
            <Text
              color="text.900"
              fontSize="sm"
              fontWeight="normal"
              noOfLines={2}
            >
              {item.courseDescription}
            </Text>
            <Text color="text.900" fontSize="sm" fontWeight="normal">
              {item.authorName}
            </Text>
            <Text color="text.900" fontSize="sm" fontWeight="thin">
              {item.rating}
            </Text>
            <Text color="text.900" fontSize="sm" fontWeight="semibold">
              ${item.price}
            </Text>
          </Stack>
          <Divider />
          <Menu isOpen={isOpen}>
            <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              p={4}
              height="full"
              borderWidth={1}
              _light={{ borderColor: "primary.900", bg: "primary.900" }}
            >
              <Text fontWeight="semibold" fontSize="md" color="text.900">
                {item.courseName}
              </Text>
              <MenuItem
                _light={{ bg: "primary.900" }}
                _dark={{ bg: "whiteAlpha.200" }}
                color="text.900"
              >
                {item.description}
              </MenuItem>
              <MenuItem
                _light={{ bg: "primary.900" }}
                _dark={{ bg: "whiteAlpha.200" }}
                color="text.900"
              >
                {item.description}
              </MenuItem>
              <MenuItem
                _light={{ bg: "primary.900" }}
                _dark={{ bg: "whiteAlpha.200" }}
                color="text.900"
              >
                {item.description}{" "}
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            backgroundColor="primary.900"
            _hover={{ backgroundColor: "hover.900" }}
            color="text.900"
            mt={5}
            onClick={() => {
              router.push({
                pathname: item.isInstructor
                  ? "/instructor/course-edit"
                  : "/student/course-info",
                query: { _id: item._id },
              });
            }}
          >
            View Course
          </Button>
          {/* <Button
                  backgroundColor="primary.900"
                  _hover={{ backgroundColor: "hover.900" }}
                  color="text.900"
                  py={3}
                  onClick={() => {
                    router.push("/experiments/payment-page");
                  }}
                >
                  Add To Cart
                </Button> */}
          {/* </PopoverFooter>
            </PopoverContent>
          </Popover> */}
        </Box>
      </Container>
    </Center>
  );
}
