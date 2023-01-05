import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ToastBox from "../components/others/ToastBox";

export default function SignUp() {
  const toast = useToast();
  const router = useRouter();
  async function handleSignUp(values) {
    const user = { email: values.email, password: values.password };
    let response = await fetch(`http://localhost:4000/user/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    if (!response.isError)
      await localStorage.setItem("token", response.data.token);
    toast({
      position: "bottom-left",
      duration: 4000,
      render: () => (
        <ToastBox message={response.message} isError={response.isError} />
      ),
    });
    router.push("/user-profile");
  }
  return (
    <Flex bg="gray.50" align="center" justify="center" h="90vh" w="100%">
      <VStack space={2}>
        <Text fontSize={"3xl"} color={"gray.700"}>
          Create your account
        </Text>
        <Box bg="white" px={10} py={6} rounded="md" w={400}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              cpassword: "",
              rememberMe: false,
            }}
            onSubmit={handleSignUp}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      validate={(value) => {
                        let error;
                        if (!value) {
                          error = "Email Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            value
                          )
                        ) {
                          error = "Invalid email";
                        }

                        return error;
                      }}
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.cpassword && touched.cpassword}
                  >
                    <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
                    <Field
                      as={Input}
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error =
                            " Confirm password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.cpassword}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    SignUp
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </VStack>
    </Flex>
  );
}
