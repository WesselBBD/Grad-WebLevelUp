import { createStars } from "./components/stars/stars.js";
import { createCard } from "./components/card/card.js";
import { createButton } from "./components/button/button.js";
import { createHeader } from "./components/header/header.js";
import { createFooter } from "./components/footer/footer.js";

const [header] = document.getElementsByTagName("header");
header.append(... createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(... createFooter().children);

/*const button = document.getElementById("add-star");
button.addEventListener("click", function () {
  const stars = createStars(Math.round(Math.random() * 5));

  const [body] = document.getElementsByTagName("body");

  body.appendChild(stars);
});*/

const [main] = document.getElementsByTagName("main");

// creates the sections and cards on the home page
window.addEventListener("load", function() {
  // discover section
  const discoverSection = this.document.createElement("section");
  discoverSection.setAttribute("id", "discover");

  const featuredCard = createCard("CeilingFan4.png", "You know what they say about a", "small package");
  featuredCard.setAttribute("id", "featured");
  const featuredBtn = createButton("Browse Desk Fans");
  featuredCard.appendChild(featuredBtn);

  const fotwCard = createCard("CeilingFan4.png", "Fan of the Week", "Dyson Air Multiplier", "No Blades, Full Power");
  fotwCard.setAttribute("id", "fotw");
  const fotwBtn = createButton("Explore");
  fotwCard.appendChild(fotwBtn);

  const pickAFanCard = createCard("CeilingFan3.png", "Pick a fan,", "any fan");
  pickAFanCard.setAttribute("id", "pick-a-fan");
  const pickAFanBtn = createButton("Take Me Places");
  pickAFanCard.appendChild(pickAFanBtn);

  discoverSection.appendChild(featuredCard);
  discoverSection.appendChild(fotwCard);
  discoverSection.appendChild(pickAFanCard);

  // explore section
  const exploreSection = this.document.createElement("section");
  exploreSection.setAttribute("id", "explore");

  const standingCard = createCard("CeilingFan4.png", "Standing Fans", "Give it a spin.");
  standingCard.setAttribute("id", "standing");
  const standingBtn = createButton("Explore");
  standingCard.appendChild(standingBtn);

  const deskCard = createCard("DeskFan1.png", "Desk Fans", "Give it a spin.");
  deskCard.setAttribute("id", "desk");
  const deskBtn = createButton("Explore");
  deskCard.appendChild(deskBtn);

  const ceilingCard = createCard("CeilingFan1.png", "Ceiling Fans", "Fans in high places.");
  ceilingCard.setAttribute("id", "ceiling");
  const ceilingBtn = createButton("Explore");
  ceilingCard.appendChild(ceilingBtn);

  const handheldCard = createCard("Turbine1.png", "Turbine", "Get blown away.");
  handheldCard.setAttribute("id", "turbine");
  const handheldBtn = createButton("Explore");
  handheldCard.appendChild(handheldBtn);

  const caseCard = createCard("CaseFan5.png", "Case Fans", "Give it a spin.");
  caseCard.setAttribute("id", "case");
  const caseBtn = createButton("Explore");
  caseCard.appendChild(caseBtn);

  const airconCard = createCard("CeilingFan4.png", "Airconditioning", "AC what you did there.");
  airconCard.setAttribute("id", "aircon");
  const airconBtn = createButton("Explore");
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
  
  
  // appending cards and sections to body
  const [main] = document.getElementsByTagName("main");
  main.appendChild(discoverSection);
  main.appendChild(heading);
  main.appendChild(exploreSection);
});