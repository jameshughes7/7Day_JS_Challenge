const returnSum2Digits = require('../src/index.js');
const expect = require('chai').expect;

describe('sum of 2 digits test', () => {
    it('should return 11 from 2 and 9', () => {
        const result = returnSum2Digits(29);
        expect(result).to.eq(11);
    });
});

