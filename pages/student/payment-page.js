import { Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PaymentPage(props) {
  const router = useRouter();
  return (
    <VStack
      p={[4, 6, 6]}
      minH={"70vh"}
      spacing={2}
      w="full"
      bg="background.900"
    >
      <Text color="text.900" fontWeight={800}>
        this is the payment page
      </Text>

      <Button
        bg="primary.900"
        color="text.900"
        _hover={{ backgroundColor: "primary.600" }}
        onClick={() => router.push("/student/my-learnings")}
      >
        View Course
      </Button>
    </VStack>
  );
}
