/**
 * Create a function that takes an integer argument of seconds and converts the value into a string describing
 * how many hours and minutes comprise that many seconds.
 * Any remaining seconds left over are ignored.
 * Note:
 * The string output needs to be in the specific form - "X hour(s) and X minute(s)"
 * @param  {number} seconds
 * @return {string}
 */
toTime = (seconds) => console.log(`${Math.floor(seconds / 3600)} hour(s) and ${Math.floor((seconds % 3600) / 60)} minute(s)`)

toTime(323500)