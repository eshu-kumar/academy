import { useRef } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Select,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";

export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel color="text.900" htmlFor={props.id || props.name}>
        {label}
      </FormLabel>
      <Input
        {...field}
        {...props}
        size="lg"
        color="text.900"
        backgroundColor="background.700"
        borderColor="whiteAlpha.600"
        _hover={{ borderColor: "whiteAlpha.600" }}
        _focus={{
          borderColor: "whiteAlpha.600",
        }}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel color="text.900" htmlFor={props.id || props.name}>
        {label}
      </FormLabel>

      <Textarea
        size="lg"
        {...field}
        {...props}
        color="text.900"
        backgroundColor="background.700"
        borderColor="whiteAlpha.600"
        _hover={{ borderColor: "whiteAlpha.600" }}
        _focus={{
          borderColor: "whiteAlpha.600",
        }}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <Checkbox {...field} {...props}>
        {children}
      </Checkbox>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel color="text.900" htmlFor={props.id || props.name}>
        {label}
      </FormLabel>
      <Select
        size="lg"
        color="text.900"
        backgroundColor="background.700"
        borderColor="whiteAlpha.600"
        _hover={{ borderColor: "whiteAlpha.600" }}
        _focus={{
          borderColor: "whiteAlpha.600",
        }}
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export const MyFileInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && !props.file}>
      <FormLabel color="text.900" htmlFor={props.id || props.name}>
        {label}
      </FormLabel>
      <Input
        size="lg"
        color="text.900"
        backgroundColor="background.700"
        borderColor="whiteAlpha.600"
        _hover={{ borderColor: "whiteAlpha.600" }}
        _focus={{
          borderColor: "whiteAlpha.600",
        }}
        {...field}
        {...props}
      />
      <FormErrorMessage>Please select file</FormErrorMessage>
    </FormControl>
  );
};
// export const MyFileInput = ({ label, ...props }) => {
//   const inputRef = useRef();
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input>. We can use field meta to show an error
//   // message if the field is invalid and it has been touched (i.e. visited)
//   const [field, meta] = useField(props);
//   return (
//     <FormControl isInvalid={meta.touched && !props.file}>
//       <FormLabel color="text.900" htmlFor={props.id || props.name}>
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon
//             style={{
//               color: "white",
//               w: "40px",
//               h: "40px",
//             }}
//             as={FiFile}
//           />
//         </InputLeftElement>
//         <input ref={inputRef} {...props} style={{ display: "none" }}></input>
//         <Input
//           onClick={() => inputRef.current.click()}
//           size="lg"
//           color="text.900"
//           backgroundColor="background.700"
//           borderColor="whiteAlpha.600"
//           _hover={{ borderColor: "whiteAlpha.600" }}
//           _focus={{
//             color: "text.900",
//             borderColor: "whiteAlpha.600",
//           }}
//         />
//       </InputGroup>

//       <FormErrorMessage>Please select file</FormErrorMessage>
//     </FormControl>
//   );
// };
