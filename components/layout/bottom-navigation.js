import Link from "next/link";
import Image from "next/image";

import routes from "../routes";
import classes from "./bottom-navigation.module.css";

function BottomNavigation() {
  return (
    <footer className={classes.header}>
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/david-abenhaim-0657bb1a5/">
            <a target="_blank">
              <Image
                alt="linkedin"
                src="/images/site/linkedin.png"
                height={30}
                width={30}
                layout="fixed"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ZiteiX">
            <a target="_blank">
              <Image
                alt="github"
                src="/images/site/github.png"
                height={30}
                width={30}
                layout="fixed"
              />
            </a>
          </Link>
        </li>
      </ul>
      <nav>
        <ul>
          <li>
            <Link href={routes.POSTS}>כל הפוסטים</Link>
          </li>
          <li>
            <Link href={routes.ABOUT_ME}>מי אני</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default BottomNavigation;
