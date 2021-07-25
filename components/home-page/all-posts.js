import PostsGrid from "../posts/posts-grid";

import classes from "./all-posts.module.css";

function AllPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>כל הפוסטים</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
