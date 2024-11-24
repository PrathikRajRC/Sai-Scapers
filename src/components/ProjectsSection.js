import React from 'react';
import '../styles/main.css';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen flex items-center py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;