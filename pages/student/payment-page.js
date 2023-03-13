import {
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Select,
  Input,
  Box,
  Divider,
  CheckIcon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { AiOutlineCheck } from "react-icons/ai";
const list = [
  {
    icon: "AiOutlineCheck",
    text: "Access to over 8,000 of our top courses in tech, business, and more",
  },
  {
    icon: "AiOutlineCheck",
    text: "Hands-on learning experiences to build your skills",
  },
  {
    icon: "AiOutlineCheck",
    text: "Course recommendations to help you start learning faster",
  },
];

export default function PaymentPage(props) {
  const router = useRouter();
  return (
    <VStack
      minH={"100vh"}
      w="full"
      bg="background.900"
      py={5}
      spacing={5}
      px={10}
      alignItems="left"
    >
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="3xl"
        textDecoration="underline"
        textDecorationColor="primary.900"
      >
        Checkout
      </Text>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="xl"
        textDecoration="underline"
        textDecorationColor="primary.900"
      >
        Your order
      </Text>
      <HStack alignItems="center" justifyContent="space-between">
        <Text color="text.900" fontWeight="bold" fontSize="lg">
          Name of the Course
        </Text>
        <Text color="text.900" fontWeight="bold" fontSize="md">
          $829
        </Text>
      </HStack>
      <Text color="text.900" fontWeight="normal" fontSize="md">
        New opportunities await. Just one more step to get all this and more
      </Text>

      {list.map((item, index) => {
        return (
          <HStack alignItems="center" justifyContent="center" key={index}>
            <Icon as={CheckIcon} color="text.900"></Icon>
            <Text color="text.900" fontWeight="normal" fontSize="md">
              {item.text}
            </Text>
          </HStack>
        );
      })}
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="2xl"
        textDecoration="underline"
        textDecorationColor="primary.900"
      >
        Billing Address
      </Text>
      <HStack alignItems="center" justifyContent="space-between">
        <VStack>
          <Text color="text.900" fontWeight="normal" fontSize="md">
            Country
          </Text>
          <Select
            placeholder="India"
            color="text.900"
            size="md"
            variant="outline"
            borderColor="primary.900"
            _hover={{ borderColor: "primary.900" }}
          >
            <option value="option1">India</option>
            <option value="option2">Some Country</option>
          </Select>
        </VStack>
        <VStack>
          <Text color="text.900" fontWeight="normal" fontSize="md">
            State / Union Territory
          </Text>
          <Select
            placeholder="Select option"
            color="text.900"
            size="md"
            variant="outline"
            borderColor="primary.900"
            _hover={{ borderColor: "primary.900" }}
          >
            <option value="option1">Karnataka</option>
            <option value="option2">Bangalore</option>
            <option value="option3">GeekyAnts</option>
          </Select>
        </VStack>
      </HStack>
      <Text
        color="text.900"
        fontWeight="bold"
        fontSize="2xl"
        textDecoration="underline"
        textDecorationColor="primary.900"
      >
        Payment Method
      </Text>
      <Box
        borderColor="primary.900"
        width="70%"
        borderRadius="lg"
        borderWidth={1}
        p={8}
      >
        <HStack alignItems="center">
          <Icon />
          <Text
            color="text.900"
            fontWeight="normal"
            fontSize="md"
            borderRadius="lg"
          >
            New Card Payment
          </Text>
        </HStack>
        <Formik>
          <Form>
            <Input
              mt={5}
              placeholder="Name on Card"
              _placeholder={{ color: "gray.500" }}
              type="text"
              color="text.900"
              required
            />
            {/* <MyTextInput label="Email" id="email" name="email" type="email" /> */}
            <Input
              mt={5}
              placeholder="Card Number"
              _placeholder={{ color: "gray.500" }}
              type="text"
              required
              color="text.900"
            />
            {/* <MyTextInput label="Email" id="email" name="email" type="email" /> */}
            <HStack
              alignItems="center"
              justifyContent="center"
              mt={5}
              spacing={5}
            >
              <Input
                placeholder="Expiration date"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
              <Input
                placeholder="Security Code"
                _placeholder={{ color: "gray.500" }}
                type="password"
              />
            </HStack>
          </Form>
        </Formik>
      </Box>
      <Box pt={5}>
        <Text
          color="text.900"
          fontWeight="bold"
          fontSize="2xl"
          textDecoration="underline"
          textDecorationColor="primary.900"
        >
          Summary
        </Text>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          spacing={20}
          pt={5}
        >
          <Text color="text.900" fontWeight="normal" fontSize="md">
            Name of the Course
          </Text>
          <Text color="text.900" fontWeight="normal" fontSize="md">
            Price of the course
          </Text>
        </HStack>
        <Divider width="100%" color="primary.900" pt={3} />
        <Button
          bg="primary.900"
          color="text.900"
          width={["100%", "80%", "100%"]}
          mt={10}
          _hover={{ backgroundColor: "primary.600" }}
          onClick={() => router.push("/student/my-learnings")}
        >
          Buy Course
        </Button>
      </Box>
    </VStack>
  );
}
