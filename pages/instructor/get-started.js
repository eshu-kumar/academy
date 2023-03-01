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
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Reviews from "../../components/Reviews";
const SEO = {
  title: "MY learning page",
  description:
    "Welcome to your learning page here you will see all your active courses that you bought",
  openGraph: {
    title: "MY learning page",
    description:
      "Welcome to your learning page here you will see all your active courses that you bought",
  },
};

const rewards = [
  {
    primaryText: "Teach your way",
    secondaryText:
      "Publish the course you want, in the way you want, and always have control of your own content.",
  },
  {
    primaryText: "Contribute",
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
import { authenticateServerService } from "../../services/authService";
export default function GetStarted(props) {
  const router = useRouter();
  let uri =
    "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  return (
    <>
      <NextSeo {...SEO} />
      <VStack w="full" minH="70vh" backgroundColor="background.900">
        <Image
          w="full"
          h={[250, 360, 400]}
          alt={"get started on academy"}
          src={uri}
        />
        <VStack px={5} alignItems="left" justifyContent="center" pt={4}>
          <Text
            textAlign={"center"}
            color="text.900"
            fontWeight="bold"
            fontSize="3xl"
            textDecoration="underline"
            textDecorationColor="primary.900"
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
            textDecoration="underline"
            textDecorationColor="primary.900"
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
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          So many reasons to start
        </Text>
        <HStack
          pt={3}
          pb={7}
          px={5}
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-evenly"
        >
          {rewards.map((item, index) => {
            return (
              <VStack key={index}>
                <Text
                  color="text.900"
                  fontWeight="bold"
                  fontSize="xl"
                  textAlign="center"
                  textDecoration="underline"
                  textDecorationColor="primary.900"
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
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="center"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          What Other Teachers have to say
        </Text>
        <Reviews isTeacher={true} />

        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="center"
          pt={10}
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          How to begin
        </Text>
        <Tabs px={5}>
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
                You start with your passion and knowledge. Then choose a
                promising topic with the help of our Marketplace Insights tool.
                The way that you teach — what you bring to it — is up to you. We
                offer plenty of resources on how to create your first course.
                And, our instructor dashboard and curriculum pages help keep you
                organized.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text color="text.900" fontWeight="normal" textAlign="center">
                Use basic tools like a smartphone or a DSLR camera. Add a good
                microphone and you’re ready to start. If you don’t like being on
                camera, just capture your screen. Either way, we recommend two
                hours or more of video for a paid course. Our support team is
                available to help you throughout the process and provide
                feedback on test videos.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text color="text.900" fontWeight="normal" textAlign="center">
                Gather your first ratings and reviews by promoting your course
                through social media and your professional networks. Your course
                will be discoverable in our marketplace where you earn revenue
                from each paid enrollment. Our custom coupon tool lets you offer
                enrollment incentives while our global promotions drive traffic
                to courses. There’s even more opportunity for courses chosen for
                Udemy Business.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <VStack px={5} alignItems="center" justifyContent="center" pt={10}>
          <Text
            color="text.900"
            fontWeight="bold"
            fontSize="3xl"
            textAlign="center"
            textDecoration="underline"
            textDecorationColor="primary.900"
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
            review your test video, while our Teaching Center gives you plenty
            of resources to help you through the process. Plus, get the support
            of experienced instructors in our online community.
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
        <VStack px={5} alignItems="center" justifyContent="center" py={10}>
          <Text
            color="text.900"
            fontWeight="bold"
            fontSize="2xl"
            textAlign="center"
            textDecoration="underline"
            textDecorationColor="primary.900"
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
    </>
  );
}
export async function getServerSideProps(context) {
  const user = await authenticateServerService(context.req);
  console.log("user in serversideprops", user);
  if (user.isError) {
    // Redirect to a "not found" page
    return { redirect: { destination: "/auth-user/login", permanent: false } };
  }

  return {
    props: {
      user,
    },
  };
}
