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
        <Image
          src="http://euro-travel-example.com/thumbnail.jpg"
          height="500px"
          width="500px"
        />
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://my-blog-next-js-6frghu2mw-ziteix.vercel.app"
        />
        {/* <meta property="og:image" content="/images/siteicon" /> */}
        <link rel="icon" herf="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
