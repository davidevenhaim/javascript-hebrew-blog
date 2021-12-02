import Head from "next/head";

import PostContent from "../../components/posts/post-details/post-content";

import { getPostData, getPostsFiles, getNextPost } from "../../lib/posts-util";

function PostDetailPage({ post, nextPostSlug }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post} nextPostSlug={nextPostSlug} />
    </>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const curPost = getPostData(slug);
  const nextPostSlug = getNextPost(slug);

  return {
    props: {
      post: curPost,
      nextPostSlug: nextPostSlug,
    },
    revalidate: 6000,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((post) => post.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
