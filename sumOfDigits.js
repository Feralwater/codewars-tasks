/**
 * Given n, take the sum of the digits of n. If that value has more than one digit,
 * continue reducing in this way until a single-digit number is produced.
 * The input will be a non-negative integer.
 * @param  {number} n
 * @return {number}
 */

function digital_root(n) {
    do {
        n = sum(n)
    } while (n > 9)
     return +n
}

const sum = (number) => [...number.toString()].reduce((x, y) => +x + +y);


