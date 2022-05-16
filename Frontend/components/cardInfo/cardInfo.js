const createCardInfo = (card, fanID) => {

    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")
    // Query database, use FanID and get required info
    let info = "FAN INFO" ;

    let infoText = document.createTextNode(info);
    cardInfo.appendChild(infoText);


    return cardInfo;



};

export { createCardInfo };