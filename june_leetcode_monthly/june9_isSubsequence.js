/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let currentSubIdx = 0;
    for (let i = 0; i < t.length && currentSubIdx < s.length; i++) {
        currentSubIdx += s[currentSubIdx] === t[i] ? 1 : 0;
    }
    
    return currentSubIdx === s.length;
};