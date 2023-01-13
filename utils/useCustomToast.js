import { useToast } from "@chakra-ui/react";

export function useCustomToast() {
  const toast = useToast();

  function showToast(isError, message) {
    toast({
      title: message,
      status: !isError ? "success" : "error",
      duration: 9000,
      isClosable: true,
    });
  }

  return { showToast };
}
