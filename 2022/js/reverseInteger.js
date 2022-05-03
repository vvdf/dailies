/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    for(let i = Math.abs(x); i > 0; i = Math.floor(i / 10)) {
        result = result * 10 + Math.abs(i - Math.floor(i / 10) * 10);
    }
    if (result > Math.pow(2, 31)) {
        return 0;
    }
    return x < 0 ? result * -1 : result;
};
