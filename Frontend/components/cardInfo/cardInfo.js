const createCardInfo = (card, fanID) => {

    const fanData= {"id":"d74b11ec-598b-7e88-8d27-0eab84de5e5f","FanName":"Metl Wind","FanCategoryName":"Desk Fans","FanRPM":530,"FanCFM":2300,"FanSpanMM":235,"FanImageURL":"https://commons.wikimedia.org/wiki/File:Test.png","FanBaseColourName":"Stainless Steel","FanBaseColourHex":"BDBCBA","FanAccentColourName":"Stainless Steel","FanAccentColourHex":"BDBCBA"}

    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")

    const detailsP= document.createElement("p");
    let dText = document.createTextNode(fanData.FanRPM + "\n" + fanData.FanCFM + "/n" + fanData.FanSpanMM);
    detailsP.appendChild(dText);


    const colorsP= document.createElement("p");
    let colText = document.createTextNode(fanData.FanBaseColourName+ "\n" +  fanData.FanAccentColourName + "\n");
    colorsP.appendChild(colText);

    cardInfo.appendChild(detailsP);
    cardInfo.appendChild(colorsP);






  

    let infoText = document.createTextNode(info);
    cardInfo.appendChild(infoText);


    return cardInfo;



};

export { createCardInfo };