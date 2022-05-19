import { createHeader } from "../components/header/header.mjs";
import { createFooter } from "../components/footer/footer.mjs";
import { createButton } from "../components/button/button.mjs";

const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(...createFooter().children);

const [form] = document.getElementsByTagName("form");

const host = "https://zkk9ts3etf.execute-api.af-south-1.amazonaws.com";
const endpoint = "/dev/api/contact-details";

const sendFormData = async (data) => {
  return await fetch(`${host}${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Host: host,
    },
    body: data,
  });
};

form.onsubmit = (event) => {
  event.preventDefault();

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  const data = Object.fromEntries(new FormData(event.target));
  const { name, surname, email } = data;

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, surname, email, categoryId: "2" }),
    redirect: "follow",
  };
  let success = false;

  fetch(
    "https://zkk9ts3etf.execute-api.af-south-1.amazonaws.com/dev/api/contact-details",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      const [main] = document.getElementsByTagName("main");

      main.innerHTML = "";

      const logo = document.createElement("img");
      logo.setAttribute("src", "../assets/imgs/logo.svg");

      const heading = document.createElement("h2");
      heading.innerText = "Newsletter Success!";

      const backButton = createButton(
        "BACK TO HOME",
        () => (window.location.href = "../index.html")
      );

      main.appendChild(logo);
      main.appendChild(heading);
      main.appendChild(backButton);
    })
    .catch((error) => console.log("error", error));
};
