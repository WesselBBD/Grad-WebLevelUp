const createCardInfo = (fanData) => {
    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")

    const detailsP= document.createElement("p");
    detailsP.setAttribute("id","cardInfo");
    let dText = document.createTextNode("RPM - " +fanData.FanRPM+ "\n" + "CFM - "+fanData.FanCFM+ "\n" + "Blade Span (mm) - "+fanData.FanSpanMM+ "\n");

    const coloursList = document.createElement('ul');
    let baseItem = document.createElement('li');
    baseItem.appendChild(document.createTextNode('Base Colour - ' + fanData.FanBaseColourName));
    baseItem.classList.add('baseColour');
    coloursList.appendChild(baseItem);
    document.documentElement.style.setProperty('--base-colour', '#' + fanData.FanBaseColourHex);

    let accentItem = document.createElement('li');
    accentItem.appendChild(document.createTextNode('Accent Colour - ' + fanData.FanAccentColourName));
    accentItem.classList.add('accentColour');
    coloursList.appendChild(accentItem);
    document.documentElement.style.setProperty('--accent-colour', '#' + fanData.FanAccentColourHex);

    detailsP.appendChild(dText);
    detailsP.appendChild(coloursList);
    cardInfo.appendChild(detailsP);

    return cardInfo;
};

export { createCardInfo };