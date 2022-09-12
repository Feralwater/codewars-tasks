/**
 * Definition:
 * An element is leader if it is greater than The Sum all the elements to its right side.
 * Task:
 * Given an array/list [] of integers,
 * Find all the LEADERS in the array.
 * @param  {[number]} arr [array of integers]
 * @return {[number]}    [array of leaders]
 */

function arrayLeaders(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr.slice(i + 1).reduce((a, b) => a + b, 0)) {
            result.push(arr[i]);
        }
    }
    return result;
}
