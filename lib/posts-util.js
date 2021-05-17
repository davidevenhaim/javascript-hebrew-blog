import fs from "fs";
import path from "path";
import routes from "../components/routes";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd() + routes.POST_CONTENT + "/");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, ""); // removes file extension.
  const filePath = path.join(postsDirectory + `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    content,
    slug,
    ...data,
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();

  const allPosts = postsFiles.map((post) => {
    return getPostData(post);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
