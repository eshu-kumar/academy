import {
  Button,
  Flex,
  Heading,
  Input,
  VStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { MyCheckbox, MyTextInput } from "../../components/FormGrocery";
import { useRouter } from "next/router";

export default function ForgotPasswordForm() {
  const router = useRouter();
  return (
    <VStack
      w="full"
      backgroundColor="background.900"
      minH="70vh"
      align="center"
      justify="center"
    >
      <Flex align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            You&apos;ll get an email with a reset link
          </Text>
          <Formik>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
            {/* <MyTextInput label="Email" id="email" name="email" type="email" /> */}
          </Formik>
          <Stack spacing={6}>
            <Button
              bg="primary.900"
              color="text.900"
              _hover={{
                bg: "primary.600",
              }}
              onClick={() => router.push("/auth-user/login")}
            >
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </VStack>
  );
}
