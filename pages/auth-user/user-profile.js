import { Button, VStack, Text, Center, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";

function UserProfile() {
  console.log("the user profile component");
  const router = useRouter();
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
      router.push("/");
    }
  }, [userObj, userError]);

  return (
    <VStack
      backgroundColor="background.900"
      align="center"
      justify="center"
      minH="80vh"
      w="100%"
    >
      <Center w="300" h="300" rounded={"full"}>
        <Image
          boxSize="300px"
          rounded={"full"}
          objectFit="fill"
          src={imgObj ? URL.createObjectURL(imgObj) : null}
          alt="My Image"
        />
      </Center>
      <Text color="text.900" fontSize={"xl"}>
        {userObj && userObj.data ? userObj.data.email : ""}
      </Text>
      {/* <Button
        onClick={() => {
          //this was for testing that state variables reamin same while swr variable changes and re renders their part
          //it means chnaging or refreshing data by mutate function of swr function chnages swr state variable and dependent
          //ui of swr state variable not other things
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
      </Button> */}
    </VStack>
  );
}

export default UserProfile;
