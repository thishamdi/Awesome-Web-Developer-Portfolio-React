import { skills } from "../../data";
import "./Skills.css"

const Skills = () => {

  return (
    <>
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
            <p>Showcasing a diverse set of skills that power innovative and impactful web solutions.</p>
          </div>

          <div className="skills-widget">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="skill-inner">
                  <div className="icon-box">
                    <img className={skill.className} src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="name">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills
