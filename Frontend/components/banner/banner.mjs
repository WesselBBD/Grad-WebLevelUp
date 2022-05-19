import { createLogoBox } from "../logo/logo.mjs";

const createBanner = (bannerImage, bannerTitle) => {
    const banner = document.createElement('div');
    banner.classList.add("banner");
    const logoBox = createLogoBox("banner-img-box");
    banner.style.backgroundImage = "url('assets/imgs/fan-categories/" + bannerImage + "')";
    banner.appendChild(logoBox);
    const title = document.createElement("h1");
    let titleText = document.createTextNode(bannerTitle);
    title.appendChild(titleText);
    banner.appendChild(title);
    return banner;

}

export { createBanner };