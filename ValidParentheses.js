/**
 * A function that takes a string of parentheses,
 * and determines if the order of the parentheses is valid.
 * The function should return true if the string is valid, and false if it's invalid.
 * @param  {string} parens
 * @return {boolean}
 */


function validParentheses(parens) {
    let accum = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(' && accum >= 0) {
            ++accum;
        } else --accum
    }
   // return  accum === 0;
    console.log(accum === 0)
}


validParentheses("(())");

