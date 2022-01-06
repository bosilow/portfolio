import PROJECTS_DATA from "./database/PROJECTS_DATA";

import profileImg from "./assets/images/bosibosi.png";

import NavBar from "./components/nav-bar/nav-bar.component";
import IntroText from "./components/intro-text/intro-text.component";
import HeaderProfilePic from "./components/header-profile-pic/header-profile-pic.component";
import Chart from "./components/chart/chart.component";
import AboutMyselfContainer from "./components/about-myself-container/about-myself-container.component";
import ProjectsList from "./components/projects-list/projects-list.component";
import ContactForm from "./components/contact-form/contact-form.component";

const App = () => {
  const projects = PROJECTS_DATA;

  return (
    <div className="App">
      <header id="home-container" className="container-wrap">
        <IntroText />
        <HeaderProfilePic profileImg={profileImg} />
      </header>
      <NavBar title="bosiljko" />
      <main>
        <hr id="about-break" />
        <section id="about-container" className="container-wrap">
          <h2 id="about">About</h2>
          <Chart />
          <AboutMyselfContainer />
        </section>
        <hr id="projects-break" />
        <section id="projects-container" className="container-wrap">
          <h2 id="projects">Projects</h2>
          <ProjectsList projects={projects} />
        </section>
        <hr id="contact-break" />
        <section id="contact-container" className="container-wrap">
          <h2 id="contact">Contact</h2>
          <ContactForm />
        </section>
      </main>
      <footer>Bosiljko 2021.</footer>
    </div>
  );
};

export default App;
