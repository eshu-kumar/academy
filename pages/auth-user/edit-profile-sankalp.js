import { Box, Button, VStack, Avatar, Text, HStack } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput } from '../../components/FormGrocery';

export default function EditProfilePage(props) {
  function handleChange() {
    console.log('click to change avatar');
  }
  return (
    <VStack
      flex={1}
      backgroundColor='background.900'
      minH='70vh'
      width='full'
      align='center'
      justify='center'
    >
      <VStack space={2} pt={5}>
        <Text fontSize='lg' fontWeight='bold' color='text.900' textAlign='left'>
          Edit Profile
        </Text>
        <Box
          borderColor='whiteAlpha.400'
          borderWidth={1}
          p={[6, 8, 10]}
          mx={2}
          minW={[300, 400, 400]}
          flex={1}
          rounded='md'
        >
          <Avatar
            name='Dan Abrahmov'
            src='https://bit.ly/dan-abramov'
            onClick={handleChange}
            size='xl'
          />
          <VStack w='full' alignItems='left'>
            <Formik
              style={{ width: '100%' }}
              initialValues={{
                password: '',
                cpassword: '',
                name: '',
                about: '',
                rememberMe: false,
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(3, 'Must be greater than 3 characters')
                  .required('Required'),
                profession: Yup.string()
                  //   .min(3, 'Must be greater than 3 characters')
                  .required('Required'),
                about: Yup.string()
                  .min(10, 'Must be greater than 10 characters')
                  .required('Required'),

                password: Yup.string()
                  .min(6, 'Must be greater than 6 characters')
                  .required('Required'),
                cpassword: Yup.string()
                  .min(6, 'Must be greater than 6 characters')
                  .required('Required'),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                // await handleLogin(values);
              }}
            >
              <Form style={{ width: '100%' }}>
                <VStack spacing={3} w='full' alignItems={'center'}>
                  <MyTextInput label='Name' id='name' name='name' type='text' />
                  <MyTextInput
                    label='Profession'
                    id='profession'
                    name='profession'
                    type='text'
                  />
                  <HStack alignItems='center' spacing={3}>
                    <MyTextInput
                      label='Password'
                      id='password'
                      name='password'
                      type='password'
                    />
                    <MyTextInput
                      label='Confirm Password'
                      id='cpassword'
                      name='cpassword'
                      type='password'
                    />
                  </HStack>
                  <MyTextInput
                    label='About'
                    id='about'
                    name='about'
                    type='text'
                  />

                  <Button
                    type='submit'
                    backgroundColor='primary.900'
                    color='text.900'
                    px={6}
                    _hover={{ backgroundColor: 'primary.600' }}
                  >
                    Save Changes
                  </Button>
                </VStack>
              </Form>
            </Formik>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}
