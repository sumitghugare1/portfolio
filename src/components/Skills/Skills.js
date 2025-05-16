import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "JavaScript", percentage: 92 },
    { name: "TypeScript", percentage: 80 },
    { name: "Tailwind CSS", percentage: 88 },
    { name: "HTML/CSS", percentage: 95 }
  ];
  
  const backendSkills = [
    { name: "Node.js", percentage: 88 },
    { name: "Express.js", percentage: 85 },
    { name: "MongoDB", percentage: 82 },
    { name: "MySQL/PostgreSQL", percentage: 78 },
    { name: "Java", percentage: 75 },
    { name: "Python", percentage: 70 }
  ];
  
  const otherSkills = [
    "GitHub",
    "Docker",
    "RESTful APIs",
    "Zustand",
    "Socket.IO",
    "Spring Boot",
    "Spring Security",
    "JPA/Hibernate",
    "Microservices",
    "AWS",
    "Vercel",
    "Netlify",
    "Firebase",
    "CI/CD",
    "Redux",
    "JWT Authentication",
    "Material UI",
    "Bootstrap",
    "GraphQL",
    "Axios",
    "PHP",
    "C/C++",
    "Oracle",
    "Spring"
  ];
    return (
    <section id="skills" className="skills-section wave-section">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skill-bars">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <p>{skill.percentage}%</p>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: `${skill.percentage}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skill-bars">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <p>{skill.percentage}%</p>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: `${skill.percentage}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Other Skills</h3>
            <div className="other-skills">
              {otherSkills.map((skill, index) => (
                <div className="other-skill-item" key={index}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
