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
import cookie from "cookie";
import useSWRImmutable from "swr/immutable";

function UserProfile() {
  const toast = useToast();
  console.log("the user profile component");
  const router = useRouter();
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const fetcher = async (url) => {
    const token = await localStorage.getItem("token");
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({ token: token }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (url === `http://localhost:4000/user/image`) return r.blob();
      else return r.json();
    });
  };
  const {
    data: userObj,
    error: userError,
    mutate: mutateUser,
  } = useSWRImmutable(`http://localhost:4000/user/user-profile`, fetcher, {
    refreshInterval: false,
  });
  console.log(userObj, userError, !userObj);
  console.log("count is ", count);
  const {
    data: imgObj,
    error: imgError,
    mutate: mutateImg,
  } = useSWRImmutable("http://localhost:4000/user/image", fetcher, {
    refreshInterval: false,
  });
  console.log(imgObj, imgError, !imgObj);

  useEffect(() => {
    if (userError) {
      // toast({
      //   position: "bottom-left",
      //   duration: 4000,
      //   render: () => <ToastBox message={userError} isError={true} />,
      // });
      router.push("/");
    }
  }, [userObj, userError]);

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
    <VStack bg="gray.50" align="center" justify="center" minH="100vh" w="100%">
      <Text fontSize={"6xl"}>User Profile page</Text>
      <Text textAlign={"center"} fontSize={"2xl"} w={["60%", "70%", "100%"]}>
        You will see this page only when you are logged in and have valid
        session dd
      </Text>
      <Text fontSize={"xl"}>
        User email is: {userObj && userObj.data ? userObj.data.email : ""}
      </Text>
      {/* <Text fontSize={"2xl"}>User data reading file is: {data}</Text> */}
      <Center w="300" h="300" rounded={"full"}>
        <Image
          boxSize="300px"
          rounded={"full"}
          objectFit="fill"
          src={imgObj ? URL.createObjectURL(imgObj) : null}
          alt="My Image"
        />
      </Center>
      <Button
        onClick={() => {
          console.log("incrementing count ");
          setCount((count) => {
            return count + 1;
          });
        }}
      >
        {" "}
        Increment count{" "}
      </Button>
      <Button
        onClick={() => {
          mutateUser();
        }}
      >
        {" "}
        Refresh{" "}
      </Button>
    </VStack>
  );
}

// export async function getServerSideProps(context) {
//   const cookies = cookie.parse(context.req.headers.cookie || "");
//   console.log("cookies at server", cookies);
//   // Extract the token from the cookies
//   const token = cookies.token ? cookies.token : null;
//   console.log("token is ", token);
//   if (!token) {
//     // Redirect the user to the login page
//     context.res.writeHead(302, {
//       Location: "/login",
//     });
//     context.res.end();
//   }

//   return {
//     props: {
//       token,
//     },
//   };
// }
export default UserProfile;
