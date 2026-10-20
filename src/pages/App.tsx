import "../styles/app.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import IntelliFindLaptopGuide from "./IntelliFindLaptopGuide";
import StatementQuestionsAndAnswers from "./StatementQuestionsAndAnswers";
import Footer from "../components/Footer";
import NoMatch from "./NoMatch";

function App() {
  return (
    <BrowserRouter>
      <div id="container--main">
        {/* Navigation */}
        <nav>
          <Link to="/drwongkc">Home</Link> ⧸ <Link to="/about">About</Link>
          {/* ⧸{" "}<Link to="/intellifindlaptopguide">IntelliFind</Link> */} ⧸{" "}
          <Link to="/statementquestionsandanswers">SoC & Q&A</Link>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/drwongkc" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/statementquestionsandanswers"
            element={<StatementQuestionsAndAnswers />}
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
