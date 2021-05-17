import Link from "next/link";
import Logo from "./logo";

import routes from "../routes";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
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
    </header>
  );
}

export default MainNavigation;
