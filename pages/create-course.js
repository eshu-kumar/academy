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
} from "@chakra-ui/react";
//import { Formik, Field, Form } from "formik";
import ImageUploading from "react-images-uploading";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import ToastBox from "../components/others/ToastBox";
import axios from "axios";
import FormData from "form-data";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import {
  MyCheckbox,
  MyTextInput,
  MySelect,
  MyFileInput,
} from "../components/FormGrocery";
function CreateCourse() {
  const toast = useToast();
  const router = useRouter();
  //this page has no validations try to use formik again because it was giving errors previously
  const [coursename, setCoursename] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (values) => {
    // event.preventDefault();
    console.log("values", values);
    const token = await localStorage.getItem("token");
    const formData = new FormData();
    formData.append("coursename", values.coursename);
    formData.append("file", file);
    formData.append("category", values.category);
    formData.append("author", values.author);

    axios
      .post(`http://localhost:4000/course/create-course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
      })
      .then((response) => {
        console.log(response);
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => (
            <ToastBox
              message={response.data.message}
              isError={response.isError}
            />
          ),
        });
        setTimeout(() => {
          router.push("/view-course");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => <ToastBox message={error.message} isError={true} />,
        });
      });
  };
  return (
    <Flex
      justifyContent="space-around"
      alignItems={"center"}
      bg="gray.50"
      align="center"
      justify="center"
      h="90vh"
      w="100%"
    >
      <VStack bg="white" px={10} py={6} rounded="md" w={400} spacing={4}>
        <Formik
          initialValues={{
            coursename: "",
            author: "",
            category: "",
          }}
          validationSchema={Yup.object({
            coursename: Yup.string()
              .min(8, "Must be greater than 8 characters")
              .required("Required"),
            author: Yup.string()
              .min(6, "Must be greater than 6 characters")
              .required("Required"),
            category: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await handleSubmit(values);
          }}
        >
          <Form>
            <VStack spacing={4} alignItems="left">
              <MyTextInput
                label="Course Name"
                type="text"
                id="coursename"
                name="coursename"
              />
              <MyFileInput
                label="Course File "
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
              <MyTextInput
                label="Author"
                type="text"
                id="author"
                name="author"
              />

              <Button type="submit">Submit</Button>
            </VStack>
          </Form>
        </Formik>
      </VStack>
    </Flex>
  );
}

export default memo(CreateCourse);
