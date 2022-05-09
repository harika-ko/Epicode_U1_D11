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

