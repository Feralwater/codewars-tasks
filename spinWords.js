/**
 * Function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.
 * Strings passed in will consist of only letters and spaces.
 * Spaces will be included only when more than one word is present.
 * @param  {string} string
 * @return {string}
 */
function spinWords(string) {
    let arr = string.split(' ');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = arr[i].length < 5 ? arr[i] : arr[i].split('').reverse().join('');
    }
    return arr1.join(' ');
}

spinWords("Welcome")