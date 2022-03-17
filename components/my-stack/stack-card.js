import Link from "next/link";
import Image from "next/image";

import TechBox from "./tech-box";

import classes from "./stack-card.module.css";
import routes from "../routes";

function StackCard({ project }) {
  const { date, image, link, summary, title, techs } = project;

  const formattedDate = new Date(date).toLocaleDateString("he-IL", {
    day: "numeric",
    month: "long",
    year: "2-digit"
  });

  const imagePath = `${routes.PROJECTS_IMAGES}/${image}`;

  return (
    <li className={classes.project}>
      <Link href={link}>
        <a rel="noopener noreferrer" target="_blank">
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
            <h3>
              {title}
            </h3>
            <time>
              {formattedDate}
            </time>
            <p>
              {summary}
            </p>
            <p className={classes.techs}>
              <ul className={classes.techList}>
                {techs.map(tech => <TechBox techAlt={tech} />)}
              </ul>
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default StackCard;
