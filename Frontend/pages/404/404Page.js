import { createHeader } from "/components/header/header.js";
import { createFooter } from "../../components/footer/footer.js";


const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(... createFooter().children);

const [main] = document.getElementsByTagName("main");

window.addEventListener("load", function() {

    const rotateFanSection = this.document.createElement("section");

    

    main.appendChild(rotateFanSection);

});