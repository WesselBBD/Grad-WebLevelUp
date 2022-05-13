import { createStars } from "./components/stars/stars.js";
import { createCard } from "./components/card/card.js";
import { createHeader } from "./components/header/Header.js";

const [header] = document.getElementsByTagName("header");

header.append(... createHeader().children);

/*
const button = document.getElementById("add-star");
button.addEventListener("click", function () {
  const stars = createStars(Math.round(Math.random() * 5));

  const [body] = document.getElementsByTagName("body");

  body.appendChild(stars);
});
*/

// creates two cards - Featured and Fan of the Week
window.addEventListener("load", function() {
  const card = createCard("ceiling.jpg", "You know what they say about a", "small package");
  card.setAttribute("id", "featured");

  const card1 = createCard("ceiling.jpg", "Fan of the Week", "Dyson Air Multiplier", "No Blades, Full Power");
  card1.setAttribute("id", "fotw");
  const stars = createStars(Math.round(Math.random() * 5)); // test to add star component to card
  card.appendChild(stars);
  
  const [body] = document.getElementsByTagName("body");
  body.appendChild(card);
  body.appendChild(card1);
});