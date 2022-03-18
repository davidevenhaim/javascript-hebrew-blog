import constants from "../constants";
import StackCard from "./stack-card";
import TechBox from "./tech-box";

import classes from "./all-stack.module.css";

const projects = [
  {
    date: new Date(2021, 8, 17),
    image: "match.jpeg",
    link: "https://github.com/ZiteiX/match-frontend",
    slug: "match",
    summary: " ",
    title: "Match Mobile App",
    techs: [
      constants.tech.javascript,
      constants.tech.nodejs,
      constants.tech.reactnative,
      constants.tech.mongodb
    ]
  },
  {
    date: new Date(2021, 6, 15),
    image: "corona.png",
    link: "https://github.com/ZiteiX/Corona-Simulation",
    slug: "corona",
    summary: " ",
    title: "Corona Simulation Game",
    techs: [constants.tech.java]
  },
  {
    date: new Date(2022, 1, 5),
    image: "dressapp.png",
    link: "https://github.com/ZiteiX/DressApp",
    slug: "dressapp",
    summary: " ",
    title: "DressApp - Java Android",
    techs: [
      constants.tech.java,
      constants.tech.android,
      constants.tech.firebase
    ]
  }
];

function AllStack() {
  return (
    <section className={classes.projects}>
      <h1>הטכנולוגיות שלי</h1>
      <ul className={classes.techList}>
        <TechBox all />
      </ul>
      <h1>הפרויקטים שלי</h1>
      <ul className={classes.grid}>
        {projects.map(project => <StackCard project={project} />)}
      </ul>
    </section>
  );
}

export default AllStack;
