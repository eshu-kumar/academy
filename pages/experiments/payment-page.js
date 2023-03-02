import {
  Box,
  Button,
  Flex,
  VStack,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";

export default function PaymentPage() {
  return (
    <VStack
      w="full"
      backgroundColor="background.900"
      minH="70vh"
      align="center"
      justify="center"
    >
      <Text color="text.900" fontSize="2xl" fontWeight="bold">
        PaymentPage
      </Text>
    </VStack>
  );
}
