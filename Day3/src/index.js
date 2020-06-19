const firstDuplicate = (nums) => {
    const firstDup = {};
    for (let num of nums) {
        console.log(Object.getOwnPropertyNames(firstDup))
        if (firstDup.hasOwnProperty(num)) {
            return num;
        }
        firstDup[num] = num;
    }

    return -1;
}

module.exports = firstDuplicate;