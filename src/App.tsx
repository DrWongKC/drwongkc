import "./App.css";
import Description from "./components/Description";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";
import WorkHistory from "./components/WorkHistory";
import "./styles/main.css";
import "./styles/theme-switcher.css";

function App() {
  return (
    <>
      <div id="container--main">
        <Hero />
        <SocialMedia />
        <Description />
        <Summary />
        <WorkHistory />
        {/* <section className="section--page">
          <h2>Projects & Accomplishments</h2>
          <div className="card--project">
            <a href="project1.html">
              <span>🏆 </span>*to be filled-in.
            </a>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;
