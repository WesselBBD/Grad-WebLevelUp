const createCardInfo = (card, fanID) => {

    const cardInfo = document.createElement("section");
    cardInfo.classList.add("cardInfo")
    // Query database, use FanID and get required info
    // Query-fanID
    // Get the Model and MAxRPM from Fan table
    // WikiContent from Wiki table

    // NB: Can create view for these 3 columns


    let info = "FAN INFO" ;

    let infoText = document.createTextNode(info);
    cardInfo.appendChild(infoText);


    return cardInfo;



};

export { createCardInfo };