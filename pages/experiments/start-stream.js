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
import useWebSocket, { ReadyState } from "react-use-websocket";

import {
  useEffect,
  useLayoutEffect,
  useState,
  memo,
  useRef,
  useCallback,
} from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  MyCheckbox,
  MyTextInput,
  MySelect,
  MyFileInput,
  MyTextArea,
} from "../../components/FormGrocery";
import QuestionAndAnswer from "../../components/Q&A";

chakra(ReactPlayer);

function StartStream(props) {
  let uri = `https://www.youtube.com/watch?v=hQAHSlTtcmY`;
  const [localStream, setLocalStream] = useState(null);
  const localVideoRef = useRef(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const socketUrl = "ws://localhost:5500";
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => {
      setIsOpen(true);
      console.log("web socket  connection established");
    },
    onClose: () => {
      setIsOpen(false);
      console.log("web socket  connection destroyed ");
    },
    shouldReconnect: (closeEvent) => true,
  });
  useEffect(() => {
    if (lastMessage !== null) {
      const obj = JSON.parse(lastMessage.data);
      //later make it generealized message and messanger for all the chats question asnwers comments
      setMessageHistory((prev) =>
        prev.concat({ commentor: obj.messanger, comment: obj.message })
      );
    }
  }, [lastMessage, setMessageHistory]);
  const handleSubmit = async (values) => {
    sendJsonMessage(values);
  };
  const getUserMedia = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          setLocalStream(stream);
          localVideoRef.current.srcObject = stream;
        })
        .catch((error) => console.error(error));
    } else {
      console.error("Your browser does not support getUserMedia API");
    }
  };
  const stopUserMedia = () => {
    let tracks = localStream.getTracks();
    console.log("tracks", tracks);
    tracks.forEach((track) => track.stop());
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
        <Center h="600" w="full" bg="gray.800">
          <video
            ref={localVideoRef}
            autoPlay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Center>
        <Button
          onClick={getUserMedia}
          type="submit"
          backgroundColor="primary.900"
          color="text.900"
          width={["70%", "50%", "40%"]}
          px={6}
          _hover={{ backgroundColor: "primary.600" }}
        >
          Get User Media
        </Button>
        <Button
          onClick={stopUserMedia}
          type="submit"
          backgroundColor="primary.900"
          color="text.900"
          width={["70%", "50%", "40%"]}
          px={6}
          _hover={{ backgroundColor: "primary.600" }}
        >
          Stop User Media
        </Button>
        <Button
          onClick={() => {
            sendMessage("hey useWebSocket hook is working ");
          }}
          type="submit"
          backgroundColor="primary.900"
          color="text.900"
          width={["70%", "50%", "40%"]}
          px={6}
          _hover={{ backgroundColor: "primary.600" }}
        >
          Send Message
        </Button>
      </VStack>

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
            Live chat
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack w="full" alignItems="start" pt={5} spacing={5}>
              <Text fontSize={"3xl"} color={"text.900"}>
                For use of Start Stream
              </Text>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack alignItems="left" w="full" sapcing={2}>
              <Formik
                style={{ width: "100%" }}
                initialValues={{
                  messanger: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  message: Yup.string().required("Required"),
                  messanger: Yup.string().required("Required"),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                  console.log(values);
                  await handleSubmit(values);
                }}
              >
                <Form style={{ width: "100%" }}>
                  <VStack spacing={3} w="full" alignItems={"center"}>
                    <MyTextInput
                      label="
                         Ghost  User Name "
                      type="text"
                      id="messanger"
                      name="messanger"
                    />
                    <MyTextArea
                      label="
                      Message"
                      type="text"
                      id="message"
                      name="message"
                    />

                    <Button
                      type="submit"
                      backgroundColor="primary.900"
                      color="text.900"
                      px={6}
                      _hover={{ backgroundColor: "primary.600" }}
                    >
                      Send
                    </Button>
                  </VStack>
                </Form>
              </Formik>
            </VStack>
            <QuestionAndAnswer comments={messageHistory} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default memo(StartStream);
