import { createStars } from "../stars/stars.js";

const createGlass = (card) => {
    const glass = document.createElement("article");
    card.prepend(glass)
    glass.classList.add("glass");
    glass.style.backgroundImage = card.style.backgroundImage
    const title = document.createElement("h1");
    title.classList.add("title");
    glass.appendChild(title);
    glass.querySelector('.title').innerHTML = card.getElementsByClassName("title")[1].innerHTML
    card.getElementsByClassName('title')[1].style.display = "none";  
    if (card.getElementsByClassName('heading')[0] != null) {

        card.getElementsByClassName('heading')[0].style.display = "none";  

    }

    if (card.getElementsByClassName('subheading')[0] != null) {

     card.getElementsByClassName('subheading')[0].style.display = "none";  
      }

      if (card.getElementsByClassName('button')[0] != null) {

        card.getElementsByClassName('button')[0].style.display = "none";  

         }

    if (card.getElementsByClassName("stars")[0] != null) {

        const stars = createStars();
        glass.appendChild(stars);
        glass.getElementsByClassName("star-box")[0].innerHTML = card.getElementsByClassName("star-box")[1].innerHTML;
        card.getElementsByClassName("star-box")[1].style.display = "none";
    }

};

export { createGlass };
