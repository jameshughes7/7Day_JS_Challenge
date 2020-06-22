// Sum all the prime numbers up to and including the provider number
// A prime number is defined as a number greater than one and having only divisors, one and itself
// E.g. 2 is a prime number because it's only divisible by one and two.
// The provided number must not be a prime.
// sumAllPrimes(10) should return 17
// sumAllPrimes(977) should reutrn 73156

const sumAllPrimes = (number) => {
    if (number < 0) {
        return false;
    }

    const primesArray = [];
    const numberArray = [];
    for (let i = 2; i <= number; i++) {
        numberArray.push(i);
    }
    for (num of numberArray) {
        if (isNumPrime(num)) {
            primesArray.push(num);
        }
    }
    const sum = primesArray.reduce(function(prev,current) {
        return prev + current;
    }, 0);

    return sum;
}

const isNumPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

module.exports = sumAllPrimes;
