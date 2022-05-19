const createLogoBox = (id) => {
  const logoBox = document.createElement("section");
  logoBox.classList.add("logo-box");
  logoBox.id = id;

  const logo = document.createElement("img");
  logo.setAttribute("src", "/assets/imgs/logo.svg");
  logo.classList.add("logo-img");

  logoBox.appendChild(logo);

  return logoBox;
<<<<<<< Updated upstream:Frontend/components/logo/logo.mjs
}
=======
};
>>>>>>> Stashed changes:Frontend/components/logo/logo.js

export { createLogoBox };
