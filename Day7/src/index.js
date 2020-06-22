const properNounCorrection = (string) => {
    const words = string.split(' ');
    const correctedWords = words.map((word) => {
        const firstChar = word[0].toUpperCase();
        const restOfWord = word.slice(1, word.length).toLowerCase();
        const result = firstChar.concat(restOfWord);
        return result;
    })
    return correctedWords.join(' ');
}

module.exports = properNounCorrection;

//Proper nouns always begin with a Capital letter followed by lowercase letters
//for noun pAris, properNounCorrection, output should be "Paris"