const properNounCorrection = require('../src/index');
const expect = require('chai').expect;

describe('Proper Noun Correction Test', () => {
    it('corrects string with no whitespace', () => {
        //Arrange
        const string = "tooting"

        //Act
        const result = properNounCorrection(string);

        //Log
        console.log(`result: ${result}`);

        //Expect
        expect(result).to.eq("Tooting")
        
    });

    it('corrects string with whitespace', () => {
        //Arrange
        const string = "nEw yORK"

        //Act
        const result = properNounCorrection(string);

        //Log
        console.log(`result: ${result}`);

        //Expect
        expect(result).to.eq("New York")
        
    });
});