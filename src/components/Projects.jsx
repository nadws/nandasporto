import { projectData } from "./data";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Proyek</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open"></i>
              <a href={project.gitHubLink}>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
