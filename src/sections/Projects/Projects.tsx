import { useScrollContext } from "contexts/ScrollContext";
import React, { FC } from "react";
import "./styles.css";

const Projects: FC = () => {
  const { scrollXPosition, scrollYPosition } = useScrollContext();

  return (
    <section className="flex items-center justify-center min-h-full">
      <div className="projects--text">
        <h1>Projects page</h1>
        <h1>Coming soon.....</h1>
      </div>
    </section>
  );
};

export default Projects;
