const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt"></i>
          <span>CSS</span>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react"></i>
          <span>React</span>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js"></i>
          <span>Node</span>
        </div>
        <div className="skill-card laravel">
          <i className="fa-brands fa-laravel"></i>
          <span>Laravel</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
