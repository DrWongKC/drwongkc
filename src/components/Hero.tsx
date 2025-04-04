const Hero = () => {

    const calculateAge = (birthdate: string) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
    
        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
    
        return age;
      };

  return (
    <section id="wrapper--hero" className="section--page">
          <img
            id="profile-pic"
            src="https://i.postimg.cc/g06fZfSv/1741237219303.jpg"
          />

          <div>
            <h1 id="user-name">Wong Kai Chong (黄恺聪)</h1>
            {/* <span id="bio">🧑‍💻 Front-end Software Engineer</span> */}
            <span>🧑‍💻 Front-end Software Engineer</span>
            <span> • </span>
            <span id="email">
              📧 kai_wong[at]outlook.com
            </span>
            <span> • </span>
            <span>🎂 {calculateAge("1995-09-11")} years old</span>
          </div>
        </section>
  )
}

export default Hero
