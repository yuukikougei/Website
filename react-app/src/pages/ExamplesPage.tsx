import React from "react";

const ExamplesPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "プロジェクト A",
      image: import.meta.env.BASE_URL + "images/PRJ_001.JPG",
    },
    {
      id: 2,
      name: "プロジェクト B",
      image: import.meta.env.BASE_URL + "images/PRJ_002.JPG",
    },
    {
      id: 3,
      name: "プロジェクト C",
      image: import.meta.env.BASE_URL + "images/PRJ_003.JPG",
    },
    {
      id: 4,
      name: "プロジェクト D",
      image: import.meta.env.BASE_URL + "images/PRJ_004.JPG",
    },
  ];

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
