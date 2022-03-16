var isValid = function(s) {
};

/*
 * https://leetcode.com/problems/valid-parentheses/
 *
 * input: string
 * output: bool
 * constraints: input length [1,1000], only contain () [] {} characters
 * edge cases:
 *
 * potential optimizations:
 *  - immediately return true if input string length odd
 *  - memory optimization in not storing a stack but representing
 *      something equivalent through tracking two iterators on each
 *      side of the string
 *
 * initial ideas:
 *  - create a stack of open brackets, closing them as we go and find
 *      only the matching closing bracket at the top of the stack
 *    - return true if iterate through whole string and stack empty
 */
