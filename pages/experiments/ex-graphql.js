import { Formik, Field } from "formik";
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
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ToastBox from "../../components/others/ToastBox";

export default function ExGraphql() {
  //run graph ql server before using the graph ql services or using this page
  const toast = useToast();
  const router = useRouter();
  async function handleSignUp(values) {
    let gquery, variables;
    //comment all the below gquery definitions and this input value will work if the value is there in input
    gquery = values.gquery.replace(/[\r\n]/gm, "");

    //QUERY FROM INPUT FOR VARYING FIELD NAMES
    //gquery example if you want to use it from textarea input uncomment and  paste below string in input

    // {
    //   getFriends {
    //    firstName,
    //    lastName
    //   }
    //   }

    //ADDSERIES QUERY

    // gquery = `mutation addSeries($series: SeriesInput) {
    //     addSeries(series:$series) {
    //       seriesName ,
    //       year ,
    //       rating
    //       }

    // }
    //  `;
    // variables = {
    //   series: {
    //     seriesName: "House of dragon",
    //     year: 2022,
    //     rating: "ONE",
    //   },
    // };

    //ADDFRIEND QUERY

    // gquery = ` mutation addFriend($friend: FriendInput) {
    //     addFriend(friend:$friend) {
    //         firstName
    //         lastName
    //        age
    //       }

    // }
    // `;
    // variables = {
    //   friend: {
    //     firstName: "Eliot",
    //     lastName: "Alderson",
    //     age: 30,
    //   },
    // };

    console.log("gquery is ", gquery);

    const token = await localStorage.getItem("token");
    let response = await fetch(`http://localhost:4000/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        query: gquery,
        // operationName: "addFriend",
        variables,
      }),
    });
    response = await response.json();
    console.log("response OF  graphql request ", response);

    // toast({
    //   position: "bottom-left",
    //   duration: 4000,
    //   render: () => <ToastBox message={response} isError={false} />,
    // });
  }
  return (
    <Flex bg="gray.50" align="center" justify="center" h="90vh" w="100%">
      <VStack space={2}>
        <Text fontSize={"3xl"} color={"gray.700"}>
          All about graphql
        </Text>
        <Box
          bg="white"
          alignItems={"center"}
          px={10}
          py={6}
          rounded="md"
          w={600}
        >
          <Formik
            initialValues={{
              gquery: "",
            }}
            onSubmit={handleSignUp}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.gquery && touched.gquery}>
                    <FormLabel htmlFor="gquery">Graphql query</FormLabel>
                    <Field
                      as={Textarea}
                      id="gquery"
                      name="gquery"
                      type="text"
                      variant="filled"
                      validate={(value) => {
                        let error;
                        if (value.length == 0) {
                          error = " graph ql query must be present ";
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.gquery}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    Send Graphql query
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </VStack>
    </Flex>
  );
}
