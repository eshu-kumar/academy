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
  chakra,
  Container,
  shouldForwardProp,
} from "@chakra-ui/react";
import {
  motion,
  useTime,
  useTransform,
  isValidMotionProp,
} from "framer-motion";
import { useRouter } from "next/router";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function CardComponent(item) {
  const router = useRouter();
  return (
    <Container display="flex" alignItems="center" justifyContent="center">
      <Card minW={280} maxW={280}>
        <ChakraBox
          // @ts-ignore no problem in operation, although type error appears.
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 120 }}
          width="280px"
          height="100%"
          border-radius="20px"
          cursor="pointer"
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
        </ChakraBox>
      </Card>
    </Container>
  );
}
