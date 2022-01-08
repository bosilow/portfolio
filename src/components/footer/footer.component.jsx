import "./footer.styles.scss";

const Footer = ({ text }) => (
  <footer className="footer">
    <div className="social-icons">
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
      <a href="#" class="fa fa-file-pdf-o">
        {" "}
      </a>
    </div>
    <span className="copyright-text">{text}</span>
  </footer>
);

export default Footer;
