import "./footer.styles.scss";

import resume from "../../assets/resume/resume-bosiljko-stojanovic.pdf";

const Footer = ({ text }) => (
  <footer className="footer">
    <div className="social-icons">
      <div>
        <a
          href="https://www.facebook.com/bosiljko.stojanovic"
          class="fa fa-facebook"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="https://www.linkedin.com/in/bosiljko-stojanovic-0295241b6/"
          class="fa fa-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          href="https://github.com/bosilow"
          class="fa fa-github"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </div>
    </div>
    <a href={resume} className="resume-link" download>
      Download resume
    </a>
    <span className="copyright-text">{text}</span>
  </footer>
);

export default Footer;
