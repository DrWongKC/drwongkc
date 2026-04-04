const Hero = () => {
  const calculateAge = (birthdate: string) => {
    // Get the current date
    const datetoday = new Date();

    // Validate if both dates are provided
    if (!birthdate || !datetoday) {
      alert("Please enter both Date of Birth and Current Date.");
      return;
    }
    // Convert input values to Date objects
    const dob = new Date(birthdate);
    const currentDate = new Date(datetoday);
    // Calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < dob.getDate())
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
        <span id="email">📧 kai_wong[at]outlook.com</span>
        <span> • </span>
        <span>🎂 {calculateAge("1995-09-11")} years old</span>
      </div>
    </section>
  );
};

export default Hero;
