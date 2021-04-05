import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

// apollo
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

import "../styles/styles.scss";

//components import
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AnimateSharedLayout type="crossfade">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="pinterest" content="nopin" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <Header />
        <Navigation />

        <Component {...pageProps} />

        <Footer />
      </AnimateSharedLayout>
    </ApolloProvider>
  );
}

export default MyApp;
