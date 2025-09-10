import React from "react";

const ProjectsPage: React.FC = () => {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Projects</h1>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {[...Array(6)].map((_, i) => (
          <article key={i} className="card" style={{ height: 160, borderRadius: 16 }} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
