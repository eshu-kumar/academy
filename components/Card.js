import React from "react";
import {
  Text,
  Divider,
  Image,
  Heading,
  Stack,
  Card,
  CardFooter,
  CardBody,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function CardComponent(item) {
  return (
    <Card maxW="sm" flex={1} border="2px" borderColor="whiteAlpha.300">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="3" spacing="2">
          <Heading size="md" color="text.900" fontWeight="semibold">
            {item.courseName}
          </Heading>
          <Text textColor="text.900" fontSize="sm" fontWeight="normal">
            {item.authorName}
          </Text>
          <Text color="text.900" fontSize="sm" fontWeight="thin">
            {item.rating}
          </Text>
          <Text color="text.900" fontSize="sm" fontWeight="semibold">
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      {!item.isBought ? (
        <CardFooter>
          <Button
            // variant='ghost'
            color="white"
            backgroundColor="primary.900"
            _hover={{ backgroundColor: "hover.900" }}
            // onClick={onOpen}
          >
            Add to cart
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}
