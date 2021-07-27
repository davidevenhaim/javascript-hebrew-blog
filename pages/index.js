import Head from "next/head";

import AllPosts from "../components/home-page/all-posts";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts, getAllPosts } from "../lib/posts-util";

function HomePage({ allPosts, featuresPosts }) {
  return (
    <>
      <Head>
        <title>Javascript Blog - From Zero to Hero</title>
        <meta name="description" content="בלוג בעברית על ג׳אוה סקריפט" />
        <meta property="og:title" content="Javascript - From Zero to Hero" />
        <meta
          property="og:url"
          content="https://my-blog-next-js-delta.vercel.app/"
        />
        <meta property="og:description" content="Javascript Blog" />
        <meta property="og:image" content="/images/siteicon" />
        <link rel="icon" herf="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuresPosts} />
      <AllPosts posts={allPosts} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      allPosts: getAllPosts(),
      featuresPosts: getFeaturedPosts(),
    },
    revalidate: 6000,
  };
}

export default HomePage;
