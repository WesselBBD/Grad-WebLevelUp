const createCardInfo = (fanData) => {

    // const fanData= {"id":"d74b11ec-598b-7e88-8d27-0eab84de5e5f","FanName":"Metl Wind","FanCategoryName":"Desk Fans","FanRPM":530,"FanCFM":2300,"FanSpanMM":235,"FanImageURL":"https://commons.wikimedia.org/wiki/File:Test.png","FanBaseColourName":"Stainless Steel","FanBaseColourHex":"BDBCBA","FanAccentColourName":"Stainless Steel","FanAccentColourHex":"BDBCBA"}


    console.log("FAN DATA");
    console.log(fanData);

    

    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")

    const detailsP= document.createElement("p");
    detailsP.setAttribute("id","cardInfo");
    let dText = document.createTextNode("RPM: " +fanData.FanRPM+ "\n" + "CFM: "+fanData.FanCFM+ "\n");
    

    
    const colorsP= document.createElement("p");
    colorsP.setAttribute("id","cardInfo");
    let colText = document.createTextNode("\n"+"Base Colour: " + fanData.BaseColour.MaterialName);
    
    detailsP.appendChild(dText);
    detailsP.appendChild(colText);


    // const colorsP= document.createElement("p");
    // colorsP.setAttribute("id","cardInfo");
    // let colText = document.createTextNode("Base Colour: ");
    // colorsP.appendChild(colText);

    const colBub=document.createElement("img");
    colBub.setAttribute("src","../../assets/imgs/star-temp.svg")
    colBub.setAttribute("id","colBubble");
    let temp = fanData.BaseColour.MaterialBubbleHex.substring(1);
    let styleCol= "color:#"+ temp
    colBub.setAttribute("style",styleCol); 
    colorsP.appendChild(colBub);

    const colBubAcc=document.createElement("img");
    colBubAcc.setAttribute("src","../../assets/imgs/star-temp.svg")
    colBubAcc.setAttribute("id","colBubble");
    let tempAcc = fanData.AccentColour.MaterialBubbleHex.substring(1);
    let styleColAcc= "color:#"+ tempAcc
    colBubAcc.setAttribute("style",styleColAcc); 
    colorsP.appendChild(colBubAcc);


    const accCol=document.createElement("p");
    accCol.setAttribute("id","cardInfo");
    let accText= document.createTextNode("\n" + "Accent Colour: " + fanData.AccentColour.MaterialName)
    accCol.appendChild(accText);

    detailsP.append(accCol);


    cardInfo.appendChild(detailsP);
    cardInfo.appendChild(colorsP);


    return cardInfo;

    


};

export { createCardInfo };