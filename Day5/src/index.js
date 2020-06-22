const evenDigitsOnly = (number) => {
    const stringNumber = number.toString();
    const stringNumberArray = stringNumber.split('');
    const evenNumber = el => parseInt(el) % 2 === 0;
    const isEven = stringNumberArray.every(evenNumber);
    return isEven;
}

module.exports = evenDigitsOnly;