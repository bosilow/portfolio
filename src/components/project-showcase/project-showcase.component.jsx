import "./project-showcase.styles.scss";
import { useState } from "react";

const ProjectShowcase = ({ title, info, gifPreview, staticImg }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="project-showcase">
      <h3 className="project-title">{title}</h3>
      <div className="project-details">
        <div className="project-info-section">
          <p className="project-info-text">{info}</p>
          <div className="project-info-buttons">
            <button type="button" className="project-info-btn">
              GitHub
            </button>
            <button type="button" className="project-info-btn">
              Live Preview
            </button>
          </div>
        </div>
        <div
          className="project-img-container"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <img
            src={hover ? gifPreview : staticImg}
            alt="Project Preview"
            className="project-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
