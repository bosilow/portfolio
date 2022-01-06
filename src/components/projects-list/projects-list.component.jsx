import React from "react";
import ProjectShowcase from "../project-showcase/project-showcase.component";

const ProjectsList = ({ projects }) => (
  <>
    {React.Children.toArray(
      projects.map((project) => (
        <ProjectShowcase
          title={project.title}
          info={project.info}
          staticImg={project.staticImg}
          gifPreview={project.gifPreview}
        />
      ))
    )}
  </>
);

export default ProjectsList;
