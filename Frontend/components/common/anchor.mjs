
const anchorLink = (text, href) => {
    const a = document.createElement('a')
    a.setAttribute('href', href);

    const textNode = document.createTextNode(text);
    a.appendChild(textNode);
    
    return a;
}

export { anchorLink };
