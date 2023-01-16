import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
  Text,
  Button,
  Lorem,
  Center,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export default function FullPageLoader({ isOpen, onOpen, onClose, status }) {
  return (
    <Modal size="full" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody bg="background.900" color="white">
          <Center w="full" h="85vh">
            <VStack spacing={4}>
              <Spinner size="xl" color="blue.500" />
              <Text>{status}</Text>
            </VStack>
          </Center>
        </ModalBody>
        {/* 
        <ModalFooter bg="red.600" w="full" h="15vh">
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
