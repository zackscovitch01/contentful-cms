import { useEffect, useState } from "react";
import data from "./data";
const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(data);
  if (projects.length < 1) {
    return <h4>No Projects Found...</h4>;
  }

  useEffect(() => {
    setProjects(data);
  }, []);
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, image } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={image} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
