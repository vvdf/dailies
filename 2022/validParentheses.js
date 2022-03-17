var isValid = function(s) {
  let bracketStack = []; // instantiate stack
  let keyOpen = { "{": "}", "[": "]", "(": ")" }; // open to closing bracket key

  for (let i = 0; i < s.length; i += 1) {
    if (keyOpen.hasOwnProperty(s[i])) {
      bracketStack.push(s[i]); // add open bracket to stack
    } else if (s[i] === keyOpen[bracketStack[bracketStack.length - 1]]) {
      bracketStack.pop(); // close bracket where correct last closer is found
    } else {
      bracketStack.push(s[i]); // populate bracket length with error
      break; // end iteration once error found
    }
  }

  return bracket.length < 1; // return true if all correct open parentheses have closed
}

/*
 * Runtime: 73 ms, faster than 73.52% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 42.1 MB, less than 56.76% of JavaScript online submissions for Valid Parentheses.
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
