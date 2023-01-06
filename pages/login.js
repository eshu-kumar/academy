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
  Spinner,
} from "@chakra-ui/react";
import ToastBox from "../components/others/ToastBox";

import { useRouter } from "next/router";
import cookies from "js-cookie";
import { authStore } from "../store/authStore";
export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const { setAuthenticated } = authStore();
  async function handleLogin(values) {
    const user = { email: values.email, password: values.password };
    try {
      let response = await fetch(`http://localhost:4000/user/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      const isError = response.isError;
      if (!isError) {
        console.log("token is ", response.data.token);
        const token = response.data.token;
        //once its deployed on the server side add the secure to true it will besent by https only
        await localStorage.setItem("token", token, { sameSite: "strict" });
        // Set the cookie
        cookies.set("token", token);
        console.log("cookie in client ", document.cookie);
        setAuthenticated();
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => (
            <ToastBox message={response.message} isError={response.isError} />
          ),
        });
        router.replace("/user-profile");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        position: "bottom-left",
        duration: 4000,
        render: () => <ToastBox message={error.message} isError={true} />,
      });
    }
  }
  return (
    <VStack
      position="relative"
      bg="gray.50"
      align="center"
      justify="center"
      minH="100vh"
      w="100%"
    >
      <VStack space={2}>
        <Text fontSize={"3xl"} color={"gray.700"}>
          Login your account
        </Text>
        <Box bg="white" px={10} py={6} rounded="md" w={400}>
          <Formik
            initialValues={{
              email: "",
              password: "",

              rememberMe: false,
            }}
            onSubmit={handleLogin}
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

                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="purple"
                  >
                    Remember me?
                  </Field>
                  <Button type="submit" colorScheme="purple" width="full">
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </VStack>
    </VStack>
  );
}
