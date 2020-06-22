const evenDigitsOnly = require('../src/index');
const expect = require('chai').expect;

describe('evenDigitsOnly test', () => {
    it('returns true for 248622', () => {
        //arrage
        const num = 2468

        //act
        const result = evenDigitsOnly(num);

        //log
        console.log(result);

        //assert
        expect(result).to.eq(true);
    });

    it('returns false for 1357', () => {
        //arrage
        const num = 1357

        //act
        const result = evenDigitsOnly(num);

        //log
        console.log(result);

        //assert
        expect(result).to.eq(false);
    });
});