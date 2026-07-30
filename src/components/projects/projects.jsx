import "./projects.css";



const projects = [
  {
    id: 1,
    title: "Weather App",
    image: weatherImg,
    description:
      "Real-time weather dashboard using the OpenWeather API.",
    technologies: ["React", "API"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Online Shopping App",
    image: shoppingImg,
    description:
      "A responsive shopping application with a wide range of products.",
    technologies: ["React", "API"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    image: socialImg,
    description:
      "A real-time communication platform connecting users across different locations.",
    technologies: ["React", "API"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects; //projects.jsx