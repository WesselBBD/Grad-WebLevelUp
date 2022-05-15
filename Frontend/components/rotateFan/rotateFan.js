const createRotateFan = () => {
    const rotateFanComp = document.createElement("section");
    rotateFanComp.classList.add("rotateFan");
  
    const fanImg = document.createElement("img");
    fanImg.setAttribute("src", "assets/imgs/icon-ani.svg");
    fanImg.classList.add("fan-img");
  
    rotateFanComp.appendChild(fanImg);
  
    return rotateFanComp;
  }
  
  export { createRotateFan };