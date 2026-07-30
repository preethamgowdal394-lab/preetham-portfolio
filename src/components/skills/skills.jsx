import "./skills.css";

const skills = [
  {
    name: "HTML",
    level: 90,
    color: "#E34F26",
  },
  {
    name: "CSS",
    level: 85,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    level: 75,
    color: "#F7DF1E",
  },
  {
    name: "React",
    level: 65,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    level: 60,
    color: "#339933",
  },
  {
    name: "Git",
    level: 70,
    color: "#F05032",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                }}
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; //skills.jsx