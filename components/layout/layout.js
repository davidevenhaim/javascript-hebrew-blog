import { Fragment } from "react";
import BottomNavigation from "./bottom-navigation";
import MainNavigation from "./main-navigation";

function Layout({ children }) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      <BottomNavigation />
    </Fragment>
  );
}

export default Layout;
