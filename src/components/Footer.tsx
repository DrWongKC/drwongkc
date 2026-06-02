const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="wrapper--footer" className="section--page">
      © {currentYear}{" "}
      <a
        href="https://drwongkc.github.io/drwongkc"
        id="wrapper--footer--project--name"
      >
        myDigitalResumeProject(📄)™
      </a>{" "}
      made with ♥️ by KAI
    </section>
  );
};

export default Footer;
