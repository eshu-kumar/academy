import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";

export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Input {...field} {...props} />
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
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Textarea size="lg" {...field} {...props} />
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
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Select {...field} {...props} />
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
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Input {...field} {...props} />
      <FormErrorMessage>Please select file</FormErrorMessage>
    </FormControl>
  );
};
