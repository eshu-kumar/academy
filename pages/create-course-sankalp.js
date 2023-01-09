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
  Form,
} from "@chakra-ui/react";
//import { Formik, Field, Form } from "formik";
import ImageUploading from "react-images-uploading";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import ToastBox from "../components/others/ToastBox";
import axios from "axios";
import FormData from "form-data";
function CreateCourse() {
  const toast = useToast();
  const router = useRouter();
  //this page has no validations try to use formik again because it was giving errors previously
  const [coursename, setCoursename] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await localStorage.getItem("token");
    const formData = new FormData();
    formData.append("coursename", coursename);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("file", file);
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
    <VStack bg="gray.50" align="center" justify="center" h="90vh" w="100%">
      <Text fontSize={"4xl"} color="gray.600">
        Create course
      </Text>
      <VStack bg="white" px={10} py={6} rounded="md" w={400} spacing={4}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} alignItems="left">
            <label htmlFor="coursename">Course Name:</label>
            <Input
              required
              type="text"
              id="coursename"
              name="coursename"
              value={coursename}
              onChange={(event) => setCoursename(event.target.value)}
            />

            <label htmlFor="category">Category:</label>
            <Select
              required
              id="category"
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Select a category</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </Select>

            <label htmlFor="author">Author:</label>
            <Input
              required
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />

            <label htmlFor="file">File:</label>
            <Input
              required
              type="file"
              id="file"
              name="file"
              onChange={(event) => setFile(event.target.files[0])}
            />

            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </VStack>
    </VStack>
  );
}

export default memo(CreateCourse);
