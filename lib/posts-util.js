import fs from "fs";
import path from "path";
import routes from "../components/routes";
import matter from "gray-matter";

const iconsDirectory = path.join(process.cwd() + routes.ICONS + "/");
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
    ...data
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();

  const allPosts = postsFiles.map(post => {
    return getPostData(post);
  });
  const sortedPosts = allPosts.sort(
    (postA, postB) =>
      postA.image.split("-")[1] < postB.image.split("-")[1] ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}

export function getNextPost(slug) {
  let nextPostSlug, nextPostNumber;
  const number = slug.split("-")[1];

  if (!isNaN(number)) {
    nextPostNumber = parseInt(number) + 1; // getting the next post.
  }
  const postsFiles = getPostsFiles();
  nextPostSlug = postsFiles.find(post => {
    const postNumber = post.split("-")[1];
    if (!isNaN(postNumber)) {
      return parseInt(postNumber) === nextPostNumber;
    }
  });

  if (!nextPostSlug) {
    return "finished";
  }

  return nextPostSlug.replace(/\.md$/, ""); // removes file extension. (.md)
}

export function getIconsFileNames() {
  return fs.readdirSync(postsDirectory);
}
