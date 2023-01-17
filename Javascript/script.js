import {resetButton, inputEnglish, inputMorse, labelInput, labelMorse, buttonsForMorce, morsebtns} from "./dom-utils.js";
import {morseToText, textToMorse} from "./translator.js";

inputMorse.disabled = true;
inputEnglish.setAttribute("placeholder", "Enter the English text here.");
inputMorse.setAttribute("placeholder", "Translates to Morse code here.");
buttonsForMorce.style.display="none";

inputEnglish.addEventListener("input", (e) => {
    e.preventDefault();
    textToMorse();
  });
  
  inputMorse.addEventListener("input", (e) => {
    e.preventDefault();
    morseToText();
  });
  
  resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("textarea__input--english").value = "";
    document.getElementById("textarea__input--morse").value = "";
    inputMorse.disabled = true;
    inputEnglish.disabled = false;
    buttonsForMorce.style.display="none";
    
  });
  
  labelInput.addEventListener("click", (event) => {
    event.preventDefault();
    inputMorse.disabled = true;
    inputEnglish.disabled = false;
    inputEnglish.setAttribute("placeholder", "Enter the English text here.");
    inputMorse.setAttribute("placeholder", "Translates to Morse code here.");
    document.getElementById("textarea__input--english").value = "";
    document.getElementById("textarea__input--morse").value = "";
    buttonsForMorce.style.display="none";
  });
  
  labelMorse.addEventListener("click", (event) => {
    event.preventDefault();
    inputEnglish.disabled = true;
    inputMorse.disabled = false;
    inputMorse.setAttribute("placeholder", "Enter the Morse code here.");
    inputEnglish.setAttribute("placeholder", "Translates to English text here.");
    document.getElementById("textarea__input--english").value = "";
    document.getElementById("textarea__input--morse").value = "";
    buttonsForMorce.style.display="flex";
  });
  
  
  morsebtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.className == "dot") {
        inputMorse.value += ".";
      } else if (btn.className == "slash") {
        inputMorse.value += "/";
      } else if (btn.className == "space") {
        inputMorse.value += " ";
      } else if (btn.className == "back") {
        inputMorse.value = inputMorse.value.substr(
          0,
          inputMorse.value.length - 1
        );
      } else {
        inputMorse.value += inputMorse.value;
      }
      morseToText();
    });
  });
  
