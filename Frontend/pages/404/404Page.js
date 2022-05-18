import { createHeader } from "../../components/header/header.js";
import { createFooter } from "../../components/footer/footer.js";


const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(... createFooter().children);

const [main] = document.getElementsByTagName("main");

window.addEventListener("load", function() {

    const rotateFanSection = this.document.createElement("section");
    rotateFanSection.setAttribute("id", "fan");

    const error = document.createElement("p");
    error.setAttribute("id","errorText");
    let textEr = this.document.createTextNode("ERROR 4");
    error.appendChild(textEr);

    const fanImg= this.document.createElement("img");
    fanImg.setAttribute("src","/assets/imgs/icon-ani.svg");
    fanImg.setAttribute("id","fanImg");
    error.appendChild(fanImg);

    const f=this.document.createTextNode("4");
    error.appendChild(f);

 


    rotateFanSection.appendChild(error);
  


    

    main.appendChild(rotateFanSection);

});