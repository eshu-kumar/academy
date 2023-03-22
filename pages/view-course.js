import {
  Button,
  VStack,
  Text,
  Center,
  chakra,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { getCourseInfoService } from "../services/courseService";
import {
  createCommentService,
  getCommentListService,
} from "../services/commentService";
import {
  createReviewService,
  getReviewListService,
} from "../services/reviewService";
import { loaderStore } from "../store/loaderStore";
import { authStore } from "../store/authStore";
import Reviews from "../components/Reviews";
import QuestionAndAnswer from "../components/Q&A";
import Lectures from "../components/Lectures";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import dynamic from "next/dynamic";
import { authenticateServerService } from "../services/authService";
import { useCustomToast } from "../utils/useCustomToast";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Formik, Form, resetForm } from "formik";
import * as Yup from "yup";
import { MyTextArea } from "../components/FormGrocery";
chakra(ReactPlayer);
function ViewCourse(props) {
  console.log("props of view course", props);
  console.log("review props", props.reviews);

  const { showToast } = useCustomToast();
  const { course, lectures } = props;
  const [viewing, setViewing] = useState(
    lectures.length > 0 ? lectures[0].file : ""
  );

  const [comments, setComments] = useState(props.comments);
  const [reviews, setReviews] = useState(props.reviews);
  const loader = loaderStore();

  let uri =
    viewing !== ""
      ? `http://localhost:3000/api/file/get-file?file=${viewing}&&userEmail=${props.user.email}`
      : `https://www.youtube.com/watch?v=hQAHSlTtcmY`;

  const handleSubmit = async (values) => {
    const commentObj = { commentor: props.user.email, comment: values.comment };
    loader.setStatus("Adding  comment...");
    loader.setIsLoading(true);
    const response = await createCommentService(commentObj);
    loader.setIsLoading(false);
    //NEED TO ADD LOGIC FOR REFRESH OF COMMENTS ONCE THE COMMENT ADDED
    if (!response.isError) {
      showToast(response.isError, response.message);
      setComments([commentObj, ...comments]);
    } else {
      showToast(response.isError, response.error);
    }
  };
  const handleReviewSubmit = async (values) => {
    // console.log("handle the subbmit of the form");
    const commentObj = { reviewer: props.user.email, review: values.review };
    loader.setStatus("Adding  review...");
    loader.setIsLoading(true);
    const response = await createReviewService(commentObj);
    loader.setIsLoading(false);

    //NEED TO ADD LOGIC FOR REFRESH OF COMMENTS ONCE THE COMMENT ADDED
    if (!response.isError) {
      showToast(response.isError, response.message);
      setReviews([commentObj, ...reviews]);
      // resetForm();
    } else {
      showToast(response.isError, response.error);
    }
  };

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
            <VStack w="full" alignItems="start" pt={5} spacing={5}>
              <Formik
                style={{ width: "100%" }}
                initialValues={{
                  review: "",
                }}
                validationSchema={Yup.object({
                  review: Yup.string()
                    .min(8, "Must be greater than 8 characters")
                    .required("Required"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  console.log(values);
                  await handleReviewSubmit(values);
                  resetForm();
                }}
              >
                <Form style={{ width: "100%" }}>
                  <VStack spacing={3} w="full" alignItems={"center"}>
                    <MyTextArea
                      label="Add Review"
                      type="text"
                      id="review"
                      name="review"
                    />

                    <Button
                      type="submit"
                      backgroundColor="primary.900"
                      color="text.900"
                      px={6}
                      _hover={{ backgroundColor: "primary.600" }}
                    >
                      Add Review
                    </Button>
                  </VStack>
                </Form>
              </Formik>
            </VStack>
            <Reviews reviews={reviews} />
          </TabPanel>
          <TabPanel>
            <VStack w="full" alignItems="start" pt={5} spacing={5}>
              <Formik
                style={{ width: "100%" }}
                initialValues={{
                  comment: "",
                }}
                validationSchema={Yup.object({
                  comment: Yup.string()
                    .min(8, "Must be greater than 8 characters")
                    .required("Required"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  console.log("this is the values ", values);
                  await handleSubmit(values);
                  resetForm();
                }}
              >
                <Form style={{ width: "100%" }}>
                  <VStack spacing={3} w="full" alignItems={"center"}>
                    <MyTextArea
                      label="Comment"
                      type="text"
                      id="comment"
                      name="comment"
                    />

                    <Button
                      type="submit"
                      backgroundColor="primary.900"
                      color="text.900"
                      px={6}
                      _hover={{ backgroundColor: "primary.600" }}
                    >
                      Add comment
                    </Button>
                  </VStack>
                </Form>
              </Formik>
            </VStack>
            <QuestionAndAnswer comments={comments} />
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
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }
  const _id = context.query._id;
  const response = await getCourseInfoService(_id);
  const course = response.course;
  const lectures = response.lectures;
  const commentsResponse = await getCommentListService(context.req);
  const reviewsResponse = await getReviewListService(context.req);
  console.log(context, "this is the context from SSR");
  return {
    props: {
      user,
      course,
      lectures,
      comments: commentsResponse.comments,
      reviews: reviewsResponse.reviews,
    },
  };
}
