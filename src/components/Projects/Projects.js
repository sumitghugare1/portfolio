import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "S G Blogs Website",
      description: "A full-stack blogging platform with secure authentication, MongoDB for data storage, and email notifications via Nodemailer.",
      imageUrl: "/projects/sgblogs.png", 
      category: "fullstack",
      technologies: ["React.js", "Node.js", "MongoDB", "Nodemailer", "Tailwind CSS"],
      liveUrl: "https://sgblogs-frontend.vercel.app/",
      codeUrl: "https://github.com/sumitghugare1/sgblogs"
    },
    {
      id: 2,
      title: "Shopmart E-commerce",
      description: "Responsive e-commerce application with product catalog, shopping cart, and user authentication.",
      imageUrl: "/projects/shopmart.png", 
      category: "frontend",
      technologies: ["React.js", "Redux", "CSS3", "Material UI", "Firebase"],
      liveUrl: "https://frontend-gold-eight-46.vercel.app/",
      codeUrl: "https://github.com/sumitghugare1/frontend"
    },
    {
      id: 3,
      title: "TimeBank",
      description: "A full-stack platform for skill exchange with JWT authentication, real-time chat, and Zustand for state management.",
      imageUrl: "/projects/timebank.png", 
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.IO", "Zustand", "Tailwind UI"],
      liveUrl: "https://timebankfrontend.vercel.app/",
      codeUrl: "https://github.com/sumitghugare1/timebank"
    },
    {
      id: 4,
      title: "DevFetch",
      description: "A comprehensive full-stack platform for developers featuring modern web technologies and seamless user experience.",
      imageUrl: "/projects/devfetch.png", 
      category: "fullstack",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://devfetchfront.vercel.app/",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "DateFoods",
      description: "A modern food ordering and delivery platform with responsive design and intuitive user interface.",
      imageUrl: "/projects/datefoods.png", 
      category: "frontend",
      technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://datefoods.vercel.app/",
      codeUrl: "#"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My <span>Projects</span></h2>
      
      <div className="projects-filter">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'frontend' ? 'active' : ''} 
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={filter === 'fullstack' ? 'active' : ''} 
          onClick={() => setFilter('fullstack')}
        >
          Full-stack
        </button>
        <button 
          className={filter === 'mobile' ? 'active' : ''} 
          onClick={() => setFilter('mobile')}
        >
          Mobile
        </button>
        <button 
          className={filter === 'iot' ? 'active' : ''} 
          onClick={() => setFilter('iot')}
        >
          IoT
        </button>
      </div>
      
      <div className="projects-container">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image" data-title={project.title}>
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
