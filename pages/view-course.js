import {
  Button,
  Input,
  VStack,
  Text,
  useToast,
  Center,
  HStack,
  SimpleGrid,
  Image,
  chakra,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { getCourseInfoService } from "../services/courseService";
import { loaderStore } from "../store/loaderStore";
import { authStore } from "../store/authStore";
import Reviews from "../components/Reviews";
import QuestionAndAnswer from "../components/Q&A";
import Lectures from "../components/Lectures";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import dynamic from "next/dynamic";
import { authenticateServerService } from "../services/authService";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
chakra(ReactPlayer);
function ViewCourse(props) {
  const { course, lectures } = props;
  const [viewing, setViewing] = useState(
    lectures.length > 0 ? lectures[0].file : ""
  );
  let uri =
    viewing !== ""
      ? `http://localhost:3000/api/file/get-file?file=${viewing}&&userEmail=${props.user.email}`
      : `https://www.youtube.com/watch?v=hQAHSlTtcmY`;
  console.log("uri", uri);
  return (
    <VStack
      spacing={10}
      bg="background.900"
      align="center"
      justify="center"
      h="100%"
      w="100%"
    >
      <VStack w="100%" px={4} pt={5}>
        <Center h="600" w="full" bg="whiteAlpha.800">
          <ReactPlayer width="100%" height="100%" controls url={uri} />
        </Center>
      </VStack>

      <Tabs width="full" px={2}>
        <TabList overflowX={"auto"}>
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
            Overview
          </Tab>
          <Tab
            borderTopRadius="md"
            _selected={{ bg: "primary.900" }}
            color="text.900"
          >
            Announcements
          </Tab>
          <Tab
            borderTopRadius="md"
            _selected={{ bg: "primary.900" }}
            color="text.900"
          >
            Reviews
          </Tab>
          <Tab
            borderTopRadius="md"
            _selected={{ bg: "primary.900" }}
            color="text.900"
          >
            {" "}
            Discussions
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Lectures
              playble={true}
              setViewing={setViewing}
              lectures={lectures}
            />
          </TabPanel>
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
            <Text color="text.900" fontWeight="semibold" fontSize="lg">
              The latest update to the course will be updated shortly
            </Text>
          </TabPanel>
          <TabPanel>
            <Reviews />
          </TabPanel>
          <TabPanel>
            <Text color="text.900" fontSize="lg" fontWeight="semibold">
              Discussions
            </Text>
            <VStack w="full" alignItems="start" pt={5} spacing={5}>
              <Textarea
                placeholder="Discussions"
                size="lg"
                width="full"
                color="text.900"
                backgroundColor="background.700"
                borderColor="whiteAlpha.600"
                _hover={{ borderColor: "whiteAlpha.600" }}
                _focus={{
                  borderColor: "whiteAlpha.600",
                }}
              />
              <Button
                type="submit"
                backgroundColor="primary.900"
                color="text.900"
                px={6}
                _hover={{ backgroundColor: "primary.600" }}
              >
                Post
              </Button>
            </VStack>
            <QuestionAndAnswer />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default memo(ViewCourse);
export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (user.isError) {
    // Redirect to a "not found" page
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const _id = context.query._id;
  const response = await getCourseInfoService(_id);
  const course = response.course;
  const lectures = response.lectures;

  return {
    props: {
      user,
      course,
      lectures,
    },
  };
}
