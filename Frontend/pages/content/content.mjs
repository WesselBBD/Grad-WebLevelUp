import { createCard } from "/components/card/card.mjs";
import { createButton } from "/components/button/button.mjs";
import { createStars } from "/components/stars/stars.mjs";
import { createHeader } from "/components/header/header.mjs";
import { createFooter } from "/components/footer/footer.mjs";
import { createCardInfo  } from "/components/cardInfo/cardInfo.mjs";
import { createSlider } from "/components/slider/slider.mjs";

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
    
    const loading = document.createElement("section");
    loading.setAttribute("id", "loading");

    const fanImg= this.document.createElement("img");
    fanImg.setAttribute("src","/assets/imgs/icon-ani.svg");
    fanImg.setAttribute("id","fanImg");
    loading.appendChild(fanImg);

    main.appendChild(loading);
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
    console.log(response.status);
    fanData = await response.json();
    
    main.removeChild(main.firstChild);

    populatePageData();
}

// adds the sections, cards, and fan data to main container
const populatePageData = () => {
    const filterSection = document.createElement("section");
    filterSection.setAttribute("id", "filters");

    const heading = document.createElement("h1");
    let headingText = document.createTextNode("Filters");
    heading.appendChild(headingText);
    heading.classList.add("heading");
    filterSection.appendChild(heading);

    const rpmSlider = createSlider("RPM", {
        initialValue: 6500,
        max: 6500,
        step: 15,
    });
    rpmSlider.setAttribute("id", "rpm");

    const cfmSlider = createSlider("CFM", {
        initialValue: 300,
        max: 300,
        step: 1,
    });
    const spanSlider = createSlider("Blade Span (mm)", {
        initialValue: 10000,
        max: 10000,
        step: 50,
    });
      
    filterSection.appendChild(rpmSlider);
    filterSection.appendChild(cfmSlider);
    filterSection.appendChild(spanSlider);

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
        const stars = createStars(fan.FanStars);
        fanCard.appendChild(stars);
        const viewBtn = createButton("View", viewFan.bind(this, fan, fanCard));
        fanCard.appendChild(viewBtn);
        fanListSection.appendChild(fanCard);
    });

    // append to main
    fansSection.appendChild(selectedFanSection);
    fansSection.appendChild(fanListSection);
    main.appendChild(filterSection);
    main.appendChild(fansSection);
}

// displays the fan data when the View button is clicked
const viewFan = (fan, card) => {
    console.log(fan);
    const selectedFanSection = document.getElementById("selectedFan");
    selectedFanSection.removeChild(selectedFanSection.firstElementChild);

    const fanCard = createCard("linear-gradient(180deg, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0) 100%)", fan.FanImageURL, fan.FanName);
    fanCard.setAttribute("id", "selected")
    const stars = createStars(fan.FanStars);
    fanCard.appendChild(stars);

    // card info
    // add frame
    const prevCard = document.getElementById("chosen");
    if (prevCard) {
        prevCard.removeAttribute("id");
    }
    card.setAttribute("id", "chosen");

    // add info component
    const inf=createCardInfo(fan);
    fanCard.appendChild(inf);

    selectedFanSection.appendChild(fanCard);

    // scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
}