// Chaqirish usullari

// 1. Tag nomi orqali
// document.getElementsByTagName("h1")

// 2. Id orqali
// document.getElementById("birinchiHelloWorld")

// 3. class orqali
// document.getElementsByClassName("ikkinchiHelloWorld")

function changeTheme() {
    let el = document.getElementById("body")
    // document.getElementById("birinchiHelloWorld").style = `font-size: 12px; color: ${color}`

    el.classList.toggle("tun")
}

function addText(text) {
    let el = document.getElementById("textUchunJoy");
    el.innerText = text
}

function saqlash() {
    let inputValue = document.getElementById("input").value;
    let ul = document.getElementById("textUchunJoy")
    let li = document.createElement("li")
    li.innerText = inputValue

    ul.appendChild(li);
    document.getElementById("input").value = ""
}

function inputChange() {
    let changeP = document.getElementById("changeP")
    let changeInput = document.getElementById("changeInput")

    changeP.innerText = changeInput.value
}