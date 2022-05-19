import { createHeader } from "../components/header/header.mjs";
import { createFooter } from "../components/footer/footer.mjs";

const [header] = document.getElementsByTagName("header");
header.append(...createHeader().children);

const [footer] = document.getElementsByTagName("footer");
footer.append(...createFooter().children);

const [main] = document.getElementsByTagName("main");