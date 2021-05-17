import Image from "next/image";

import classes from "./post-header.module.css";

function PostHeader({ image, title }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image alt={title} height={200} src={image} width={150} />
    </header>
  );
}

export default PostHeader;
