import { createCard } from "/components/card/card.js";
import { createButton } from "/components/button/button.js";
import { createStars } from "/components/stars/stars.js";
import { createHeader } from "/components/header/header.js";
import { createFooter } from "/components/footer/footer.js";

const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(... createFooter().children);

const [main] = document.getElementsByTagName("main");

const fanData = [
    {
        "FanName": "Helix Whirler",
        "CatagoryName": "Turbine Fans",
        "FanRPM": 3000,
        "FanCFM": 200,
        "FanImageURL": "/assets/imgs/fan-categories/CeilingFan1.png",
        "BaseColour": {"MaterialBubbleHex": "x112233", "MaterialName": "Some Wood idk"},
        "AccentColour": {"MaterialBubbleHex": "x332211", "MaterialName": "Some Neon idk"},
    },
    {
        "FanName": "Benito Fanimation",
        "CatagoryName": "Turbine Fans",
        "FanRPM": 3000,
        "FanCFM": 200,
        "FanImageURL": "/assets/imgs/fan-categories/CeilingFan2.png",
        "BaseColour": {"MaterialBubbleHex": "x112233", "MaterialName": "Some Wood idk"},
        "AccentColour": {"MaterialBubbleHex": "x332211", "MaterialName": "Some Neon idk"},
    },
    {
        "FanName": "Sunbeam",
        "CatagoryName": "Turbine Fans",
        "FanRPM": 3000,
        "FanCFM": 200,
        "FanImageURL": "/assets/imgs/fan-categories/CeilingFan3.png",
        "BaseColour": {"MaterialBubbleHex": "x112233", "MaterialName": "Some Wood idk"},
        "AccentColour": {"MaterialBubbleHex": "x332211", "MaterialName": "Some Neon idk"},
    },
    {
        "FanName": "M.Black/457",
        "CatagoryName": "Turbine Fans",
        "FanRPM": 3000,
        "FanCFM": 200,
        "FanImageURL": "/assets/imgs/fan-categories/CeilingFan4.png",
        "BaseColour": {"MaterialBubbleHex": "x112233", "MaterialName": "Some Wood idk"},
        "AccentColour": {"MaterialBubbleHex": "x332211", "MaterialName": "Some Neon idk"},
    },
    {
        "FanName": "Vindair",
        "CatagoryName": "Turbine Fans",
        "FanRPM": 3000,
        "FanCFM": 200,
        "FanImageURL": "/assets/imgs/fan-categories/CeilingFan5.png",
        "BaseColour": {"MaterialBubbleHex": "x112233", "MaterialName": "Some Wood idk"},
        "AccentColour": {"MaterialBubbleHex": "x332211", "MaterialName": "Some Neon idk"},
    }
]

window.addEventListener("load", function() {
    getFans();
    populatePageData();
});

const getFans = () => {
    var params = new URLSearchParams(window.location.search),
        fanCategory = params.get("fanCategory");
    console.log(fanCategory);

    // TODO: make API call to get fans based on the fanCategory and assign to fanData
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