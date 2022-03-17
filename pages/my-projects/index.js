import Hero from "../../components/home-page/hero";
import AllStack from "../../components/my-stack/all-stack";

const TECH_SIZE = 100;

function AboutMePage() {
  return (
    <div style={{ textAlign: "center", fontSize: 20, flexDirection: "row" }}>
      <Hero />
      <div style={{ padding: 20 }}>
        <AllStack />
      </div>
    </div>
  );
}

export default AboutMePage;
