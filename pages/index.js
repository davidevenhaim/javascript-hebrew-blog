import { Fragment } from "react";
import Head from "next/head";

import AllPosts from "../components/home-page/all-posts";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts, getAllPosts } from "../lib/posts-util";

function HomePage({ allPosts, featuresPosts }) {
  return (
    <Fragment>
      <Head>
        <title>Javascript Blog - From Zero to Hero</title>
        <link rel="icon" herf="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuresPosts} />
      <AllPosts posts={allPosts} />
    </Fragment>
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
