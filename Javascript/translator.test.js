import  morseToText from "./translator.js";

describe('morseToText() tests', () =>{
    it('should have a return', () =>{
      expect(morseToText('a')).toBeDefined();       
    });
    it('should get the same values', () =>{
      expect(morseToText('a')).toStrictEqual('.-');
    });
});
