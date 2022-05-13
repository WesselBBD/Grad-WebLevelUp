const makeList = (tag, ...NodeList) => {
    const block = document.createElement(tag);

    const [nodes] = NodeList

    const listed = nodes.map(node => {
        const item = document.createElement('li');;
        item.appendChild(node);
        return item;
    });

    block.append(... listed);

    return block;
}

const makeUL = (...NodeList) => {
    return makeList('ul', NodeList);
}

const makeOL = (...NodeList) => {
    return makeList('ol', NodeList);
}

export { makeUL, makeOL };
