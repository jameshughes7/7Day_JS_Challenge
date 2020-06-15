// const addBorder = (() => {
//     console.log("This is the addBorder function")
// });

// module.exports = addBorder;

const addBorder = ((array) => {
    const wall = '*'.repeat(array[0].length + 2);
    array.unshift(wall);
    array.push(wall);

    console.log(array.length);
    console.log(array[0]);
    
    for (let i = 1; i < array.length - 1; i++) {
        array[i] = '*'.concat(array[i], '*');
    }

    return array;
});

module.exports = addBorder;

// ["*****",
// "*abc*",
// "*ded*",
// "*****"]
    