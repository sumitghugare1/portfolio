import React from 'react';
import './About.css';

const About = () => {
  return (    
    <section id="about" className="about-section wave-section">
      <h2 className="section-title">About <span>Me</span></h2>      
      <div className="about-container">
        <div className="about-image">
          <div className="code-terminal">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
              <span className="terminal-title">sumit@developer:~</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-text typing-effect">const developer = {`{`}</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt-continuation">  </span>
                <span className="terminal-text typing-effect typing-delay-1">name: 'Sumit Ghugare',</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt-continuation">  </span>
                <span className="terminal-text typing-effect typing-delay-2">skills: ['MERN', 'React', 'Node.js', 'Express'],</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt-continuation">  </span>
                <span className="terminal-text typing-effect typing-delay-3">passion: 'Building web solutions'</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt-continuation">  </span>
                <span className="terminal-text typing-effect typing-delay-4">{`}`};</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-text typing-effect typing-delay-5">console.log('Welcome to my portfolio!');</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content">          
          <h3>Full Stack Developer based in Latur, Maharashtra</h3>
          <p>
            Hi, I'm Sumit Ghugare, an aspiring full-stack developer with a solid foundation in computer science. 
            My journey began with a Diploma in Computer Engineering, and I'm currently pursuing a 
            BTech in Computer Science from M.S. Bidve Engineering College, Latur.
          </p>
          <p>
            I specialize in MERN stack development, and I'm passionate about building impactful, 
            scalable, and secure web applications. With experience in frontend technologies like 
            React.js and Next.js, backend frameworks including Node.js and Express, and various databases, 
            I strive to create elegant solutions to complex problems.
          </p>
          
          {/* Personal details removed as requested */}
          <div className="about-actions">
            <a href="https://drive.google.com/file/d/1kmHnvD05lEcCwRV3pLSjEpcAPFNS56-Q/view?usp=drive_link" 
               className="btn primary-btn" 
               target="_blank" 
               rel="noopener noreferrer">
              <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
