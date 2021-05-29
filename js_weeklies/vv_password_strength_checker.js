/*
  pass is considered strong if below conditions are met:
    1 - 6 <= pass.length <= 20
    2 - contain at least one lowercase, uppercase, digit
    3 - must NOT contain three repeating characters in a row
        ie aaa === Bad
           axa === Strong
    
    return the MINIMUM amount of changes to make s a strong password
    if input S is already strong, return 0

    insertion, deletion, or replace of any one character are all considered as one change


Input: string, to be checked
Out: minimum number of changes required to reach the simplest "Strong" password 
  using the input as a base
Con: none
Edge: 
  - Having a collection of MORE than 3 of the same character
    then Deletion is not an option, and Replace can only apply at specific locations,
    AND insertion can only apply at specific locations, and depending on the length of the
    repetition, might require multiple replacements/insertions to break up the repitition enough

Note: Each attempt at a transformation step should assure that previous conditions aren't broken when
  these steps are taken. ie: Don't delete a character if it would break condition 2

Possible conditions to utilize the different string modification methods:
  Insertion: 
    - Insert when pass is below our min length required
    - Pass DOESNT contain one of the following: lowercase, uppercase, digit
    - POSSIBLY insert a character to solve issue of 3 repeating characters in a row

  Deletion:
    - Pass is above 20 length
    - POSSIBLY to reduce a triple repeating character to less repetitions

  Replace:
    - Insert a lowercase, uppercase, or digit if one is missing
    - Note: Maintains character count
    - POSSIBLY to break a collection of repeating characters
    

Example 1:
Input: 'aaaaaaaaaa' // Condition 1 met, NOT cond. 2 or 3
Output: 3 ('aaaaaaaaaa' -> 'aabaaBaa9a') // 3 replacements to fulfil categories 2 and 3

Example 2:
Input: 'bbbbb' // NOT cond. 1, 2, or 3
Transform: 'bbCbb8' // 1 replacement, 1 insertion
Output: 2

Example 3: 
Input: B8bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb // 41 characters, only cond. 2 is met
Transform: reduce by 21 characters, to B8bbbbbbbbbbbbbbbbbb
  21 steps to fulfil cond. 1 // cond 1 AND 2 are met at this point, now attempt to fulfil cond. 3
  B8bbCbbCbbCbbCbbCbbC 6 steps to change every third repeating character in order to fulfil cond. 3
Output: 27 steps

Example 4:
Input: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbB8 // 41 characters, only cond. 2 is met
Transform: reduce by 21 characters (from the front), to bbbbbbbbbbbbbbbbbbB8
  21 steps to fulfil cond. 1 // cond 1/2 are met, do 3
  bbCbbCbbCbbCbbCbbCB8 // 6 steps to change every third repeating character
Output: 27 steps

function strongPassCheck (input password)
  instantiate counts for the number of lowercase, uppercase, and digit characters present
  instantiate stepsTaken to 0
  determine which conditions are met
  if condition 1 is NOT met
    +1 for the amount of characters to add OR remove to/from the word in order to meet cond. 1
    add to the counts of the lowest qty from set of lowercase, uppercase, digits
      // ie; if counts are 5, 0, 0, for each time a character is added, incr the 0s
  if ONLY condition 1 is met
    +1 or 2 to stepsTaken depending on how many 0s are found in set of lowercase, uppercase, digits
    // simulating replacements
  if ONLYconditions 1 & 2 are met
    +1 step for every third repeating character in a single block, 
      for every case of repeating characters
    -1 step for each step taken in above // simulating that the replacements made above were
      // in ideal positions to break up our repeating characters
  
  return stepsTaken

*/

const strongPasswordChecker = (passToCheck) => {
  let lower = 0;
  let upper = 0;
  let digit = 0;
  let stepsTaken = 0;
  let cond1 = false;
  let cond2 = false;
  let cond3 = false;

  // populate counts for lower/upper/digit
  for (let i = 0; i < passToCheck; i++) {
    if (!isNaN(passToCheck[i])) {
      // IS a digit
      digit += 1;
    } else if (passToCheck[i] === passToCheck[i].toLowerCase()) {
      // lowercase is found
      lower += 1;
    } else if (passToCheck[i] === passToCheck[i].toUpperCase()) {
      // uppercase is found
      upper += 1;
    }
    // rest would be special characters which we don't account for
  }

  // parse for which conditions are met;
  const firstCond = () => passToCheck.length <= 20 && passToCheck.length >= 6;
  const secondCond = () => lower > 0 && upper > 0 && digit > 0;
  const thirdCond = () => {
    // iterate through word testing to see if it has 3 repeating characters
    let lastChar = passToCheck[0];
    let repetitions = 0;
    for (let i = 1; i < passToCheck; i++) {
      if (passToCheck[i] === lastChar) {
        repetitions += 1;
      } else {
        // last char did not repeat
        repetitions = 0;
        lastChar = passToCheck[i];
      }

      if (repetitions >= 3) {
        return false;
      }
    }
    
    return true;
  }

  return stepsTaken;
};