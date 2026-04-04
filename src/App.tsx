import "./App.css";
import "./styles/main.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";
import Description from "./components/Description";
import WorkHistory from "./components/WorkHistory";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";

const useDate = () => {
  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: "long" })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"}, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};

function Home() {
  return (
    <>
      <Hero />
      <SocialMedia />
      <Summary />
      <Description />
      <WorkHistory />
      <Recommendations />
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>It is currently work-in-progress.</p>
    </>
  );
}

function ProjectOne() {
  const { date, time, wish } = useDate();
  return (
    <>
      <h1>projectTimeNow(🕰️)™</h1>
      <div className="project-time-now">
        <div className="date-and-time-now-text">
          {wish}
          <br />
          the current date and time is
        </div>
        <div className="date-and-time-now">
          {date} {time}.
        </div>
      </div>
    </>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 25, textAlign: "center" }}>
      <h1>404: Page Not Found</h1>
      <p>
        Please return to the{" "}
        <Link to="/" style={{ textDecoration: "underline", color: "#f46036" }}>
          Home
        </Link>{" "}
        page.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div id="container--main">
        {/* Navigation */}
        <nav>
          <Link to="/drwongkc">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/projectone">projectTimeNow(🕰️)™</Link>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/drwongkc" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectone" element={<ProjectOne />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
