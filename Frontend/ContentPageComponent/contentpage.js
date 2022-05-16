import { createCard } from "../card/card.js";
import { makeUL } from "../components/common/list.js";

const createContent = (
    FanName,
    { ImageURI, FanModel, FanMaxRPM} = {}
  ) => {
    const contentBox = document.createElement("section");
    const _cardSubheading = makeUL(
        "Fan Model: " + FanModel,
        "Fan MaxRPM: " + FanMaxRPM
      );
      const contentCard = createCard(
        cardImage = ImageURI,
        cardTitle = "Fan Details",
        cardHeading = FanName,
        cardSubheading = _cardSubheading
      );

      contentBox.appendChild(contentCard);
      return contentBox;

  }
  export { createContent };