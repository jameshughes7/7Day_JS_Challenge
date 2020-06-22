const reverseString = require('../src/index');
const expect = require('chai').expect;

describe('Reverse String test', () => {
    it('should reverse string with no whitespace', () => {
        //arrange
        const string = "James";

        //act
        const result = reverseString(string);

        //log
        console.log(`Result: ${result}`);

        //assert
        expect(result).to.eq("semaJ");
    });

    it('should single string with whitespace', () => {
        //arrange
        const string = "Hello World!";

        //act
        const result = reverseString(string);

        //log
        console.log(`Result: ${result}`);

        //assert
        expect(result).to.eq("!dlroW olleH");
    });
});
