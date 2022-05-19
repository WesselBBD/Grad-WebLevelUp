const createCardInfo = (fanData) => {
    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")

    const detailsP= document.createElement("p");
    detailsP.setAttribute("id","cardInfo");
<<<<<<< HEAD
    let dText = document.createTextNode("RPM: " +fanData.FanRPM+ "\n" + "CFM: "+fanData.FanCFM+ "\n");
    

    
    const colorsP= document.createElement("p");
    colorsP.setAttribute("id","cardInfo");
    let colText = document.createTextNode("\n"+"Base Colour: " + fanData.FanBaseColourName);
    
    detailsP.appendChild(dText);
    detailsP.appendChild(colText);


    // const colorsP= document.createElement("p");
    // colorsP.setAttribute("id","cardInfo");
    // let colText = document.createTextNode("Base Colour: ");
    // colorsP.appendChild(colText);

    const colBub=document.createElement("img");
    colBub.setAttribute("src","../../assets/imgs/star-temp.svg")
    colBub.setAttribute("id","colBubble");
    let temp = fanData.FanBaseColourHex;
    let styleCol= "color:#"+ temp
    colBub.setAttribute("style",styleCol); 
    colorsP.appendChild(colBub);

    const colBubAcc=document.createElement("img");
    colBubAcc.setAttribute("src","../../assets/imgs/star-temp.svg")
    colBubAcc.setAttribute("id","colBubble");
    let tempAcc = fanData.FanAccentColourHex;
    let styleColAcc= "color:#"+ tempAcc
    colBubAcc.setAttribute("style",styleColAcc); 
    colorsP.appendChild(colBubAcc);


    const accCol=document.createElement("p");
    accCol.setAttribute("id","cardInfo");
    let accText= document.createTextNode("\n" + "Accent Colour: " + fanData.FanAccentColourName)
    accCol.appendChild(accText);

    detailsP.append(accCol);
=======
    let dText = document.createTextNode("RPM - " +fanData.FanRPM+ "\n" + "CFM - "+fanData.FanCFM+ "\n" + "Blade Span (mm) - "+fanData.FanSpanMM+ "\n");

    const coloursList = document.createElement('ul');
    let baseItem = document.createElement('li');
    baseItem.appendChild(document.createTextNode('Base Colour - ' + fanData.FanBaseColourName));
    baseItem.classList.add('baseColour');
    coloursList.appendChild(baseItem);
    document.documentElement.style.setProperty('--base-colour', '#' + fanData.FanBaseColourHex);
>>>>>>> feature/content-page-updates

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