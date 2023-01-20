import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { authStore } from '../../store/authStore';
import { loaderStore } from '../../store/loaderStore';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState, memo } from 'react';
import FullPageLoader from '../FullPageLoader';
export default function Layout(props) {
  const router = useRouter();
  const auth = authStore();
  const loader = loaderStore();
  const url = router.asPath;
  const publicPaths = [
    '/auth-user/login',
    '/',
    '/auth-user/signup',
    '/experiments/ex-graphql',
  ];
  const path = url.split('?')[0];
  const isPublicPath = publicPaths.includes(path);
  useEffect(() => {
    console.log('auth store ', auth);
    async function fetchDataWrapper() {
      await auth.fetchData();
    }
    fetchDataWrapper();
  }, []);
  if (!isPublicPath && auth.isDone && !auth.isAuthenticated) {
    console.log('auth store in fetch data wrapper', auth);
    console.log('loaderstore', loader);
    router.push('/auth-user/login');
  }
  return (
    <Flex w='full' direction='column' minH='100vh'>
      <Header />
      {auth.isAuthenticated || isPublicPath ? (
        <Flex>{props.children}</Flex>
      ) : (
        <FullPageLoader isOpen={true} status={'Authenticating...'} />
      )}
      <FullPageLoader isOpen={loader.isLoading} status={loader.status} />
      <Footer />
    </Flex>
  );
}
