import { setAttributes } from "../../utils/helpers.mjs";
import { addArg } from "../../utils/navigation.mjs";

const createSlider = (
  title,
  { initialValue = 0, min = 0, max = 100, step = 10, arg = title, onInput = () => {}, onChange = () => {} } = {}
) => {
  const sliderBox = document.createElement("section");
  sliderBox.classList.add("slider-box");

  const label = document.createElement("label");
  const mark = document.createElement("mark");

  mark.innerText = initialValue;
  label.innerText = `${title} `;
  label.appendChild(mark);

  const input = document.createElement("input");

  setAttributes(input, {
    type: "range",
    id: title,
    name: title,
    min,
    max,
    step,
    value: initialValue
  });

  input.oninput = (event) => {
    mark.innerText = event.target.value;
    onInput(event.target.value);
  };

  input.addEventListener('change', function (ev) {
    addArg(arg, this.value);
    onChange();
  });

  sliderBox.appendChild(label);
  sliderBox.appendChild(input);

  return sliderBox;
};

export { createSlider };
