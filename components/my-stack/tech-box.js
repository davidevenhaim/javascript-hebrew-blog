import Image from "next/image";

import constants from "../constants";
import classes from "./tech-box.module.css";

const TECH_SIZE = 50;

const myTechStack = [
  {
    src: "/images/icons/js.png",
    alt: constants.tech.javascript,
    description: ""
  },
  {
    src: "/images/icons/node.png",
    alt: constants.tech.nodejs,
    description: ""
  },
  {
    src: "/images/icons/nestjs.ico",
    alt: constants.tech.nestjs,
    description: ""
  },
  {
    src: "/images/icons/java.png",
    alt: constants.tech.java,
    description: ""
  },
  {
    src: "/images/icons/bitbucket.jpg",
    alt: constants.tech.bitbucket,
    description: ""
  },
  {
    src: "/images/icons/android.png",
    alt: constants.tech.android,
    description: ""
  },
  {
    src: "/images/icons/react.png",
    alt: constants.tech.react,
    description: ""
  },
  {
    src: "/images/icons/nextjs.png",
    alt: constants.tech.nextjs,
    description: ""
  },
  {
    src: "/images/icons/firebase.png",
    alt: constants.tech.firebase,
    description: ""
  },
  {
    src: "/images/icons/python.svg.png",
    alt: constants.tech.pyhton,
    description: ""
  },
  {
    src: "/images/icons/react-native.png",
    alt: constants.tech.reactnative,
    description: ""
  },
  {
    src: "/images/icons/mongodb.png",
    alt: constants.tech.mongodb,
    description: ""
  },
  {
    src: "/images/icons/github.png",
    alt: constants.tech.github,
    description: ""
  },
  {
    src: "/images/icons/docker.png",
    alt: constants.tech.docker,
    description: ""
  },
  {
    src: "/images/icons/kubernetes.png",
    alt: constants.tech.kubernetes,
    description: ""
  },
];

function techBox({ techAlt, all }) {
  const tech = myTechStack.find(t => (t.alt === techAlt));

  return (
    <>
    {all ? 
    <>
    {myTechStack.map(tech => (
        <Image
        alt={tech.alt}
        placeholder="blur"
        style={{
          ":hover": {
            transform: "scale(2)"
          },
          backgroundColor: "black"
        }}
        className={classes.zoom}
        height={TECH_SIZE * 1.5}
        width={TECH_SIZE * 1.5}
        key={tech.alt}
        src={tech.src}
      />
    ))}
    </>:
    <li>
    <Image
      alt={tech.alt}
      placeholder="blur"
      style={{
        ":hover": {
          transform: "scale(2)"
        },
        backgroundColor: "black"
      }}
      className={classes.zoom}
      height={TECH_SIZE}
      width={TECH_SIZE}
      key={tech.alt}
      src={tech.src}
    />
    </li>
    }
    </>
  );
}

export default techBox;
