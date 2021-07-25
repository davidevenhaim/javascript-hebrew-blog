import Image from "next/image";

import classes from "./post-header.module.css";

function PostHeader({ title }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  );
}

export default PostHeader;
