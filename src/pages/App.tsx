import { Menu } from "antd";
import "../styles/app.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Coding from "./Coding";
import StatementOfConcern from "./StatementOfConcern";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import IntelliFindLaptopGuide from "./IntelliFindLaptopGuide";
import Footer from "../components/Footer";
import NoMatch from "./NoMatch";

const items = [
  {
    key: "drwongkc",
    label: <Link to="/drwongkc">Home</Link>,
  },
  {
    key: "about",
    label: <Link to="/about">About</Link>,
  },
  {
    key: "coding",
    label: <Link to="/coding">Coding</Link>,
  },
  {
    key: "statementofconcern",
    label: <Link to="/statementofconcern">SoC</Link>,
  },
  {
    key: "questionsandanswers",
    label: <Link to="/questionsandanswers">Q&A</Link>,
  },
];

function App() {
  const location = useLocation();
  const selectedKey = location.pathname.split("/")[1] || "drwongkc";

  return (
    <>
      <div id="container--main">
        {/* Navigation */}
        <Menu
          className="main-navigation"
          mode="horizontal"
          theme="light"
          items={items}
          selectedKeys={[selectedKey]}
        />
        <Menu />
        {/* <nav>
          <Link to="/drwongkc">Home</Link> ⧸ <Link to="/about">About</Link> ⧸{" "}
          <Link to="/coding">Coding</Link> ⧸{" "}
          <Link to="/statementofconcern">SoC</Link> ⧸{" "}
          <Link to="/questionsandanswers">Q&A</Link> ⧸{" "}
          <Link to="/intellifindlaptopguide">IntelliFind</Link>
        </nav> */}
        {/* Routes */}
        <Routes>
          <Route path="/drwongkc" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/statementofconcern" element={<StatementOfConcern />} />
          <Route
            path="/questionsandanswers"
            element={<QuestionsAndAnswers />}
          />
          <Route
            path="/intellifindlaptopguide"
            element={<IntelliFindLaptopGuide />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
