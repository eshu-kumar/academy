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
  Center,
  HStack,
  SimpleGrid,
  Image,
  forwardRef,
  Select,
  chakra,
} from "@chakra-ui/react";
//import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import ToastBox from "../components/others/ToastBox";
import { useCustomToast } from "../utils/useCustomToast";
import axios from "axios";
import FormData from "form-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createCourseService } from "../services/courseService";
import {
  MyCheckbox,
  MyTextInput,
  MySelect,
  MyFileInput,
  MyTextArea,
} from "../components/FormGrocery";
function CreateCourse() {
  const { showToast } = useCustomToast();
  const router = useRouter();
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
    const response = await createCourseService(formData);
    if (!response.isError) {
      console.log(response);
      showToast(response.isError, response.message);
      // setTimeout(() => {
      //   router.push("/view-course");
      // }, 2000);
    } else {
      console.log(response);
      showToast(response.isError, response.error);
    }
  };
  return (
    <Flex
      justifyContent="space-around"
      alignItems={"center"}
      bg="gray.50"
      minH="90vh"
      w="full"
      p={10}
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
          <VStack spacing={3} w={"100%"} p={10} alignItems={"center"}>
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
              label="Course price in rupees"
              type="number"
              id="price"
              name="price"
            />
            <MyTextInput label="Author" type="text" id="author" name="author" />

            <Button type="submit">Submit</Button>
          </VStack>
        </Form>
      </Formik>
    </Flex>
  );
}

export default memo(CreateCourse);
