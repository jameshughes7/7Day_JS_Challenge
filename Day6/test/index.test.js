const makeArrayConsecutive = require('../src/index');
const expect = require('chai').expect;

describe('makeArrayConsecutive test', () => {
    it('should return the number of elements needed to make array consecutive', () => {
        // Arrange
        const nums = [6,2,3,8];

        // Act
        const result = makeArrayConsecutive(nums);

        // Log
        console.log(`Result: ${result}`);

        // Assert
        expect(result).to.eq(3);
    });
});