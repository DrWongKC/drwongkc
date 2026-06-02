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
      {/* <Footer /> */}
    </>
  );
}

function About() {
  return (
    <>
      <h1 id="about-me-heading">About Me</h1>
      <div id="about-me-subheading">
        <span>
          <em>AI-Amplified Software Engineer</em>
        </span>
      </div>
      <img
        id="about-me-pic-one"
        src="https://i.postimg.cc/nL1dd6LS/KAI-0430.jpg"
      />
      <p>
        Heyy, I'm Kai Chong. Welcome to my spot of the web where I share about
        my professional experience and achievements to you. I'm currently on a
        sabbatical to discover more of what I want, move-on to the next stage of
        my personal life, and to refine my knowledge and skills as a software
        engineer.
      </p>
      <p>
        I like spending time online to read the news, watch career videos, and
        read articles written on topics I'm curious about.
      </p>
      <p>
        I enjoy watching career videos on YouTube and subscribing to the ones
        that consistently share constructive advises, read the news to have a
        better understanding of what’s going-on out there and explore
        opportunities and disruptions early-on to strategise how I can act and
        leverage on them for my professional pursuit. I also love reading
        articles on topics of my audiophile hobby.
      </p>
      <p>
        While I enjoy participating in the digital world, I love my life in the
        real world too! When I’m not in-front of my computer, I enjoy collecting
        photos of my wife taken using a Nikon Z50II with upgraded lens,
        travelling with her to destinations around South-East Asia (with the aim
        of Europe and America in the future), and meeting-up with friends to
        catch-up on each others' lives.
      </p>
      {/* <p>~</p> */}
      <p>
        but enough about my life, now let me tell you why I chose to devote my
        entire life and career trajectory into computing technology.
      </p>
      {/* <p>~</p> */}
      <p>
        Back then, when I was in Primary School (elementary school equivalent of
        Singapore) we had an old computer that had those CRT (Cathode Ray Tube)
        monitor in the bedroom of my grandparents’ home. There, I played
        Warcraft III, Grand Theft Auto San Andreas, and The Elder Scrolls
        Morrowind. At times, because I really love reading my encyclopaedias,
        I'd type out the chapter onto Microsoft Word as my way of digitising
        them for storage into the computer.
      </p>
      <p>
        During that time, the Internet was starting to become a thing, though I
        never got to use it. As I grew up, I dreamt of the potential that can
        come from computers such as having my own mini digital diary (micro
        laptop computer), to a smartphone that could access the Internet the
        same way that a computer could, to a robotic pet that could interact
        with me conversationally like those autonomous robot friends I used to
        see in children’s cartoons. I knew I wanted to work with computers
        because I saw so clearly how much better life could be if we integrated
        them into our daily life (though I realise as I got older, technology
        only improves our life if we built it with that thought in mind), and I
        just had to be a part of it. I started reading up on fundamental
        computing technologies and started programming a couple of years later
        after I started my Information Technology tertiary education. While I
        was able to surf the web to learn using my family’s computer, it was
        only when I got my own laptop that I was able to start programming and
        invest more time being on the Internet.
      </p>
      <p>
        I had used computers before but the first computer that I could call my
        own was an Apple MacBook Pro. It was an operating system based off Unix
        that made me want to try it. I tried using Ubuntu through the Parallel
        virtual machine software, but it was slow and most of my time was spent
        on the MacOS. I had my focus on studying software engineering and was
        quick to learn them before I developed a health problem and struggled to
        keep-up my GPA grades. Even though I was deeply affected by my grades, I
        was still able to graduate and went on into the job market as a software
        educator for young children learning about the concepts of programming.
        I was good at helping others understand programming well because I used
        real-world analogies to anchor their understanding of software concepts
        to what they observe or expect to observe happening in the real world.
      </p>
      <p>
        At that point, Silicon Valley became viral as the place where technology
        entrepreneurs had the support and facilities to make a positive impact
        to the world. While I didn’t like the less-than-ethical behaviour
        portrayed in the movie for what Mark Zuckerberg did, the film The Social
        Network, left a deep and lasting impression in me.
      </p>
      <p>
        It was then that I knew there had to be an equivalent in Singapore
        because of the opportunities for technology companies to flourish here
        and found Block 71 at One North. Through networking, I was able to work
        at a small startup there as an intern, but they had me create
        motivational postcards to earn some bucks instead of doing something I
        felt would translate better to revenue. I saw these people had a
        different outlook on things than I had and realise making motivational
        postcards won’t lead to anything, I decided to resign after a couple of
        months. They were insistent I work on the motivational postcards despite
        me trying to explain to them that it’s not going to work out.
      </p>
      <p>
        Later, I found EAT Launchpad. This startup isn’t about food, but stood
        for Educate, Act, and Transform (E.A.T), and I joined them as a Program
        Manager working with lots of the left-over work that my company founder
        couldn’t complete himself. It was there that I was able to use my good
        presentation skills to present ideas to stakeholders who were open to
        engaging us for entrepreneurship education, create newsletters for our
        mailing list, go out to events to network and make our startup known
        among the community, and any other administrative stuff that popped up.
        Some of the notable successes were us being able to assemble multiple
        local entrepreneurs to provide entrepreneurship lessons to universities
        and polytechnics in Singapore such as Singapore University of Technology
        & Design (SUTD), Ngee Ann Polytechnic (NP) and the local startup
        community through free and paid events advertised onto Eventbrite and
        Peatix.
      </p>
      <p>
        While I was thriving at what I was doing, I didn’t see much opportunity
        for growth and self-development, I also realised that I’d come off as
        being more useful if I knew software development deeply, so I became a
        software engineer at GrabJobs, which was another startup. I was doing an
        internship working on the Job Application website’s Administrative
        Back-end application where my work was mostly front-end engineering.
        After a few months, the threat of Covid hit, and our investors wanted to
        pause or back-out of their investment. The founders had to let the whole
        software development team go apart from the CTO himself, and I was
        thrown into a frenzy to look for what’s next for myself. At the moment,
        the company is thriving so they survived the pandemic, and some of my
        colleagues went on to work in companies like Bytedance or other
        startups, while I discovered an opportunity to do a work-study program
        with Accenture as a full-time permanent staff.
      </p>
      <img
        id="about-me-pic-two"
        src="https://i.postimg.cc/43XPhB1N/KAI-1729.jpg"
      />
      <p>
        Accenture became the best thing to me as I learnt so much from back-end
        programming to Identity Access Management Systems configuration, to my
        later found forte in ReactJS front-end software engineering. I was on an
        intensive on-the-job training for 4 years and 10 months and pretty much
        covered the entire spectrum of web applications technology.
      </p>

      <p>
        I left Accenture because I wanted to take a career sabbatical to
        discover what I want to do in my career and personal life, where I also
        achieved some major personal milestones such as marrying my partner and
        moving into a new home. Apart from a lot of figuring-out and reflection
        of my life, I dedicated myself to revise and explore more web
        applications technology and that has resulted in me becoming better as a
        software engineer than before.
      </p>
      <p>
        It became clear to me that I want to specialise in ReactJS front-end
        software engineering while making use of Artificial Intelligence as a
        tool to amplify my software development output. I’m also looking to do a
        3-months course in AI from the Singapore Institute of Technology to make
        better use of these tools.
      </p>
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
          <Link to="/drwongkc">Home</Link> | <Link to="/about">About</Link>{" "}
          {/* |{" "}
          <Link to="/projectone">projectTimeNow(🕰️)™</Link> */}
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/drwongkc" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectone" element={<ProjectOne />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
