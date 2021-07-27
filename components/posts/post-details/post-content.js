import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

import classes from "./post-content.module.css";
import routes from "../../routes";

SyntaxHighlighter.registerLanguage("js", js);

function PostContent({ post, nextPostSlug }) {
  const nextPostPath = `${routes.POSTS}/${nextPostSlug}`;

  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const imageSrc = `${routes.IMAGES}/${post.slug}/${image.properties.src}`;
        return (
          <div className={classes.image}>
            <Image
              alt={image.alt}
              src={imageSrc}
              height={300}
              width={300}
              layout="responsive"
            />
          </div>
        );
      } else if (node.children[0].tagName === "a") {
        const { properties, children } = node.children[0];
        return (
          <Link href={properties.href}>
            <a target="_blank">{children[0].value}</a>
          </Link>
        );
      } else {
        return <p>{paragraph.children}</p>;
      }
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <div>
          <SyntaxHighlighter
            language={language}
            children={children}
            style={atomDark}
          />
        </div>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} />
      <h5>
        כותב: {post.author} || זמן קריאה: {post.time} דקות
      </h5>
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
      <div>
        {nextPostSlug !== "finished" ? (
          <Link href={nextPostPath}>המשך לפוסט הבא</Link>
        ) : (
          <h5>:( כרגע, אין עוד פוסטים בנושא</h5>
        )}
      </div>
    </article>
  );
}

export default PostContent;
