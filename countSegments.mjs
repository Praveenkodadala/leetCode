/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.trim() === "") {
        return 0;
    }
    return s.split(" ").filter(segment => segment !== "").length;
    
};

console.log(countSegments("Hello, my name is John"))