// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    900: "#e32551",
    800: "#153e75",
    700: "#2a69ac",
    600: "#de3163",
  },
  background: {
    900: "#000000",
    700: "#1A1C21",
  },
  text: {
    900: "#FFFFFF",
  },
  hover: {
    900: "#f60057",
  },
  border: {},
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
