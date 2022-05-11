import { createStars } from "./components/stars.js";

const button = document.getElementById("add-star");

button.addEventListener("click", function () {
  const stars = createStars(Math.round(Math.random() * 5));

  const [body] = document.getElementsByTagName("body");

  body.appendChild(stars);
});
