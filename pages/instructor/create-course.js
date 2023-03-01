import { Box, Button, Flex, VStack, Text, useToast } from "@chakra-ui/react";
//import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useState, memo, useRef } from "react";
import { useCustomToast } from "../../utils/useCustomToast";
import FormData from "form-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createCourseService } from "../../services/courseService";
import { authenticateServerService } from "../../services/authService";
import {
  MyTextInput,
  MySelect,
  MyFileInput,
  MyTextArea,
} from "../../components/FormGrocery";
import { loaderStore } from "../../store/loaderStore";
function CreateCourse() {
  const { showToast } = useCustomToast();
  const router = useRouter();
  const loader = loaderStore();
  const [file, setFile] = useState(null);
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("coursename", values.coursename);
    formData.append("file", file);
    formData.append("category", values.category);
    formData.append("studentLearn", values.studentLearn);
    formData.append("requirements", values.requirements);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("author", values.author);
    loader.setStatus("Creating Course...");
    loader.setIsLoading(true);
    const response = await createCourseService(formData);
    loader.setIsLoading(false);
    if (!response.isError) {
      console.log(response);
      showToast(response.isError, response.message);
      setTimeout(() => {
        router.push("../instructor/my-creations");
      }, 2000);
    } else {
      console.log(response);
      showToast(response.isError, response.error);
    }
  };
  return (
    <Flex bg="background.900" w="full" p={[4, 6, 8]} justifyContent="center">
      <Box
        width={["100%", "90%", "70%"]}
        backgroundColor="whiteAlpha.200"
        borderColor="primary.900"
        borderWidth={1}
        borderRadius="lg"
        p={4}
      >
        <Formik
          style={{ width: "100%" }}
          initialValues={{
            coursename: "",
            author: "",
            category: "",
            studentLearn: "",
            requirements: "",
            description: "",
            price: "",
          }}
          validationSchema={Yup.object({
            coursename: Yup.string()
              .min(8, "Must be greater than 8 characters")
              .required("Required"),
            author: Yup.string()
              .min(6, "Must be greater than 6 characters")
              .required("Required"),
            category: Yup.string().required("Required"),
            studentLearn: Yup.string().required("Required"),
            requirements: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            price: Yup.number().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await handleSubmit(values);
          }}
        >
          <Form style={{ width: "100%" }}>
            <VStack spacing={3} w={"100%"} alignItems={"center"}>
              <MyTextInput
                label="Course Name"
                type="text"
                id="coursename"
                name="coursename"
              />
              <MyFileInput
                label="Course introduction image "
                type="file"
                id="file"
                name="file"
                file={file}
                onChange={(event) => {
                  setFile(event.target.files[0]);
                }}
              />
              <MySelect label="Course category" id="category" name="category">
                <option value="">Select a category</option>
                <option value="programming">Programming</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="others">Others</option>
              </MySelect>
              <MyTextArea
                h={140}
                label="What students will learn?"
                type="text"
                id="studentLearn"
                name="studentLearn"
              />
              <MyTextArea
                label="Course requirements for students  "
                type="text"
                id="requirements"
                name="requirements"
              />
              <MyTextArea
                h={200}
                label="Course description  "
                type="text"
                id="description"
                name="description"
              />
              <MyTextInput
                label="Course price"
                type="number"
                id="price"
                name="price"
              />
              <MyTextInput
                label="Author"
                type="text"
                id="author"
                name="author"
              />
              <Button
                type="submit"
                backgroundColor="primary.900"
                color="text.900"
                width={["70%", "50%", "40%"]}
                px={6}
                _hover={{ backgroundColor: "primary.600" }}
              >
                Submit
              </Button>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
}
export default memo(CreateCourse);

export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (user.isError) {
    // Redirect to a "not found" page
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }

  return {
    props: {
      user,
    },
  };
}
