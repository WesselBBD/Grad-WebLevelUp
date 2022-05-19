import { createHeader } from "/components/header/header.mjs";
import { createFooter } from "/components/footer/footer.mjs";




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
    

    const sub=this.document.createElement("p");
    let subtitleT= this.document.createTextNode("It has hit the fan");
    sub.setAttribute("id","err");
    sub.appendChild(subtitleT);
    error.appendChild(sub);

    const link= this.document.createElement("a");
    link.setAttribute("href","/index.html");
    link.setAttribute("id","homeLink")
    let linkTe= this.document.createTextNode("Breeze over to Main Menu")
    link.appendChild(linkTe);



    rotateFanSection.appendChild(error);

    
    rotateFanSection.appendChild(link);    
    
    // rotateFanSection.appendChild(sub);

    main.appendChild(rotateFanSection);

});