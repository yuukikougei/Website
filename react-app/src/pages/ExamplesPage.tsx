import React from "react";
import { PROJECTS } from "../constants/data";

const ExamplesPage: React.FC = () => {
  const projects = PROJECTS;

  return (
    <section id="examples" className="section">
      <div className="container">
        <h2>施工事例</h2>
        <p>これまでの施工事例を写真でご紹介します。</p>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesPage;
