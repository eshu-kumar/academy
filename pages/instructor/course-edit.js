import React, { useEffect, useState } from "react";
import {
  Text,
  Button,
  Box,
  HStack,
  VStack,
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { getCourseInfoService } from "../../services/courseService";
import { createLectureService } from "../../services/lectureService";
import Lectures from "../../components/Lectures";
import ReviewsComponentCourse from "../../components/Reviews";
import FormData from "form-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useCustomToast } from "../../utils/useCustomToast";
import {
  MyCheckbox,
  MyTextInput,
  MySelect,
  MyFileInput,
  MyTextArea,
} from "../../components/FormGrocery";
export default function CourseEdit(props) {
  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const router = useRouter();
  const { _id } = router.query;
  const { showToast } = useCustomToast();
  const [file, setFile] = useState(null);
  useEffect(() => {
    async function getCourseInfo() {
      const response = await getCourseInfoService(_id);
      if (!response.isError) {
        setCourse(response.course);
        setLectures(response.lectures);
        setUserEmail(response.userEmail);
      }
      console.log("course in course info ", response);
    }
    getCourseInfo();
  }, []);
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("file", file);
    formData.append("courseId", course._id);
    const response = await createLectureService(formData);
    if (!response.isError) {
      console.log(response);
      showToast(response.isError, response.message);
    } else {
      console.log(response);
      showToast(response.isError, response.error);
    }
  };
  return (
    <Flex minH="90vh" width="full" backgroundColor="background.900">
      <VStack w="full" alignItems="flex-start">
        <Image
          w={"full"}
          h={400}
          src={
            "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <VStack w="full" alignItems="flex-start" spacing={1} px={6} pt={2}>
          <HStack spacing={2} w="full" justifyContent="flex-end">
            <Button
              // variant='ghost'
              color="white"
              backgroundColor="primary.900"
              _hover={{ backgroundColor: "hover.900" }}
              onClick={() => {
                if (course && course._id) {
                  router.push({
                    pathname: "../view-course",
                    query: { _id: course._id },
                  });
                }
              }}
            >
              View Course
            </Button>
          </HStack>
          <Tabs width="full" px={2}>
            <TabList overflowX={"auto"}>
              <Tab
                borderTopRadius="md"
                _selected={{ bg: "primary.900" }}
                color="text.900"
              >
                Overview
              </Tab>
              <Tab
                borderTopRadius="md"
                _selected={{ bg: "primary.900" }}
                color="text.900"
              >
                Content
              </Tab>
              <Tab
                borderTopRadius="md"
                _selected={{ bg: "primary.900" }}
                color="text.900"
              >
                Add Lecture
              </Tab>
              <Tab
                borderTopRadius="md"
                _selected={{ bg: "primary.900" }}
                color="text.900"
              >
                Edit Course
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {course ? (
                  <VStack w="full" alignItems="left">
                    <Text color="text.900" fontWeight="medium" fontSize="4xl">
                      Course Overview
                    </Text>
                    <Text color="text.900" fontWeight="medium" fontSize="xl">
                      What You will Learn?
                    </Text>
                    <Text color="text.900" fontWeight="medium" fontSize="sm">
                      {course.studentLearn}
                    </Text>
                    <Text color="text.900" fontWeight="medium" fontSize="xl">
                      Requirements :
                    </Text>
                    <Text color="text.900" fontWeight="medium" fontSize="sm">
                      {course.requirements}
                    </Text>
                    <Text color="text.900" fontWeight="medium" fontSize="xl">
                      Description :
                    </Text>
                    <Text color="text.900" fontWeight="medium" fontSize="sm">
                      {course.description}
                    </Text>
                  </VStack>
                ) : null}
              </TabPanel>
              <TabPanel>
                <Lectures userEmail={userEmail} lectures={lectures} />
              </TabPanel>
              <TabPanel w="full">
                <VStack w="full" alignItems="left">
                  <Formik
                    style={{ width: "100%" }}
                    initialValues={{
                      name: "",
                      description: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .min(8, "Must be greater than 8 characters")
                        .required("Required"),
                      description: Yup.string()
                        .min(6, "Must be greater than 6 characters")
                        .required("Required"),
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                      console.log(values);
                      await handleSubmit(values);
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <VStack spacing={3} w="full" alignItems={"center"}>
                        <MyTextInput
                          label="Lecture Name"
                          type="text"
                          id="name"
                          name="name"
                        />
                        <MyTextArea
                          label="Lecture Description"
                          type="text"
                          id="description"
                          name="description"
                        />
                        <MyFileInput
                          label="Lecture Video "
                          type="file"
                          id="file"
                          name="file"
                          file={file}
                          onChange={(event) => {
                            setFile(event.target.files[0]);
                          }}
                        />

                        <Button
                          type="submit"
                          backgroundColor="primary.900"
                          color="text.900"
                          px={6}
                          _hover={{ backgroundColor: "primary.600" }}
                        >
                          Submit
                        </Button>
                      </VStack>
                    </Form>
                  </Formik>
                </VStack>
              </TabPanel>
              <TabPanel>
                <Text color="text.900" fontWeight="medium" fontSize="4xl">
                  Coming Soon...
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </VStack>
    </Flex>
  );
}
