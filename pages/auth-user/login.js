import { Box, Button, Flex, VStack, Text, Spinner } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useCustomToast } from "../../utils/useCustomToast";
import cookies from "js-cookie";
import { loginService } from "../../services/authService";
import { authStore } from "../../store/authStore";
import { MyCheckbox, MyTextInput } from "../../components/FormGrocery";
export default function Login() {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const { setAuthenticated } = authStore();
  async function handleLogin(values) {
    const email = values.email;
    const password = values.password;
    const response = await loginService(email, password);
    if (!response.isError) {
      console.log(response);
      const token = response.token;
      await localStorage.setItem("token", token, { sameSite: "strict" });
      // Set the cookie if need token at server for server side validation
      //once its deployed on the server side add the secure to true it will besent by https only
      // cookies.set("token", token);
      // console.log("cookie in client ", document.cookie);
      setAuthenticated();
      showToast(response.isError, response.message);
      router.replace("/student/my-learnings");
    } else {
      console.log(response);
      showToast(response.isError, response.error);
    }
  }
  return (
    <VStack
      w="full"
      backgroundColor="background.900"
      minH="70vh"
      align="center"
      justify="center"
    >
      <VStack space={2}>
        <Text fontSize="lg" fontWeight="bold" color="text.900" textAlign="left">
          Log in to your Academy account
        </Text>
        <Box
          borderColor="whiteAlpha.400"
          borderWidth={1}
          p={[6, 8, 10]}
          mx={2}
          minW={[300, 400, 400]}
          rounded="md"
        >
          <VStack w="full" alignItems="left">
            <Formik
              style={{ width: "100%" }}
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(6, "Must be greater than 6 characters")
                  .required("Required"),
                password: Yup.string()
                  .min(6, "Must be greater than 6 characters")
                  .required("Required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                await handleLogin(values);
              }}
            >
              <Form style={{ width: "100%" }}>
                <VStack spacing={3} w="full" alignItems={"center"}>
                  <MyTextInput
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                  />
                  <MyTextInput
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                  />
                  <Button
                    type="submit"
                    backgroundColor="primary.900"
                    color="text.900"
                    px={6}
                    _hover={{ backgroundColor: "primary.600" }}
                  >
                    Login
                  </Button>
                </VStack>
              </Form>
            </Formik>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}
