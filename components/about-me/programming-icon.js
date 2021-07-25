import Image from "next/image";
import routes from "../routes";

import classes from "./programming-icon.module.css";

function programmingIcon({ icons }) {
  return (
    <div className={classes.container}>
      <div>
        {icons.map((iconName) => {
          console.log(routes.ICONS + "/" + iconName);
          return (
            <Image
              key={iconName}
              src={routes.ICONS + "/" + iconName}
              alt={iconName}
              height={200}
              width={200}
              layout="responsive"
            />
          );
        })}
        <p>"react"</p>
      </div>
    </div>
  );
}

export default programmingIcon;
