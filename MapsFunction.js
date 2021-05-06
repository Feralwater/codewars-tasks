/**
 * Write a function which maps a function over the lists in a list:
 * function gridMap(fn,xss) { return [[]]; }
 * @param  {function} fn
 * @param  {[[string|number]]} a
 * @return {[array]}
 */

function gridMap(fn, a) {
    let c = []
    for (let i = 0; i < a.length; i++) {
        c.push(a[i].map(fn))
    }
    return c
}

console.log(gridMap(x => x + 1, [[1, 2, 3, 4], [5, 6, 7, 8, 9], [0, 2, 4]]))