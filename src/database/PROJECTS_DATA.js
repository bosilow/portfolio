import colorGamePreview from "../assets/project-gifs/color-game-preview.gif";
import addALinkPreview from "../assets/project-gifs/add-a-link-preview.gif";
import startYDRightPreview from "../assets/project-gifs/start-your-day-right-preview.gif";

import colorGameStatic from "../assets/project-statics/color-game-static.png";
import addALinkStatic from "../assets/project-statics/add-a-link-static.png";
import startYourDayRightStatic from "../assets/project-statics/start-your-day-right-static.png";

const PROJECTS_DATA = [
  {
    title: "Color Game",
    info: "Mini-game where you have to guess corresponding color tile with randomized RGB title provided. Made in pure JS/CSS/HTML after cca. 30 days of studying web development in general.",
    gifPreview: colorGamePreview,
    staticImg: colorGameStatic,
  },
  {
    title: "Add A Link",
    info: "Appplication for adding and saving links that I've made in ReactJS as a practice.",
    gifPreview: addALinkPreview,
    staticImg: addALinkStatic,
  },
  {
    title: "Start Your Day Right",
    info: "Simple small React web app to boost your mood daily. Do you like dogs or jokes? Maybe both? Here you can get your daily dose.",
    gifPreview: startYDRightPreview,
    staticImg: startYourDayRightStatic,
  },
];

export default PROJECTS_DATA;
