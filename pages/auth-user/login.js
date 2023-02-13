import { Button, Flex, VStack, Image, Heading, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useCustomToast } from "../../utils/useCustomToast";
import cookies from "js-cookie";
import { loginService } from "../../services/authService";
import { authStore } from "../../store/authStore";
import { loaderStore } from "../../store/loaderStore";
import { authenticateServerService } from "../../services/authService";
import { MyTextInput } from "../../components/FormGrocery";

export default function Login() {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const loader = loaderStore();
  const { setAuthenticated } = authStore();
  async function handleLogin(values) {
    const email = values.email;
    const password = values.password;
    // loader.setStatus("Logging in...");
    // loader.setIsLoading(true);
    const response = await loginService(email, password);
    // loader.setIsLoading(false);
    if (!response.isError) {
      console.log(response);
      setAuthenticated();
      showToast(response.isError, response.message);
      router.push("/student/my-learnings");
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
      px={10}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"} color="text.900">
              Sign in to your account
            </Heading>
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
                </VStack>
              </Form>
            </Formik>
            <Stack spacing={6}>
              <Button
                type="submit"
                backgroundColor="primary.900"
                color="text.900"
                _hover={{ backgroundColor: "primary.600" }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} display={{ sm: "none", md: "flex" }}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            bor
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
            loading="lazy"
          />
        </Flex>
      </Stack>
    </VStack>
  );
}
export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (!user.isError) {
    // Redirect to a "not found" page
    return {
      redirect: { destination: "/student/my-learnings", permanent: false },
    };
  }
  return {
    props: {
      user,
    },
  };
}
