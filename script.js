"use strict";
const requestAdvice = async function (url) {
    const response = await fetch(url);
    const data = await response.json();
    showBody(data);
};
const showBody = (data) => {
    const p = document.querySelector("p");
    if (p) {
        p.innerHTML = data.slip.advice;
        localStorage.setItem("phrase", data.slip.advice);
    }
};
const button = document.querySelector("button");
const request = () => {
    requestAdvice("https://api.adviceslip.com/advice");
};
button?.addEventListener("click", request);
const value = localStorage.getItem("phrase")
    ? localStorage.getItem("phrase")
    : null;
const p = document.querySelector("p");
if (p && value) {
    p.innerHTML = value;
}
