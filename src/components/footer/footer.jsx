import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>PG.</h2>
          <p>Building responsive and modern web experiences.</p>
        </div>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/preethamgowdal394-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/preetham-gowda-l-5a1b4b1b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © {currentYear} Preetham Gowda L. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer; //footer.jsx