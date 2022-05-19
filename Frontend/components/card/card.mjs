
const createCard = (cardGradient, cardImage, cardTitle , cardHeading = '', cardSubheading = '') => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.style.background = cardGradient + ", url('" + cardImage + "')";
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";

    
    const title = document.createElement("h1");
    let titleText = document.createTextNode(cardTitle);
    title.appendChild(titleText);
    card.appendChild(title);

    if (cardHeading != '') {
        const heading = document.createElement("h2");
        let headingText = document.createTextNode(cardHeading);
        heading.appendChild(headingText);
        card.appendChild(heading);
    }

    if (cardSubheading != '') {
        const subheading = document.createElement("h3");
        let subheadingText = document.createTextNode(cardSubheading);
        subheading.appendChild(subheadingText);
        card.appendChild(subheading);
    }

    return card;
};

export { createCard };