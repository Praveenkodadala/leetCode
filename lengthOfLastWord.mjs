// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
// let result = s.split(' ').filter((word)=> word)[s.split(' ').filter((word)=> word).length-1].length

// return result

// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "))


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        // Skip trailing spaces
        console.log("s[i] before", s[i])
        if (s[i] === ' ' && length === 0) {
            continue;
        }

        console.log("After",s[i])

        // Break when the last word ends
        if (s[i] === ' ') {
            break;
        }

        length++;
    }

    return length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
