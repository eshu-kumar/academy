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

import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Formik, Form } from "formik";
import * as Yup from "yup";

chakra(ReactPlayer);
function ViewStream(props) {
  let uri = `https://www.youtube.com/watch?v=hQAHSlTtcmY`;

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
            View Stream
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack w="full" alignItems="start" pt={5} spacing={5}>
              <Text fontSize={"3xl"} color={"text.900"}>
                For use of View stream
              </Text>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default memo(ViewStream);
