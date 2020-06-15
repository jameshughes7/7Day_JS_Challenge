const returnSum2Digits = ((number) => {
    const stringIntegerArray = number.toString().split("");
    const sum = stringIntegerArray.reduce(function(previous, current) {
        return parseInt(previous) + parseInt(current);
    }, 0);
    console.log(`The value of sum is: ${sum}`);
    return sum;
})

returnSum2Digits(29);
module.exports = returnSum2Digits;

//Given a two digit integer
//Return the sum of its digits
//e.g for number = 29 the output of the 2 digits should be 11