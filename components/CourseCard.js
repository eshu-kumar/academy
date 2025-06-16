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
import { useRouter } from "next/router";
export default function CardComponent(item) {
  const router = useRouter();
  return (
    <Card
      minW={280}
      maxW={280}
      h="100%"
      border="2px"
      borderColor="whiteAlpha.300"
      alignItems="stretch"
      backgroundColor="#000"
    >
      <CardBody h="100%" w="full" justifyContent="space-around">
        <Image
          width={"full"}
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
            onClick={() => {
              router.push({
                pathname: item.isInstructor
                  ? "/instructor/course-edit"
                  : "/student/course-info",
                query: { _id: item._id },
              });
            }}
          >
            See Details
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}
