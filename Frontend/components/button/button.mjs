const createButton = (buttonText="View",somefunc =  0) => {
    const button = document.createElement("button");
    button.innerText = buttonText;
    button.type = "button";
    button.name = "button";
    button.classList.add("button");
   // const clicked = 0;
    button.addEventListener("click", () => {
        if (somefunc == 0) { alert("do some data query") } 
        else {somefunc();}

    }); 
    return button
}
export { createButton };