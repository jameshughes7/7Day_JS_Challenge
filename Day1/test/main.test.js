const addBorder = require('../src/main.js');
const expect = require('chai').expect

// import {expect} from 'chai';
// import {addBorder} from '../src/main.js';


describe('addBorder()', () => {

    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];
        
        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);

        //assert
        expect(result).to.eql(
            ["*****",
            "*abc*",
            "*ded*",
            "*****"]
        )
    })
})