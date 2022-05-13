// Creates Footer Component
import { createLogoBox } from "../logo/logo.js";

const createFooter = () => {
  const footer = document.createElement("footer");

  const logoBox = createLogoBox("footer-img-box")

  const tsandcsBox = createTsAndCs();

  footer.appendChild(logoBox);
  footer.appendChild(tsandcsBox);

  return footer;
};

const createTsAndCs = () => {
  const tcBox = document.createElement("section");
  tcBox.id = "footer-tc-box";

  const tcParagraph = document.createElement("p");
  const tcText = document.createTextNode("© 2022 OnlyFans™. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement and the South African Privacy Rights. OnlyFans™ may find you slackin’ for reading all of this. OnlyFans™ questions why you are doing this. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission by Morgan Freeman.")
  tcParagraph.appendChild(tcText);

  tcBox.appendChild(tcParagraph);

  return tcBox;
}

export { createFooter };
