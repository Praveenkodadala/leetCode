/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        columnNumber = Math.floor((columnNumber - 1) / 26);
        result = alpha[remainder] + result;
    }

    return result;
};

console.log(convertToTitle(28)); // Output: "AB"
