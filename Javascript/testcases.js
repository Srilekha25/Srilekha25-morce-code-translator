import { getKey } from "./translator.js";
import { morseToText } from "./translator.js";
import {
  resetButton,
  inputEnglish,
  inputMorse,
  labelInput,
  labelMorse,
  buttonsForMorce,
  morsebtns,
} from "./dom-utils.js";


let inputEnglishForTest = inputEnglish.value;
let mappingKey = inputEnglish.value.split("");
mappingKey.map((character)=>{

  const getKeyAndValues = () => {
    return new Promise((resolve, reject) => {
      const key = getKey(inputEnglishForTest, character);
      setTimeout(() => {
        if(key == ""){
          reject(new Error("No key is found"));
        }
  resolve(key);
      });
    });
  };
});

// export const getKeyAndValues = (inputEnglishForTest, ) =>{

// }