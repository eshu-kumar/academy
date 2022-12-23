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
import ToastBox from "../components/others/ToastBox";

export default function ExGraphql() {
  const toast = useToast();
  const router = useRouter();
  async function handleSignUp(values) {
    let gquery = values.gquery.replace(/[\r\n]/gm, "");
    //gquery example if you want to yse it from textarea input
    //    gquery=addFriend(friend:$friend) {
    //     firstName
    //     lastName
    //    age
    //   }
    console.log(gquery);
    console.log("gquery is ", gquery);

    let response = await fetch(`http://localhost:4000/graphql`, {
      method: "POST",
      body: JSON.stringify({
        // query: ` mutation addFriend($friend: FriendInput,$series:SeriesInput) {
        //     addFriend(friend:$friend) {
        //         firstName
        //         lastName
        //        age
        //       }
        //       addSeries(series:$series) {
        //         seriesName
        //         year
        //        rating
        //       }
        // }
        // `,
        query: `query {
            getFriends {
                firstName
                lastName
            }
        }`,
        // operationName: "addFriend",
        variables: {
          friend: {
            firstName: "hn",
            lastName: "ow",
            age: 47,
          },
          series: {
            seriesName: "ot",
            year: 2018,
            rating: "TWO",
          },
        },
        token: "this is token to graphql server",
      }),
      headers: {
        Authorization: `Bearer tokenvaluewillcomehere`,
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log("response graphql", response);

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
                      //   as={(value) => {
                      //     return (
                      //       <Textarea
                      //         size="lg"
                      //         h={400}
                      //         w="full"
                      //       />
                      //     );
                      //   }}
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
