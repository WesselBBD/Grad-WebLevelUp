const createLogoBox = (id) => {
  const logoBox = document.createElement("section");
  logoBox.classList.add("logo-box");
  logoBox.id = id;

  const logo = document.createElement("img");

  logo.setAttribute("src", "/assets/imgs/logo.svg");

  logo.classList.add("logo-img");
  logo.onclick = goToHome;

  logoBox.appendChild(logo);

  return logoBox;
}

const goToHome = () => {
  location.href = '/index.html';
}

export { createLogoBox };
