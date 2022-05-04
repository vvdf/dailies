/**
 * Runtime: 90 ms, faster than 58.92% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44 MB, less than 46.49% of JavaScript online submissions for Reverse Integer.
 */

var reverse = function(x) {
    let result = 0;
    for(let i = Math.abs(x); i > 0; i = Math.floor(i / 10)) {
        result = result * 10 + (i % 10);
    }
    return result > Math.pow(2, 31) ? 0 : x < 0 ? result * -1 : result;
};

/*
 *
 *
 *
 */
