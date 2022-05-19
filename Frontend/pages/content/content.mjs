import { createCard } from "/components/card/card.mjs";
import { createButton } from "/components/button/button.mjs";
import { createStars } from "/components/stars/stars.mjs";
import { createHeader } from "/components/header/header.mjs";
import { createFooter } from "/components/footer/footer.mjs";

const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(... createFooter().children);

const [main] = document.getElementsByTagName("main");

const host = "https://zkk9ts3etf.execute-api.af-south-1.amazonaws.com";
const api = "/dev/api/fans?category=";

let fanData = [];

window.addEventListener("load", function() {
    getFans();
    //populatePageData();
});

const getFans = async () => {
    let params = new URLSearchParams(window.location.search),
        fanCategory = params.get("fanCategory").replace(' ', '+');
    console.log(fanCategory);

    let route = host + api + fanCategory;

    const header = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Host': host
        }
    }

    const response = await fetch(route, header);
    fanData = await response.json();
    populatePageData();
}

// adds the sections, cards, and fan data to main container
const populatePageData = () => {
    const fansSection = document.createElement("section");
    fansSection.setAttribute("id", "fans");

    // selected fan section
    const selectedFanSection = document.createElement("section");
    selectedFanSection.setAttribute("id", "selectedFan");
    const pickAFanCard = createCard("linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40%)", "/assets/imgs/fan-categories/DeskFanDisplay.png", "Pick a fan", "any fan");
    pickAFanCard.setAttribute("id", "pick-a-fan");
    selectedFanSection.appendChild(pickAFanCard);

    // fans section
    const fanListSection = document.createElement("section");
    fanListSection.setAttribute("id", "fanList");

    fanData.forEach(fan => {
        const fanCard = createCard("linear-gradient(360deg, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.2) 100%)", fan.FanImageURL, fan.FanName);
        const stars = createStars(Math.round(Math.random() * 5));
        fanCard.appendChild(stars);
        const viewBtn = createButton("View", viewFan.bind(this, fan, fanCard));
        fanCard.appendChild(viewBtn);
        fanListSection.appendChild(fanCard);
    });

    // append to main
    fansSection.appendChild(selectedFanSection);
    fansSection.appendChild(fanListSection);
    main.appendChild(fansSection);
}

// displays the fan data when the View button is clicked
const viewFan = (fan, card) => {
    console.log(fan);
    const selectedFanSection = document.getElementById("selectedFan");
    selectedFanSection.removeChild(selectedFanSection.firstElementChild);

    const fanCard = createCard("linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 30%)", fan.FanImageURL, fan.FanName);
    fanCard.setAttribute("id", "selected")
    const stars = createStars(Math.round(Math.random() * 5));
    fanCard.appendChild(stars);

    // card info

    // add frame
    const prevCard = document.getElementById("chosen");
    if (prevCard) {
        prevCard.removeAttribute("id");
    }
    card.setAttribute("id", "chosen");

    // add info component

    selectedFanSection.appendChild(fanCard);

    // scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
}