// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
// 2. Extend the theme to include custom colors, fonts, etc
//use below color code for black theme
// const colors = {
//   primary: {
//     900: "#e32551",
//     600: "#de3163",
//   },
//   background: {
//     900: "#000000",
//     700: "#1A1C21",
//   },
//   text: {
//     900: "#FFFFFF",
//   },
//   hover: {
//     900: "#f60057",
//   },
// };

//use below color code for white theme
const colors = {
  background: {
    900: "#b9ac92",
  },
  primary: {
    900: "#e32551",
    600: "#de3163",
  },
  text: {
    900: "#ffffff",
  },
  hover: {
    900: "#f60057",
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome To Academy</title>
        <meta property="og:title" content="Welcome To Academy" key="title" />
        <meta
          name="description"
          content="Online Learning Platform online lectures"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,coding,onlineclasses, lecture"
        />
        <meta name="author" content="Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
