const createLogoBox = (id) => {
  const logoBox = document.createElement("section");
  logoBox.classList.add("logo-box");
  logoBox.id = id;

  const logo = document.createElement("img");

  logo.setAttribute("src", "/assets/imgs/logo.svg");

  logo.classList.add("logo-img");

  logoBox.appendChild(logo);

  return logoBox;
}

export { createLogoBox };
