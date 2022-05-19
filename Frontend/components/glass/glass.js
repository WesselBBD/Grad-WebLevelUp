import { createStars } from "../stars/stars.js";

const createGlass = (card) => {
    const glass = document.createElement("article");
    //const card = document.getElementById(cardID);
    card.prepend(glass)
    glass.classList.add("glass");
    glass.style.backgroundImage = card.style.backgroundImage
    const title = document.createElement("h1");
    title.classList.add("title");
    glass.appendChild(title);
    glass.querySelector('.title').innerHTML = card.getElementsByClassName("title")[1].innerHTML
    card.getElementsByClassName('title')[1].style.display = "none";  
    if (card.getElementsByClassName('heading')[0] != null) {
      //  const heading = card.querySelector('.heading');
      //const heading = document.createElement("h2");
      //heading.classList.add("heading");
     // glass.appendChild(heading);
     // glass.querySelector('.heading').innerHTML = card.querySelector('.heading').innerHTML
     // glass.appendChild(card.querySelector('.heading').innerHTML);
        card.getElementsByClassName('heading')[0].style.display = "none";  
    }

    if (card.getElementsByClassName('subheading')[0] != null) {
     // const subheading = document.createElement("h3");
     // subheading.classList.add("subheading");
     // if (qfunc == 0) {
     // glass.appendChild(subheading);
     // glass.querySelector('.subheading').innerHTML = card.querySelector('.subheading').innerHTML;
     // } 
     // else {
     //   let textdata = document.createTextNode(qfunc);
     //   subheading.appendChild(textdata);
     //   glass.appendChild(subheading);
     card.getElementsByClassName('subheading')[0].style.display = "none";  
      }

      if (card.getElementsByClassName('button')[0] != null) {
        // const subheading = document.createElement("h3");
        // subheading.classList.add("subheading");
        // if (qfunc == 0) {
        // glass.appendChild(subheading);
        // glass.querySelector('.subheading').innerHTML = card.querySelector('.subheading').innerHTML;
        // } 
        // else {
        //   let textdata = document.createTextNode(qfunc);
        //   subheading.appendChild(textdata);
        //   glass.appendChild(subheading);
        card.getElementsByClassName('button')[0].style.display = "none";  
         }
       // const subheading = card.querySelector('.subheading');

       // glass.appendChild(card.querySelector('.subheading').innerHTML);
    //}
    if (card.getElementsByClassName("stars")[0] != null) {

        const stars = createStars();
        glass.appendChild(stars);
        glass.getElementsByClassName("star-box")[0].innerHTML = card.getElementsByClassName("star-box")[1].innerHTML;
        card.getElementsByClassName("star-box")[1].style.display = "none";
    }
    //card.prepend(glass)
  /*  return glass;*/
};

export { createGlass };
