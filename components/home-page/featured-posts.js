import PostsGrid from "../posts/posts-grid";

import classes from "./featured-posts.module.css";

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>הפוסטים המובחרים</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
