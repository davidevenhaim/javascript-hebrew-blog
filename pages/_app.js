import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Javascript Blog - From Zero to Hero</title>
        <meta property="og:description" content="Javascript Blog" />
        <meta property="og:title" content="Javascript - From Zero to Hero" />
        <link rel="icon" herf="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
