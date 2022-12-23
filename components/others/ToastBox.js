import React from "react";
import { Box } from "@chakra-ui/react";
export default function ToastBox(props) {
  return (
    <Box
      borderRadius={4}
      color="white"
      p={3}
      bg={props.isError ? "red.400" : "blue.400"}
    >
      {props.message}
    </Box>
  );
}
