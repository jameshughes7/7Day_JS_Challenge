const firstDuplicate = require('../src/index.js');
const expect = require('chai').expect;

describe('return firstDuplicate Test', () => {
    it('return first duplicate value', () => {
        //arrange
        const nums = [2,1,3,5,3,2];

        //act
        const result = firstDuplicate(nums);

        //log
        console.log(result);

        //assert
        expect(result).to.eq(3);

    });

    it('returns -1 when no duplicate values', () => {
        //arrange
        const nums = [2,1,3,5,4,6];

        //act
        const result = firstDuplicate(nums)
        
        //log
        console.log(`Result is: ${result}`)

        //assert
        expect(result).to.eq(-1);
    });
});