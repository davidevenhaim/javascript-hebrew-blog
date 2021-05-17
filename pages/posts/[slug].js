import PostContent from "../../components/posts/post-details/post-content";

import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { slug } = context.params;

  return {
    props: {
      post: getPostData(slug),
    },
    revalidate: 600,
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
