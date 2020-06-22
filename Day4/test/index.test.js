const sumAllPrimes = require('../src/index.js');
const expect = require('chai').expect;

describe('sumAllPrimes test', () => {
    it('number is divisible by one and itself', () => {
        //arrange
        const firstNum = 10;
        const secondNum = 977;
        const thirdNum = -1;

        //act
        const result1 = sumAllPrimes(firstNum);
        const result2 = sumAllPrimes(secondNum);
        const result3 = sumAllPrimes(thirdNum);

        //log
        console.log(`Result 1: ${result1}`);
        console.log(`Result 2: ${result2}`);
        console.log(`Result 3: ${result3}`);

        //assert
        expect(result1).to.eq(17);
        expect(result2).to.eq(73156);
        expect(result3).to.eq(false);
    })
});