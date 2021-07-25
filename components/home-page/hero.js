import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/david.jpeg"
          alt="My image"
          height={300}
          width={300}
          layout="responsive"
        />
      </div>
      <h1>דוד</h1>
    </section>
  );
}

export default Hero;
