import { Box, Button, Flex, Center, HStack, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import Sidebar from "../../components/layouts/Sidebar";

export default function SidebarPage() {
  let uri = `https://www.youtube.com/watch?v=hQAHSlTtcmY`;
  return (
    <VStack
      w="full"
      backgroundColor="background.900"
      minH="70vh"
      align="center"
      justify="center"
    >
      <HStack>
        {/* <Box h="600" w="100%" bg="whiteAlpha.800"> */}
        <ReactPlayer width="100%" height="100%" controls url={uri} />
        {/* </Box> */}
        <Sidebar />
      </HStack>
    </VStack>
  );
}
