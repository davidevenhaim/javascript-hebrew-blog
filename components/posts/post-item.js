import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";
import routes from "../routes";

function PostItem({ post }) {
  const { date, image, slug, summary, title } = post;

  const formattedDate = new Date(date).toLocaleDateString("he-IL", {
    day: "numeric",
    month: "long",
    year: "2-digit",
  });

  const imagePath = `${routes.IMAGES}/${slug}/${image}`;
  const linkPath = `${routes.POSTS}/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              alt={title}
              height={240}
              layout="responsive"
              width={400}
              src={imagePath}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
