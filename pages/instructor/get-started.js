import React from "react";
import {
  Text,
  Button,
  Box,
  HStack,
  Link,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const rewards = [
  {
    primaryText: "Teach your way",
    secondaryText:
      "Publish the course you want, in the way you want, and always have control of your own content.",
  },
  {
    primaryText: "Teach your way",
    secondaryText:
      " Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
  },
  {
    primaryText: "Get rewarded",
    secondaryText:
      " Expand your professional network, build your expertise, and earn money on each paid enrollment.",
  },
];

const facts = [
  {
    number: "57M",
    supportText: "Students",
  },
  {
    number: "75+",
    supportText: "Languages",
  },
  {
    number: "773M",
    supportText: "Enrollments",
  },
  {
    number: "180+",
    supportText: "Countries",
  },
  {
    number: "13,400+",
    supportText: "Enterprise customers",
  },
];

export default function GetStarted(props) {
  const router = useRouter();
  return (
    <VStack w="full" backgroundColor="background.900" px={5}>
      <VStack alignItems="left" justifyContent="center" pt={10}>
        <Text
          textAlign={"center"}
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
        >
          Come teach with us
        </Text>
        <Text
          textAlign="center"
          color="text.900"
          fontWeight="normal"
          fontSize="md"
        >
          Become an instructor and change lives — including your own
        </Text>
        <Button
          backgroundColor="primary.900"
          color="text.900"
          width="full"
          _hover={{ backgroundColor: "primary.600" }}
          onClick={() => {
            router.push("../instructor/my-creations");
          }}
        >
          Get Startd
        </Button>
      </VStack>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="3xl"
        textAlign="center"
        pt={10}
      >
        So many reasons to start
      </Text>
      <HStack
        pt={3}
        pb={7}
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        {rewards.map((item, index) => {
          return (
            <VStack key={index}>
              <Text
                color="text.900"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                {item.primaryText}
              </Text>
              <Text
                color="text.900"
                fontWeight="normal"
                fontSize="md"
                textAlign="center"
              >
                {item.secondaryText}
              </Text>
            </VStack>
          );
        })}
      </HStack>

      <HStack
        alignItems="center"
        justifyContent="space-evenly"
        // spacing={[4, 8, 12]}
        width="100%"
        borderColor="primary.900"
        borderWidth={1}
        px={5}
        py={3}
        flexWrap={"wrap"}
      >
        {facts.map((item, index) => {
          return (
            <VStack key={index} alignItems="center">
              <Text color="text.900" fontWeight="bold" fontSize="lg">
                {item.number}
              </Text>
              <Text color="text.900" fontWeight="normal" fontSize="md">
                {item.supportText}
              </Text>
            </VStack>
          );
        })}
      </HStack>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="3xl"
        textAlign="center"
        pt={10}
      >
        How to begin
      </Text>
      <Tabs>
        <TabList justifyContent="center">
          <Tab color="text.900" fontWeight="bold" textAlign="center">
            Plan Your Curriculum
          </Tab>
          <Tab color="text.900" fontWeight="bold" textAlign="center">
            Record Your Video
          </Tab>
          <Tab color="text.900" fontWeight="bold" textAlign="center">
            Launch Yout Couse
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text color="text.900" fontWeight="normal" textAlign="center">
              You start with your passion and knowledge. Then choose a promising
              topic with the help of our Marketplace Insights tool. The way that
              you teach — what you bring to it — is up to you. We offer plenty
              of resources on how to create your first course. And, our
              instructor dashboard and curriculum pages help keep you organized.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="text.900" fontWeight="normal" textAlign="center">
              Use basic tools like a smartphone or a DSLR camera. Add a good
              microphone and you’re ready to start. If you don’t like being on
              camera, just capture your screen. Either way, we recommend two
              hours or more of video for a paid course. Our support team is
              available to help you throughout the process and provide feedback
              on test videos.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="text.900" fontWeight="normal" textAlign="center">
              Gather your first ratings and reviews by promoting your course
              through social media and your professional networks. Your course
              will be discoverable in our marketplace where you earn revenue
              from each paid enrollment. Our custom coupon tool lets you offer
              enrollment incentives while our global promotions drive traffic to
              courses. There’s even more opportunity for courses chosen for
              Udemy Business.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <VStack alignItems="center" justifyContent="center" pt={10}>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="center"
        >
          You won’t have to do it alone
        </Text>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="md"
          textAlign="center"
        >
          Our Instructor Support Team is here to answer your questions and
          review your test video, while our Teaching Center gives you plenty of
          resources to help you through the process. Plus, get the support of
          experienced instructors in our online community.
        </Text>
        <Link
          color="primary.900"
          fontWeight="bold"
          fontSize="lg"
          textAlign="center"
        >
          Need more details before you start? Learn More
        </Link>
      </VStack>
      <VStack alignItems="center" justifyContent="center" py={10}>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
        >
          Become an instructor today
        </Text>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="lg"
          textAlign="center"
        >
          Join one of the world’s largest online learning marketplaces.
        </Text>
        <Button
          backgroundColor="primary.900"
          color="text.900"
          width="full"
          _hover={{ backgroundColor: "primary.600" }}
          onClick={() => {
            router.push("../instructor/my-creations");
          }}
        >
          Get Startd
        </Button>
      </VStack>
    </VStack>
  );
}