const makeArrayConsecutive = (nums) => {
    let count = 0;
    const sortedNums = nums.sort();
    const min = sortedNums[0];
    const max = sortedNums[sortedNums.length -1];

    console.log(`sortedNums: ${sortedNums}`);
    console.log(`min: ${min}`);
    console.log(`max: ${max}`);

    for (let i = min; i < max; i++) {
        if (sortedNums.indexOf(i) === -1) {
            count ++
        }
    }
    return count;
}

module.exports = makeArrayConsecutive;

// For a list of statues = [6,2,3,8]
// Need to makes statues in sorted order from smallest to largest
// And 
// The result of makeArrayConsecutive(statues) = 3;
// Statues needed is 4,5,7
