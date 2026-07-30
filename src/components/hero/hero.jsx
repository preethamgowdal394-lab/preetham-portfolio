import { useEffect, useState } from "react";
import "./hero.css";

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <section id="hero" className="hero-section">
      <h1>
        {greeting}, I'm <span className="highlight">Preetham Gowda L</span> 👋
      </h1>

      <p className="tagline">
        I'm a passionate Web Developer from Bangalore specializing in modern,
        responsive and user-friendly web applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          View My Work
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero; //hero.jsx