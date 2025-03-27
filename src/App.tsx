import "./App.css";
import "./styles/main.css";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";
import Description from "./components/Description";
import WorkHistory from "./components/WorkHistory";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container--main">
        <Hero />
        <SocialMedia />
        <Summary />
        <Description />
        <WorkHistory />
        <Recommendations />
        {/* <section className="section--page">
          <h2>Projects & Accomplishments</h2>
          <div className="card--project">
            <a href="project1.html">
              <span>🏆 </span>*to be filled-in.
            </a>
          </div>
        </section> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
