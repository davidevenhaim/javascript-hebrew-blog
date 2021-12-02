import Head from "next/head";

import AllPosts from "../components/home-page/all-posts";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts, getAllPosts } from "../lib/posts-util";

function HomePage({ allPosts, featuresPosts }) {
  return (
    <>
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
