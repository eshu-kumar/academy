import { Tooltip, Button } from "@chakra-ui/react";

export default function MyTooltip(props) {
  return (
    <Tooltip
      label={props.message}
      bg="black"
      color="white"
      fontSize="sm"
      placement="top"
    >
      {props.children}
    </Tooltip>
  );
}
