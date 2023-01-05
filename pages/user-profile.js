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
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, memo } from "react";
import ToastBox from "../components/others/ToastBox";

function UserProfile() {
  const toast = useToast();
  console.log("the user profile component");
  const [user, setUser] = useState("");
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const [data, setData] = useState("");
  useEffect(() => {
    async function getUserProfile() {
      try {
        const token = await localStorage.getItem("token");
        if (!token) throw new Error("Session expired");
        let response = await fetch(`http://localhost:4000/user/user-profile`, {
          method: "POST",
          body: JSON.stringify({ token: token }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        response = await response.json();
        setUser(response.data.email);
        if (response.isError) {
          throw new Error(response.isError);
        }
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => (
            <ToastBox message={response.message} isError={response.isError} />
          ),
        });
        if (!isImageLoaded)
          fetch("http://localhost:4000/user/image", {
            method: "POST",
            body: JSON.stringify({ token: token }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.blob())
            .then((blob) => {
              setImage(URL.createObjectURL(blob));
              setIsImageLoaded(true);
            });
      } catch (error) {
        toast({
          position: "bottom-left",
          duration: 4000,
          render: () => <ToastBox message={"Session expired"} isError={true} />,
        });
        router.push("/");
      }
    }
    let result = getUserProfile();
    //fetchFile();

    console.log("out of the await function and in useeffect");
  }, []);
  async function fetchFile() {
    fetch("http://localhost:4000/course/file-stream")
      .then((response) => response.body)
      .then((body) => {
        const decoder = new TextDecoder();
        const writer = new WritableStream({
          write(chunk) {
            setData((prevData) => prevData + decoder.decode(chunk));
          },
        });
        body.pipeTo(writer);
      });
  }

  return (
    <VStack bg="gray.50" align="center" justify="center" h="90vh" w="100%">
      <Text fontSize={"6xl"}>User Profile page</Text>
      <Text textAlign={"center"} fontSize={"2xl"} w={["60%", "70%", "100%"]}>
        You will see this page only when you are logged in and have valid
        session dd
      </Text>
      <Text fontSize={"xl"}>User email is: {user}</Text>
      <Text fontSize={"2xl"}>User data reading file is: {data}</Text>
      <Center w="300" h="300" rounded={"full"}>
        <Image
          boxSize="300px"
          rounded={"full"}
          objectFit="fill"
          src={image}
          alt="My Image"
        />
      </Center>
    </VStack>
  );
}

export default memo(UserProfile);
