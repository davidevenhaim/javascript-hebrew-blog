import Image from "next/image";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";
import routes from "../../routes";

function PostContent({ post }) {
  const imagePath = `${routes.IMAGES}/${post.slug}/${post.image}`;

  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "element") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              alt={image.alt}
              src={`${routes.IMAGES}/${post.slug}/${image.properties.src}`}
              height={300}
              width={600}
            />
          </div>
        );
      } else {
        return <p>{paragraph.children}</p>;
      }
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <h5>כותב: {post.author}</h5>
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
