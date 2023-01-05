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
  Center,
  HStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import ImageUploading from "react-images-uploading";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, memo, useRef } from "react";
import ToastBox from "../components/others/ToastBox";
import FormData from "form-data";
function Uploader() {
  console.log("in the uploader");
  const toast = useToast();
  const fileInput = useRef(null);
  const [user, setUser] = useState("");
  const router = useRouter();
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit this array you can send to server for saving the image files
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <VStack bg="gray.50" align="center" justify="center" h="90vh" w="100%">
      <Text fontSize={"4xl"}>Images Uploader</Text>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <VStack w={"full"} spacing={4}>
            <HStack spacing={10}>
              <Button color={"white"} bg={"blue.400"} onClick={onImageUpload}>
                Click or Drop here
              </Button>
              <Button color={"white"} bg={"red.400"} onClick={onImageRemoveAll}>
                Remove all images
              </Button>
            </HStack>
            <SimpleGrid
              {...dragProps}
              minW="60%"
              columns={4}
              spacing={8}
              bg="gray.100"
              minH="60vh"
              p={4}
              borderRadius="md"
            >
              {imageList.map((image, index) => (
                <VStack
                  key={index}
                  w="100"
                  h="150"
                  spacing={8}
                  className="image-item"
                >
                  <Center w="100" h="100">
                    <Image
                      boxSize="100px"
                      objectFit="fill"
                      src={image["data_url"]}
                      alt="upload img"
                    />
                  </Center>

                  <HStack space={4}>
                    <Button
                      color={"white"}
                      bg={"blue.400"}
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </Button>
                    <Button
                      color={"white"}
                      bg={"red.400"}
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </Button>
                  </HStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </ImageUploading>
    </VStack>
  );
}

export default memo(Uploader);
