import { createStars } from "./components/stars/stars.mjs";
import { createCard } from "./components/card/card.mjs";
import { createButton } from "./components/button/button.mjs";
import { createHeader } from "./components/header/header.mjs";
import { createFooter } from "./components/footer/footer.mjs";

const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(...createFooter().children);

const [main] = document.getElementsByTagName("main");

// creates two cards - Featured and Fan of the Week
window.addEventListener("load", function () {
  const card = createCard(
    "ceiling.jpg",
    "You know what they say about a",
    "small package"
  );
  card.setAttribute("id", "featured");

  const card1 = createCard(
    "ceiling.jpg",
    "Fan of the Week",
    "Dyson Air Multiplier",
    "No Blades, Full Power"
  );
  card1.setAttribute("id", "fotw");
  const stars = createStars(Math.round(Math.random() * 5)); // test to add star component to card
  card.appendChild(stars);
  const button = createButton();
  card1.appendChild(button);
  const [body] = document.getElementsByTagName("body");

  body.appendChild(card);
  body.appendChild(card1);

  main.appendChild(card);
  main.appendChild(card1);
});
