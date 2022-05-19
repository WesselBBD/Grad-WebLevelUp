// Creates Header Component

import { makeUL } from "../common/list.mjs";
import { anchorLink } from "../common/anchor.mjs";
import { createLogoBox } from "../logo/logo.mjs";
import { goToPage } from "../../utils/navigation.mjs";

const createHeader = () => {
  //base
  const header = document.createElement("header");

  const logoBox = createLogoBox("header-img-box")

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
    anchorLink("Ceiling", goToPage.bind(this, "Ceiling Fans")),
    anchorLink("Desk", goToPage.bind(this, "Desk Fans")),
    anchorLink("Handheld", goToPage.bind(this, "Handheld Fans")),
    anchorLink("Air Conditioning", goToPage.bind(this, "Air Conditioning Fans")),
    anchorLink("Turbines", goToPage.bind(this, "Turbine Fans")),
    anchorLink("PC Case", goToPage.bind(this, "Turbine Fans")),
    anchorLink("Newsletter", goToPage.bind(this, "Turbine Fans"), '/assets/icons8-mail-24.png')
  );

  nav.appendChild(menu);
  navBox.appendChild(nav);

  return navBox;
}

export { createHeader };
