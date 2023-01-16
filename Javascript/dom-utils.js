let resetButton = document.querySelector("#reset-button");
let inputEnglish = document.querySelector("#textarea__input--english");
let inputMorse = document.querySelector("#textarea__input--morse");
let labelInput = document.querySelector("#input__box--eng");
let labelMorse = document.querySelector("#input__box--morse");

//Morse Buttons
let buttonsForMorce = document.getElementById("container__buttons-for-morse");
var morsebtns = document
  .querySelector(".container__buttons-for-morse")
  .querySelectorAll("button");


export {resetButton, inputEnglish, inputMorse, labelInput, labelMorse, buttonsForMorce, morsebtns};