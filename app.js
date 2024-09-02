"use strict";
let id = document.querySelector("p");
let adviceText = document.querySelector("h1");
let btn = document.querySelector("#advice-btn");

async function getAdvice() {
    let url = "https://api.adviceslip.com/advice";
    try {
        let request = await fetch(url);
        let response = await request.json();
        console.log(response.slip.id);
        adviceText.innerText = `"${response.slip.advice}"`;
        id.innerText = `ADVICE #${response.slip.id}`

    }catch (error){
        console.log(error);
    }
}
btn.addEventListener("click",getAdvice)
window.addEventListener("load",getAdvice)
