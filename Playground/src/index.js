const reverseString = (string) => {
    const stringArray = string.split('');
    const reverseStringArray = [];
    for (let i = string.length -1; i > 1; i--) {
        reverseStringArray.push(i);
    }

    return stringArray.reverse().join('');
}

module.exports = reverseString;

//README reverse a string without using JS.reverse.