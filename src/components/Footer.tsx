const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <section id="wrapper--footer" className="section--page">
        © {currentYear} custom theme made with ♥️ by KAI
    </section>
  )
}

export default Footer
