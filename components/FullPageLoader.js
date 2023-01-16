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
  useDisclosure,
} from "@chakra-ui/react";

export default function FullPageLoader({ isLoading, status }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal size="full" position="absolute" top="0" left="0" isOpen={isLoading}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Spinner size="xl" color="blue.500" />
          <Text mt={4}>{status}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
