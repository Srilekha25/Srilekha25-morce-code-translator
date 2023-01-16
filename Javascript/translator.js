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
	" ": "/",
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

const textToMorce = () =>{
  var inputValue = document.getElementById("textarea__input--english").value.toUpperCase();
  let splittedInputValue = inputValue.split("");
  let translatedToMorce = splittedInputValue.map((character)=>{
    if(!mapping[character]){
      return "�";
    }
    else{
      return mapping[character];
    }
  });
  document.getElementById("textarea__input--morce").value = translatedToMorce.join(" ");
};


// Function to search value in an object
function getKey(obj, val) {
  return Object.keys(obj).find((key) => obj[key] === val);
}

//Morce to text convertor
function morse2text() {
  let code = document.getElementById("textarea__input--morce").value;
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
let inputMorce = document.querySelector("#textarea__input--morce");
let radioButtonEnglish = document.querySelector("#button__english--submit");
let radioButtonMorce = document.querySelector("#button__morce--submit");
let labelInput = document.querySelector("#input__box--eng");
let labelMorce = document.querySelector("#input__box--morce");
let body = document.querySelector("#landing-page");

inputMorce.disabled=true;
inputEnglish.setAttribute("placeholder", "Enter the English text here.");
inputMorce.setAttribute("placeholder", "Translates to Morce code here.");

inputEnglish.addEventListener("change", (e)=>{
  console.log("coming inside change");
  textToMorce();
  inputMorce.disabled=true;
inputEnglish.setAttribute("placeholder", "Enter the English text here.");
inputMorce.setAttribute("placeholder", "Translates to Morce code here.");
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
  document.getElementById("textarea__input--morce").value = "";
  inputMorce.disabled = true;
  inputEnglish.disabled = false;
});

radioButtonEnglish.addEventListener("click", (event) => {
  event.preventDefault();
  inputMorce.disabled = true;
  inputEnglish.disabled = false;
  inputEnglish.setAttribute("placeholder", "Enter the English text here.");
  inputMorce.setAttribute("placeholder", "Translates to Morce code here.");
});

radioButtonMorce.addEventListener("click", (event) => {
  event.preventDefault();
  inputEnglish.disabled = true;
  inputMorce.disabled = false;
  inputMorce.setAttribute("placeholder", "Enter the Morce code here.");
  inputEnglish.setAttribute("placeholder", "Translates to English text here.");
});

let dot = document.querySelector(".dot");
let slash = document.querySelector(".slash");
let space = document.querySelector(".space");
let back = document.querySelector(".back");
let buttonsForMorce = document.querySelector(".container__buttons-for-morce");

var morcebtns = document
  .querySelector(".container__buttons-for-morce")
  .querySelectorAll("button");
morcebtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className == "dot") {
      inputMorce.value += ".";
    } else if (btn.className == "slash") {
      inputMorce.value += "/";
    } else if (btn.className == "space") {
      inputMorce.value += " ";
    } else if (btn.className == "back") {
      inputMorce.value = inputMorce.value.substr(
        0,
        inputMorce.value.length - 1
      );
    } else {
      inputMorce.value += inputMorce.value;
    }
    morse2text();
  });
});
