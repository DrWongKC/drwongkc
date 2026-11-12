import Hero from "../components/home/Hero";
import SocialMedia from "../components/home/SocialMedia";
// import Summary from "../components/home/Summary";
import Description from "../components/home/Description";
import WorkHistory from "../components/home/WorkHistory";
import Recommendations from "../components/home/Recommendations";
import "../styles/home.css";
import { recommendations } from "../data/recommendations";
import PhotoGrid from "../components/home/PhotoGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialMedia />
      {/* <Summary /> */}
      <PhotoGrid />
      <Description />
      <WorkHistory />
      <Recommendations recommendation={recommendations} />
    </>
  );
}
