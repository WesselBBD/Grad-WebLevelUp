const createCardInfo = (fanData) => {

    // const fanData= {"id":"d74b11ec-598b-7e88-8d27-0eab84de5e5f","FanName":"Metl Wind","FanCategoryName":"Desk Fans","FanRPM":530,"FanCFM":2300,"FanSpanMM":235,"FanImageURL":"https://commons.wikimedia.org/wiki/File:Test.png","FanBaseColourName":"Stainless Steel","FanBaseColourHex":"BDBCBA","FanAccentColourName":"Stainless Steel","FanAccentColourHex":"BDBCBA"}


    console.log("FAN DATA");
    console.log(fanData);

    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")

    const detailsP= document.createElement("article");
    let dText = document.createTextNode("RPM" +fanData.FanRPM+ "\n" + "CFM"+fanData.FanCFM);
    detailsP.appendChild(dText);


    const colorsP= document.createElement("p");
    let colText = document.createTextNode("Base Colour: "+ fanData.BaseColour.MaterialName+ "\n" + "Accent Colour: "+ fanData.AccentColour.MaterialName + "\n");
    colorsP.appendChild(colText);

    cardInfo.appendChild(detailsP);
    cardInfo.appendChild(colorsP);


    return cardInfo;



};

export { createCardInfo };