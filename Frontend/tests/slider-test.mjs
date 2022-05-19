import { createSlider } from "./components/slider/slider.js";

const [main] = document.getElementsByTagName("main");

const rpmSlider = createSlider("RPM", {
  initialValue: 3000,
  max: 6500,
  step: 15,
});
const cfmSlider = createSlider("CFM", {
  initialValue: 260,
  max: 300,
  step: 1,
});
const priceSlider = createSlider("Price", {
  initialValue: 1500,
  max: 10000,
  step: 50,
});

main.appendChild(rpmSlider);
main.appendChild(cfmSlider);
main.appendChild(priceSlider);
