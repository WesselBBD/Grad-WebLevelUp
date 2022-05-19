import { goTo404, goToPage } from "./utils/navigation.mjs";
import { createCard } from "./components/card/card.mjs";
import { createButton } from "./components/button/button.mjs";
import { createHeader } from "./components/header/header.mjs";
import { createFooter } from "./components/footer/footer.mjs";


const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(... createFooter().children);

const [main] = document.getElementsByTagName("main");

window.addEventListener("load", function() {
  populatePageData();
});

// add the sections and cards to main container
const populatePageData = () => {
  // discover section
  const discoverSection = document.createElement("section");
  discoverSection.setAttribute("id", "discover");

  const cardGradient = "linear-gradient(270deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 60%)";

  const featuredCard = createCard(cardGradient, "/assets/Figma_oM8jKpgS12.png", "You know what they say about a", "small package");
  featuredCard.setAttribute("id", "featured");
  const featuredBtn = createButton("Browse Desk Fans", goToPage.bind(this, "Desk Fans"));
  featuredCard.appendChild(featuredBtn);

  const fotwCard = createCard(cardGradient, "/assets/Figma_0pRKIwRnNY.png", "Fan of the Week", "Dyson Air Multiplier", "No Blades, Full Power");
  fotwCard.setAttribute("id", "fotw");
  const fotwBtn = createButton("Explore", goTo404);
  fotwCard.appendChild(fotwBtn);

  const pickAFanCard = createCard(cardGradient, "/assets/fans/Ceiling Fans/CeilingFan1.png", "Pick a fan,", "any fan");
  pickAFanCard.setAttribute("id", "pick-a-fan");
  const pickAFanBtn = createButton("Take Me Places", goTo404);
  pickAFanCard.appendChild(pickAFanBtn);

  discoverSection.appendChild(featuredCard);
  discoverSection.appendChild(fotwCard);
  discoverSection.appendChild(pickAFanCard);

  // explore section
  const exploreSection = document.createElement("section");
  exploreSection.setAttribute("id", "explore");

  const standingCard = createCard(cardGradient, "/assets/fans/Handheld Fans/Handheld1.png", "Handheld Fans", "Give it a spin.");
  standingCard.setAttribute("id", "standing");
  const standingBtn = createButton("Explore", goToPage.bind(this, "Handheld Fans"));
  standingCard.appendChild(standingBtn);

  const deskCard = createCard(cardGradient, "/assets/fans/Desk Fans/DeskFan1.png", "Desk Fans", "Give it a spin.");
  deskCard.setAttribute("id", "desk");
  const deskBtn = createButton("Explore", goToPage.bind(this, "Desk Fans"));
  deskCard.appendChild(deskBtn);

  const ceilingCard = createCard(cardGradient, "/assets/fans/Ceiling Fans/CeilingFan1.png", "Ceiling Fans", "Fans in high places.");
  ceilingCard.setAttribute("id", "ceiling");
  const ceilingBtn = createButton("Explore", goToPage.bind(this, "Ceiling Fans"));
  ceilingCard.appendChild(ceilingBtn);

  const handheldCard = createCard(cardGradient, "/assets/fans/Turbine Fans/Turbine1.png", "Turbine", "Get blown away.");
  handheldCard.setAttribute("id", "turbine");
  const handheldBtn = createButton("Explore", goToPage.bind(this, "Turbine Fans"));
  handheldCard.appendChild(handheldBtn);

  const caseCard = createCard(cardGradient, "/assets/fans/Case Fans/CaseFan1.png", "Case Fans", "Give it a spin.");
  caseCard.setAttribute("id", "case");
  const caseBtn = createButton("Explore", goToPage.bind(this, "Case Fans"));
  caseCard.appendChild(caseBtn);

  const airconCard = createCard(cardGradient, "/assets/imgs/fan-categories/CeilingFan4.png", "Airconditioning", "AC what you did there.");
  airconCard.setAttribute("id", "aircon");
  const airconBtn = createButton("Explore", goToPage.bind(this, "Air Conditioning"));
  airconCard.appendChild(airconBtn);

  exploreSection.appendChild(standingCard);
  exploreSection.appendChild(deskCard);
  exploreSection.appendChild(ceilingCard);
  exploreSection.appendChild(handheldCard);
  exploreSection.appendChild(caseCard);
  exploreSection.appendChild(airconCard);

  const heading = document.createElement("h2");
  let headingText = document.createTextNode("Explore our Fans");
  heading.appendChild(headingText);
  heading.classList.add("heading");
  const exploreBtn = createButton("Explore");
  exploreBtn.setAttribute("id", "exploreBtn");
  heading.appendChild(exploreBtn);
  exploreSection.appendChild(heading);

  // appending cards and sections to main
  main.appendChild(discoverSection);
  main.appendChild(heading);
  main.appendChild(exploreSection);
}