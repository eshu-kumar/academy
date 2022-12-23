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
  console.log("the user profile compoentn");
  const [user, setUser] = useState("");
  const router = useRouter();
  // useEffect(() => {
  //   console.log("in the use effect");

  //   async function getUserProfile() {
  //     try {
  //       const token = await localStorage.getItem("token");
  //       if (token) {
  //         let response = await fetch(`http://localhost:4000/user-profile`, {
  //           method: "POST",
  //           body: JSON.stringify({ token: token }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         response = await response.json();
  //         if (response.isError) {
  //           throw new Error(response.isError);
  //         }
  //         toast({
  //           position: "bottom-left",
  //           duration: 4000,
  //           render: () => (
  //             <ToastBox message={response.message} isError={response.isError} />
  //           ),
  //         });
  //       } else {
  //         throw new Error("session expired ");
  //       }
  //     } catch (error) {
  //       toast({
  //         position: "bottom-left",
  //         duration: 4000,
  //         render: () => <ToastBox message={"session expired"} isError={true} />,
  //       });
  //       router.push("/");
  //     }
  //   }
  //   let result = getUserProfile();

  //   console.log("out of the await function and in useeffect");
  // }, []);
  const [image, setImage] = useState(null);
  const [data, setData] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    if (!isImageLoaded)
      fetch("http://localhost:4000/image")
        .then((response) => response.blob())
        .then((blob) => {
          setImage(URL.createObjectURL(blob));
          setIsImageLoaded(true);
        });

    //reading the big file from node express server
    fetch("http://localhost:4000/file-stream")
      .then((response) => response.body)
      .then((body) => {
        const decoder = new TextDecoder();

        const writer = new WritableStream({
          write(chunk) {
            console.log("chunk is ");
            console.log(decoder.decode(chunk));
            setData((prevData) => prevData + decoder.decode(chunk));
          },
        });

        body.pipeTo(writer);
      });
  }, []);
  console.log("data is ", data);
  return (
    <VStack bg="gray.50" align="center" justify="center" h="90vh" w="100%">
      <Text fontSize={"6xl"}>User Profile page</Text>
      <Text fontSize={"2xl"}>
        You will see this page only when you are logged in and have valid
        session dd
      </Text>
      <Text fontSize={"2xl"}>User email is: {user}</Text>
      <Text fontSize={"2xl"}>User email is: {data}</Text>
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
