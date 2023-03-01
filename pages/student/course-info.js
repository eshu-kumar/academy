import React, { useEffect, useState } from "react";
import {
  Button,
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
import Lectures from "../../components/Lectures";
import Reviews from "../../components/Reviews";
import { loaderStore } from "../../store/loaderStore";
import { NextSeo } from "next-seo";
import { authStore } from "../../store/authStore";
import CourseOverview from "../../components/CourseOverview";
import MyTooltip from "../../components/others/MyTooltip";
const SEO = {
  title: "MY learning page",
  description:
    "Welcome to your learning page here you will see all your active courses that you bought",
  openGraph: {
    title: "MY learning page",
    description:
      "Welcome to your learning page here you will see all your active courses that you bought",
  },
};
export default function CourseInfo(props) {
  const auth = authStore();
  const router = useRouter();
  //console.log("props in courseinfo", props);
  const { course, lectures } = props;
  //write logic for code refresh on add lecture and how to merge server side data and client side data
  // useEffect(() => {
  //   async function getCourseInfo() {
  //     loader.setStatus("Fetching course details...");
  //     loader.setIsLoading(true);
  //     const response = await getCourseInfoService(_id);
  //     loader.setIsLoading(false);
  //     if (!response.isError) {
  //       setCourse(response.course);
  //       setLectures(response.lectures);

  //     }
  //     console.log("course in course info ", response);
  //   }
  //   getCourseInfo();
  // }, [courseInfoRefresh]);
  let uri = course
    ? `http://localhost:4000/course/get-course?file=${course.file.toString()}`
    : "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  if (course)
    return (
      <Flex minH="90vh" width="full" backgroundColor="background.900">
        <VStack w="full" alignItems="flex-start">
          <Image
            w={"full"}
            h={400}
            src={uri}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            loading="lazy"
          />
          <VStack w="full" alignItems="flex-start" spacing={1} px={6} pt={2}>
            <HStack spacing={2} w="full" justifyContent="flex-end">
              <MyTooltip message="Congratulations in Trial version you can Watch this course for Free now!">
                <Button
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
              </MyTooltip>

              <MyTooltip message="Congratulations in Trial version you can Enroll this course for Free now!">
                <Button
                  color="white"
                  backgroundColor="primary.900"
                  _hover={{ backgroundColor: "hover.900" }}
                  onClick={() => {
                    if (course && course._id) {
                      router.push({
                        pathname: "../student/my-learnings",
                        query: { _id: course._id },
                      });
                    }
                  }}
                >
                  Enroll
                </Button>
              </MyTooltip>
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
                  Reviews
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {course ? <CourseOverview course={course} /> : null}
                </TabPanel>
                <TabPanel>
                  <Lectures userEmail={userEmail} lectures={lectures} />
                </TabPanel>
                <TabPanel>
                  <Reviews />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </VStack>
      </Flex>
    );
}
export async function getServerSideProps(context) {
  console.log("context", context.query);
  const _id = context.query._id;
  const response = await getCourseInfoService(_id);
  if (response.isError) {
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const course = response.course;
  const lectures = response.lectures;

  return {
    props: {
      course,
      lectures,
    },
  };
}
