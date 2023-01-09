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
import cookies from "cookie";

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
    // Set the cookie
    // Set the cookie
    const token = response.data.token;
    cookies.set("token", token);
    console.log("cookie in client ", document.cookie);
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
    <Flex bg="background.900" align="center" justify="center" h="70vh" w="100%">
      <VStack space={2}>
        <Text fontSize={"3xl"} color="text.900">
          Create your account
        </Text>
        <Box
          px={8}
          py={6}
          rounded="md"
          w={400}
          borderColor="whiteAlpha.400"
          borderWidth={1}
        >
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
                    <FormLabel htmlFor="email" color="text.900">
                      Email Address
                    </FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      borderWidth={1}
                      borderColor="whiteAlpha.400"
                      backgroundColor="#1A1C21"
                      _hover={{ borderColor: "whiteAlpha.600" }}
                      // _focus={{ borderColor: "whiteAlpha.300" }}
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
                    <FormLabel htmlFor="password" color="text.900">
                      Password
                    </FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      backgroundColor="#1A1C21"
                      borderWidth={1}
                      borderColor="whiteAlpha.400"
                      _hover={{ borderColor: "whiteAlpha.600" }}
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
                    <FormLabel htmlFor="cpassword" color="text.900">
                      Confirm Password
                    </FormLabel>
                    <Field
                      as={Input}
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      variant="filled"
                      borderWidth={1}
                      borderColor="whiteAlpha.400"
                      backgroundColor="#1A1C21"
                      _hover={{ borderColor: "whiteAlpha.600" }}
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
                  <Button
                    type="submit"
                    backgroundColor="primary.900"
                    color="text.900"
                    width="full"
                    _hover={{ backgroundColor: "primary.600" }}
                  >
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
