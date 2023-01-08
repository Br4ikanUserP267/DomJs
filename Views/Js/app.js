function createTag(tag) {
    var tagHTML = document.createElement(tag);
    return tagHTML;
}

function createTagText(tag, text) {

    var tagHTML = createTag(tag);
    var textoHTML = document.createTextNode(text);
    tagHTML.appendChild(textoHTML);
    return tagHTML;

}

function createTagImg(path) {

    var tagImg = document.createElement("img");
    tagImg.src = path;
    return tagImg;

}

function createTagA(texto, url) {

    var tagA = createTagText("a", texto);
    tagA.href = url;
    return tagA;
}

function addElement(element) {

    document.body.appendChild(element);

}

function addElementContainer(container, elemento) {

    container.appendChild(elemento);

}