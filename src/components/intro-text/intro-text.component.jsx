import "./intro-text.styles.scss";

import Typical from "react-typical";

const IntroText = () => (
  <div className="intro-text">
    <span>Hello,</span>
    <span>I am</span>

    <span className="first-name">
      BOSILJKO
      <span />
    </span>
    <span className="job-description">
      {" "}
      <Typical
        wrapper="b"
        steps={[
          "",
          250,
          "Front End Web Developer",
          250,
          "<FrontEndWebDeveloper age=26 nationality=HR />",
          1000,
        ]}
      />
    </span>
  </div>
);

export default IntroText;
