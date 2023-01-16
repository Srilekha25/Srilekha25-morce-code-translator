const mapping = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  ".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"!": "-.-.--",
	"-": "-....-",
	"/": "-..-.",
	"@": ".--.-.",
	"(": "-.--.",
	")": "-.--.-",
	" ": " ",
};

//Text to Morce translator

var englishSubmitButton = document.getElementById("button__english--submit");

// englishSubmitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   text2morse();
// });

// var morceSubmitButton = document.getElementById("button__morce--submit");

// morceSubmitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   morse2text();
// });

const textToMorse = () =>{
  var inputValue = document.getElementById("textarea__input--english").value.toUpperCase();
  let splittedInputValue = inputValue.split("");
  let translatedToMorse = splittedInputValue.map((character)=>{
    if(!mapping[character]){
      return "�";
    }
    else{
      return mapping[character];
    }
  });
  document.getElementById("textarea__input--morce").value = translatedToMorse.join(" ");
};


// Function to search value in an object
function getKey(obj, val) {
  return Object.keys(obj).find((key) => obj[key] === val);
}

//Morce to text convertor
function morse2text() {
  let code = document.getElementById("textarea__input--morse").value;
  let arr1 = code.split(" ");

  let arr2 = arr1.map((x) => {
    if (getKey(mapping, x)) {
      return getKey(mapping, x);
    } else if (x == "") {
      return " ";
    } else {
      return "�";
    }
  });

  let text = arr2.join("").replace(/\s\s+/g, " ");
  document.getElementById("textarea__input--english").value = text;
}


const resetButton = document.querySelector("#reset-button");
let inputEnglish = document.querySelector("#textarea__input--english");
let inputMorse = document.querySelector("#textarea__input--morse");
let radioButtonEnglish = document.querySelector("#button__english--submit");
let radioButtonMorse = document.querySelector("#button__morse--submit");
let labelInput = document.querySelector("#input__box--eng");
let labelMorse = document.querySelector("#input__box--morse");
let body = document.querySelector("#landing-page");

inputMorse.disabled=true;
inputEnglish.setAttribute("placeholder", "Enter the English text here.");
inputMorse.setAttribute("placeholder", "Translates to Morse code here.");
radioButtonMorse.disabled=true;

inputEnglish.addEventListener("change", (e)=>{
  console.log("coming inside change");
  inputMorse.disabled=true;
  inputEnglish.setAttribute("placeholder", "Enter the English text here.");
  inputMorse.setAttribute("placeholder", "Translates to Morse code here.");
  textToMorse();
});

// inputEnglish.addEventListener("change", (event)=>{
//   textToMorce();
//   inputMorce.disabled=true;
// inputEnglish.setAttribute("placeholder", "Enter the English text here.");
// inputMorce.setAttribute("placeholder", "Translates to Morce code here.");
// })

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("textarea__input--english").value = "";
  document.getElementById("textarea__input--morse").value = "";
  inputMorse.disabled = true;
  inputEnglish.disabled = false;
});

radioButtonEnglish.addEventListener("click", (event) => {
  event.preventDefault();
  inputMorse.disabled = true;
  inputEnglish.disabled = false;
  inputEnglish.setAttribute("placeholder", "Enter the English text here.");
  inputMorse.setAttribute("placeholder", "Translates to Morse code here.");
});

radioButtonMorse.addEventListener("click", (event) => {
  event.preventDefault();
  inputEnglish.disabled = true;
  inputMorse.disabled = false;
  inputMorse.setAttribute("placeholder", "Enter the Morse code here.");
  inputEnglish.setAttribute("placeholder", "Translates to English text here.");
});

let dot = document.querySelector(".dot");
let slash = document.querySelector(".slash");
let space = document.querySelector(".space");
let back = document.querySelector(".back");
let buttonsForMorce = document.querySelector(".container__buttons-for-morse");

var morsebtns = document
  .querySelector(".container__buttons-for-morse")
  .querySelectorAll("button");
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
    morse2text();
  });
});
