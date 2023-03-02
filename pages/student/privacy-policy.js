import { Text, Button, VStack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Privacypolicy() {
  return (
    <VStack
      p={[4, 6, 6]}
      minH={"70vh"}
      w="full"
      bg="background.900"
      justifyContent="center"
    >
      <Text
        color="text.900"
        fontWeight="semi-bold"
        fontSize="2xl"
        textAlign="center"
        textDecoration="underline"
        textDecorationColor="primary.900"
      >
        Privacy Policy
      </Text>
      <Box borderWidth={1} rounded="lg" borderColor="primary.900" p={5}>
        <Text
          color="text.900"
          fontWeight="normal"
          fontSize="md"
          textAlign="center"
        >
          You agree, further, not to use or attempt to use any engine, software,
          tool, agent or other device or mechanism (including without limitation
          browsers, spiders, robots, avatars or intelligent agents) to navigate
          or search this Website other than the search engine and search agents
          available from us on this Website.
        </Text>
        <Text
          color="text.900"
          fontWeight="normal"
          fontSize="md"
          textAlign="center"
        >
          • You agree not to use any device, software or routine to interfere or
          attempt to interfere with the proper working of this Website or any
          activity being conducted on this
        </Text>
        <Text
          color="text.900"
          fontWeight="normal"
          fontSize="md"
          textAlign="center"
        >
          • You agree, further, not to use or attempt to use any engine,
          software, tool, agent or other device or mechanism (including without
          limitation browsers, spiders, robots, avatars or intelligent agents)
          to navigate or search this Website other than the search engine and
          search agents available from us on this Website.
        </Text>
      </Box>
    </VStack>
  );
}
