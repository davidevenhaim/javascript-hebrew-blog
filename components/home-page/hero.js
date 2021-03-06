import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/david.jpg"
          alt="My image"
          height={300}
          width={300}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Hero;
