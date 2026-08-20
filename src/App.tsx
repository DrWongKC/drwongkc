import "./App.css";
import "./styles/main.css";
// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";
import Description from "./components/Description";
import WorkHistory from "./components/WorkHistory";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import About from "./pages/About";

function Home() {
  return (
    <>
      <Hero />
      <SocialMedia />
      <Summary />
      <Description />
      <WorkHistory />
      <Recommendations />
      {/* <Footer /> */}
    </>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 25, textAlign: "center" }}>
      <h1>404: Page Not Found</h1>
      <p>
        Please return to the{" "}
        <Link
          to="/drwongkc"
          style={{ textDecoration: "underline", color: "#f46036" }}
        >
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
          <Link to="/drwongkc">Home</Link> ⧸ <Link to="/about">About</Link>
          {/* ⧸{" "}<Link to="/intellifindlaptopguide">IntelliFind Laptop Guide™</Link> */}
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/drwongkc" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*  <Route
            path="/intellifindlaptopguide"
            element={<IntelliFindLaptopGuide />}
          /> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
