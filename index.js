//EX7: Write a function to change the h1 text to something else

function changeH1() {
    let h1Node = document.getElementById("heading")
    h1Node.innerText = "Hello! I am the new Heading"
}

//EX8: Write a function to change the page background color

function bgColor() {
    let bodyNode = document.getElementById("body")
    bodyNode.classList.add("pink")
}

//EX9: Write a function to change the footer address with a fake one

function changeFooter() {
    let footerNode = document.getElementById("footerid")
    footerNode.innerHTML = "Sedanstrasse 21A, Wuerzburg, Germany"
}

//EX10: Write a function to add a CSS class to every Amazon link

function addClass() {
    let linkNode = document.getElementsByTagName("a")
    for (let i = 0; i < linkNode.length; i++) {
        linkNode[i].classList.add("cssclass")
    }
}

//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function toggleCSSClass() {
    let imagesNode = document.getElementsByTagName("img")
    for (i = 0; i < imagesNode.length; i++) {
        imagesNode[i].classList.toggle("cssvisibility")
    }
}

//EX12: Write a function to color the price of the products in a different one every time it’s invoked

function colorPrice() {
    let priceNode = document.getElementsByClassName("price")
    for (i = 0; i < priceNode.length; i++) {
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        priceNode[i].style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
}