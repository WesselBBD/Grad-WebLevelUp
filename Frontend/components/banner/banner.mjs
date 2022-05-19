import { createLogoBox } from "../logo/logo.mjs";

const createBanner = (bannerImage, bannerTitle) => {
    const banner = document.createElement('div');
    banner.classList.add("banner");
    const logo = document.createElement("img");
    logo.setAttribute("src", "assets/imgs/logo.svg");
    logo.classList.add("logo-img");
    banner.style.backgroundImage = "url('assets/imgs/fan-categories/" + bannerImage + "')";
    banner.appendChild(logo);
    const title = document.createElement("h1");
    let titleText = document.createTextNode(bannerTitle);
    title.appendChild(titleText);
    banner.appendChild(title);
    return banner;

}

export { createBanner };