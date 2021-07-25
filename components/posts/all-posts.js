import PostsGrid from "./posts-grid";

import classes from "./all-posts.module.css";

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>כל הפוסטים</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
