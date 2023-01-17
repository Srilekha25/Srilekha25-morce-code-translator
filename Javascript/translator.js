import mapping from "./mapping.js";

//Text to morse convertor
export const textToMorse = () => {
  var inputValue = document
    .getElementById("textarea__input--english")
    .value.toUpperCase();
 let convertedToValue = getValue(inputValue);
  document.getElementById("textarea__input--morse").value =
  convertedToValue.join(" ");
};

export const getValue = (inputValue) => {

  let splittedInputValue = inputValue.split("");
  return splittedInputValue.map((character) => {
    if (!mapping[character]) {        //If there is no character matched
      return "🤷";
    } else {
      return mapping[character];      //Returns the character
    }
  });
}

// Function to search value in an object
export const getKey = (obj,val) =>{
  return Object.keys(obj).find((key) => obj[key] === val);
};

export const removeSpaces = (arr) =>{
   return arr.join("").replace(/\s\s+/g, " ");
}

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

  let text = removeSpaces(arr2);
  document.getElementById("textarea__input--english").value = text;
}

console.log("remove",removeSpaces([" ", " ", " ", " A"]));

export default {getValue, getKey, removeSpaces};