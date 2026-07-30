import "./about.css";
import profile from "../../assets/WhatsApp Image 2026-07-30 at 2.28.56 PM.jpeg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Preetham Gowda L" />
        </div>

        <div className="about-content">
          <h3>Hi, I'm Preetham Gowda L 👋</h3>
          <strong>
          <p>
            I'm a passionate Web Developer from Bangalore who enjoys creating
            modern, responsive, and user-friendly websites using the latest web
            technologies.
          </p>
</strong>
          <p>
            My primary skills include HTML, CSS, JavaScript, React, and
            Node.js. I enjoy learning new technologies and building projects
            that solve real-world problems.
          </p>

          <p>
            My goal is to become a Full Stack Developer and contribute to
            impactful software products while continuously improving my
            development skills.
          </p>

          <div className="about-info">
            <div>
              <span>Name</span>
              <p>Preetham Gowda L</p>
            </div>

            <div>
              <span>Location</span>
              <p>Bangalore, India</p>
            </div>

            <div>
              <span>Role</span>
              <p>Web Developer</p>
            </div>

            <div>
              <span>Email</span>
              <p>preethamgowda394@gmail.com</p>
            </div>
          </div>

          <a href="#contact" className="about-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;