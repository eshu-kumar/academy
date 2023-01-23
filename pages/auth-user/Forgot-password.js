import { Box, Button, Flex, VStack, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../../components/FormGrocery';

export default function ForgotPassword(props) {
  return (
    <VStack
      w='full'
      backgroundColor='background.900'
      minH='70vh'
      align='center'
      justify='center'
    >
      <Text fontSize='lg' fontWeight='bold' color='text.900'>
        Reset Your Password
      </Text>
      <Box
        borderColor='whiteAlpha.400'
        borderWidth={1}
        p={[6, 8, 10]}
        mx={2}
        minW={[300, 400, 400]}
        rounded='md'
      >
        <VStack w='full' alignItems='left'>
          <Formik
            style={{ width: '100%' }}
            initialValues={{
              password: '',
              confirmpassword: '',
              rememberMe: false,
            }}
            validationSchema={Yup.object({
              password: Yup.string()
                .min(6, 'Must be greater than 6 characters')
                .required('Required'),
              confirmpassword: Yup.string()
                .min(6, 'Must be greater than 6 characters')
                .required('Required'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values);
              await handleLogin(values);
            }}
          >
            <Form style={{ width: '100%' }}>
              <VStack spacing={3} w='full' alignItems={'center'}>
                <MyTextInput
                  label='Password'
                  id='password'
                  name='password'
                  type='password'
                />
                <MyTextInput
                  label='Confirm Password'
                  id='confirmpassword'
                  name='confirmpassword'
                  type='password'
                />
                <Button
                  type='submit'
                  backgroundColor='primary.900'
                  color='text.900'
                  px={6}
                  _hover={{ backgroundColor: 'primary.600' }}
                  //   onClick={ REDIRECT BACK TO LOGIN PAGE}
                >
                  Save
                </Button>
              </VStack>
            </Form>
          </Formik>
        </VStack>
      </Box>
    </VStack>
  );
}
