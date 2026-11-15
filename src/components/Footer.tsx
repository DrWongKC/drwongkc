const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="wrapper--footer" className="section--page">
      <span className="footer-copyright">©</span>{" "}
      <span className="footer-date">{currentYear}</span>{" "}
      <a
        href="https://drwongkc.github.io/drwongkc"
        id="wrapper--footer--project--name"
      >
        myDigitalResumeProject(📄)™
      </a>{" "}
      <span className="footer-slash">//</span> Hand-built with ♥️ by KAI
      <span className="footer-cursor">|</span>
    </section>
  );
};

export default Footer;
