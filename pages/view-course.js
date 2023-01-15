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
import Reviews from "../components/Reviews";
import QuestionAndAnswer from "../components/Q&A";
import Lectures from "../components/Lectures";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
chakra(ReactPlayer);
function ViewCourse() {
  const router = useRouter();
  const { _id } = router.query;
  const [userEmail, setUserEmail] = useState("");
  const [viewing, setViewing] = useState("");
  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [defaultUrl, setDefaultUrl] = useState("");
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
    setDefaultUrl(`https://www.youtube.com/watch?v=Oedp_e35Vmk`);
  }, []);
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
          {viewing != "" ? (
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url={`http://localhost:4000/lecture/get-lecture?file=${viewing.toString()}&&userEmail=${userEmail.toString()}`}
            />
          ) : defaultUrl.length > 0 ? (
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url="https://www.youtube.com/watch?v=Oedp_e35Vmk"
            />
          ) : null}
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
