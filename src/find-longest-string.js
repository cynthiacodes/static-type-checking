"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Find the longest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param stringArr - array of strings
 * @returns the longest string
 */
function findLongestString(stringArr) {
    let longestString = stringArr[0];
    for (const str of stringArr) {
        if (str.length > longestString.length) {
            longestString = str;
        }
    }
    return longestString;
}
// export function so it can be used in test file
exports.default = findLongestString;
