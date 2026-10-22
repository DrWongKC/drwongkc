import "../styles/app.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Coding from "./Coding";
import StatementOfConcern from "./StatementOfConcern";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import IntelliFindLaptopGuide from "./IntelliFindLaptopGuide";
import Footer from "../components/Footer";
import NoMatch from "./NoMatch";

function App() {
  return (
    <BrowserRouter>
      <div id="container--main">
        {/* Navigation */}
        <nav>
          <Link to="/drwongkc">Home</Link> ⧸ <Link to="/about">About</Link> ⧸{" "}
          <Link to="/coding">Coding</Link> ⧸{" "}
          <Link to="/statementofconcern">SoC</Link> ⧸{" "}
          <Link to="/questionsandanswers">Q&A</Link>
          {/* ⧸{" "}
          <Link to="/intellifindlaptopguide">IntelliFind</Link> */}
        </nav>
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
    </BrowserRouter>
  );
}

export default App;
