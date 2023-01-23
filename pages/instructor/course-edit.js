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
import { useRouter } from "next/router";
import { getCourseInfoService } from "../../services/courseService";
import { createLectureService } from "../../services/lectureService";
import Lectures from "../../components/Lectures";
import Reviews from "../../components/Reviews";
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
import { loaderStore } from "../../store/loaderStore";
import { authStore } from "../../store/authStore";
import CourseOverview from "../../components/CourseOverview";
import { authenticateServerService } from "../../services/authService";
export default function CourseEdit(props) {
  const auth = authStore();
  const router = useRouter();
  console.log("props in courseinfo", props);
  const { course, lectures } = props;
  let uri = course
    ? `http://localhost:4000/course/get-course?file=${course.file.toString()}`
    : "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

  const [courseInfoRefresh, setCourseInfoRefresh] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const loader = loaderStore();

  const { _id } = router.query;
  const { showToast } = useCustomToast();
  const [file, setFile] = useState(null);
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("file", file);
    formData.append("courseId", course._id);
    loader.setStatus("Uploading lecture details...");
    loader.setIsLoading(true);
    const response = await createLectureService(formData);
    loader.setIsLoading(false);
    if (!response.isError) {
      console.log(response);
      showToast(response.isError, response.message);
      setCourseInfoRefresh(!courseInfoRefresh);
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
          src={uri}
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
              Watch Course
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
                {course ? <CourseOverview course={course} /> : null}
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
export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (user.isError) {
    // Redirect to a "not found" page
    return { redirect: { destination: "/404", permanent: false } };
  }
  console.log("context", context.query);
  const _id = context.query._id;
  const response = await getCourseInfoService(_id);
  const course = response.course;
  const lectures = response.lectures;

  return {
    props: {
      course,
      lectures,
    },
  };
}
