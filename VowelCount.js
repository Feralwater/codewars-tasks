/**
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 * @param  {string} str
 * @return {number}
 */

function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                vowelsCount++;
                break
            case 'e':
                vowelsCount++;
                break
            case 'i':
                vowelsCount++;
                break
            case 'o':
                vowelsCount++;
                break
            case 'u':
                vowelsCount++;
                break
            default:
                vowelsCount;
                break
        }
    }
    return vowelsCount;
}

console.log(getCount('aaaadvjhnd;ovihg;eihbv   ffrghg juykdn aupol'));

