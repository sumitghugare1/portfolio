import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "TypeScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PHP"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack"]
    }
  ];
  
  return (
    <section id="skills" className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
