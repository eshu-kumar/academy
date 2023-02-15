import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  VStack,
} from "@chakra-ui/react";

const reviews = [
  {
    heading: "Efficient Collaborating",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    name: "Jane Cooper",
    position: "CEO at ABC Corporation",
  },
  {
    heading: "Efficient Collaborating",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    name: "Jane Cooper",
    position: "CEO at ABC Corporation",
  },
  {
    heading: "Efficient Collaborating",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    name: "Jane Cooper",
    position: "CEO at ABC Corporation",
  },
  {
    heading: "Efficient Collaborating",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    name: "Jane Cooper",
    position: "CEO at ABC Corporation",
  },
];

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container width="100%" py={16}>
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
                    borderTop: "solid",
                    borderTopWidth: 16,

                    pos: "absolute",
                    bottom: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Heading color="text.900">{item.heading}</Heading>
                  <Text textAlign={"center"} fontSize={"sm"} color="text.900">
                    {item.content}
                  </Text>
                </Stack>
                <Flex align={"center"} mt={8} direction={"column"}>
                  <Avatar src={item.image} mb={2} />
                  <Text fontWeight={600} color="text.900">
                    {item.name}
                  </Text>
                  <Text fontSize={"sm"} color="text.900">
                    {item.position}
                  </Text>
                </Flex>
              </VStack>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
