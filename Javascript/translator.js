import mapping from "./mapping.js";

//Text to morse convertor
export const textToMorse = () => {
  var inputValue = document
    .getElementById("textarea__input--english")
    .value.toUpperCase();
  let splittedInputValue = inputValue.split("");
  let translatedToMorse = splittedInputValue.map((character) => {
    if (!mapping[character]) {
      return "🤷";
    } else {
      return mapping[character];
    }
  });
  document.getElementById("textarea__input--morse").value =
    translatedToMorse.join(" ");
};

// Function to search value in an object
export const getKey = (obj,val) =>{
  return Object.keys(obj).find((key) => obj[key] === val);
};


//Morse to text convertor
export const morseToText = () => {
  let morceCode = document.getElementById("textarea__input--morse").value;
  let splittedArray = morceCode.split(" ");

  let arr2 = splittedArray.map((character) => {
    if (getKey(mapping, character)) {
      return getKey(mapping, character);
    } else if (character == "") {
      return " ";
    }else {
      return "🤷";
    }
  });

  let text = arr2.join("").replace(/\s\s+/g, " ");
  document.getElementById("textarea__input--english").value = text;
}
