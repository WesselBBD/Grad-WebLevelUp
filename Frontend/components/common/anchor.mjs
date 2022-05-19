
const anchorLink = (text, onclickFunc = 0, iconURL = 0) => {
    const a = document.createElement('a')
    //a.setAttribute('href', href);

    a.addEventListener("click", () => {
        if (onclickFunc == 0) { alert("do some data query") } 
        else {onclickFunc();}

    }); 

    if (iconURL !== 0) {
        const icon = document.createElement('img');
        icon.src = iconURL;
        icon.setAttribute('id', 'email-icon')
        a.appendChild(icon);
    }

    const textNode = document.createTextNode(text);
    a.appendChild(textNode);
    
    return a;
}

export { anchorLink };
