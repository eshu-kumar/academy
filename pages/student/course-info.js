import React, { useEffect, useState } from "react";
import {
  Text,
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
export default function CourseInfo(props) {
  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const router = useRouter();
  const { _id } = router.query;
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
              Start Learning
            </Button>
            <Button
              // variant='ghost'
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
              Add
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
                Reviews
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
