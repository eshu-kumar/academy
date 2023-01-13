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
    <Card minW={200} flex={1} border="2px" borderColor="whiteAlpha.300">
      <CardBody w="full">
        <Image
          w={"full"}
          h={200}
          src={item.imageUri}
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
            View Course
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}
