// Creates Header Component

import { makeUL } from "../common/list.js";
import { anchorLink } from "../common/anchor.js";

const createHeader = () => {
  //base
  const header = document.createElement("header");

  const logoBox = createLogoBox()

  const navBox = createNavBox();

  header.appendChild(logoBox);
  header.appendChild(navBox);

  return header;
};

const createNavBox = () => {
  const navBox = document.createElement("section");
  navBox.id = "header-nav-box";

  const nav = document.createElement("nav");
  const menu = makeUL(
    anchorLink("Ceiling Fans", '/CeilingFans.html'),
    anchorLink("Desk Fans", '/DeskFans.html'),
    anchorLink("Handheld Fans", '/HandheldFans.html'),
    anchorLink("Air Conditioning Fans", '/ACFans.html'),
    anchorLink("Turbine Fans", '/TurbineFans.html')
  );

  nav.appendChild(menu);
  navBox.appendChild(nav);

  return navBox;
}

const createLogoBox = () => {
  const logoBox = document.createElement("section");
  logoBox.id = "header-img-box";

  const logo = document.createElement("img");
  logo.setAttribute("src", "assets/imgs/logo.svg");

  logoBox.appendChild(logo);

  return logoBox;
}

export { createHeader };
