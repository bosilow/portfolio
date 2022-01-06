import "./nav-bar.styles.scss";

const NavBar = ({ title }) => (
  <nav id="navbar">
    <a className="logo" href="#home-container">
      {title}
    </a>
    <div className="nav-links">
      <a href="#about-break">about.</a>
      <a href="#projects-break">projects.</a>
      <a href="#contact-break">contact.</a>
    </div>
  </nav>
);

export default NavBar;
