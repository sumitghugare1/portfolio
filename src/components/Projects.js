import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Project Name 1",
      description: "Short description of the project and your role in it. What technologies you used and what problems you solved.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      image: "project1.jpg"
    },
    {
      title: "Project Name 2",
      description: "Short description of the project and your role in it. What technologies you used and what problems you solved.",
      technologies: ["Python", "Django", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      image: "project2.jpg"
    },
    {
      title: "Project Name 3",
      description: "Short description of the project and your role in it. What technologies you used and what problems you solved.",
      technologies: ["JavaScript", "Express", "MySQL"],
      demoLink: "#",
      codeLink: "#",
      image: "project3.jpg"
    }
  ];
  
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {/* Replace with actual image */}
              <div className="image-placeholder">{project.title}</div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="project-link">Live Demo</a>
                <a href={project.codeLink} className="project-link">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
