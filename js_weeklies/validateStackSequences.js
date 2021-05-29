/*
Validate Stack Sequences
Leetcode: https://leetcode.com/problems/validate-stack-sequences/
Runtime: 64 ms, faster than 37.08% of JavaScript online submissions for Validate Stack Sequences.
Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Validate Stack Sequences.

Inp: 2 arrays of integers, comprising the sequences of Push and Pop operations on a stack 
Out: Boolean, representing if the push sequences can work on a given empty stack
Con: None
Edg: Pop length > push length, returns false
Optimizations: Lengths are 0 || 1, we can break out immediately

*/

var validateStackSequences = function (pushed, popped) {
  if (pushed.length === 0 && popped.length === 0) return true;

  let stack = [];
  
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (popped.length > 0 && popped[0] === stack[stack.length - 1]) {
      stack.pop();
      popped.shift();
    }
  }

  return popped.length === 0;

};

var pushy = [1, 2, 3, 4, 5];
var poppedy = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushy, poppedy));

var pushy2 = [1, 2, 3, 4, 5];
var poppedy2 = [8, 5, 3, 2, 1];

console.log(validateStackSequences(pushy2, poppedy2));


/*
  function validate stack sequences (takes a PUSHED and POPPED input arrays)
    if PUSHED and POPPED lengths are 0
      return true
      
    create an empty STACK
    // not creating copies, operating directly on inputted arrays PUSHED and POPPED, mutation is allowed
    
    loop/iterate through every element in PUSHED, starting from first element
      push current element in PUSHED into our STACK
      // perform check to see how many POP operations we can then perform on our STACK
      loop through each element in POPPED until the top of STACK doesn't correspond to the
      first element in POPPED
        remove top of stack
        remove popped[0]
    
    check length of POPPED, if POPPED is empty, we were able to successfully utilize every potential POP operation
      thus return true
    else if POPPED.length > 0, we weren't able to POP out everything
      return false
*/












