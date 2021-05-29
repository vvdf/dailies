// Status: Almost Complete for NlogN
//   Need to check each character reduction step to see if the total number of
//   each characters in T, are still present, rather than checking when they
//   reach 0. Possibly utilizing the 'stillValid' function
// Challenge: Solve for linear complexity
// Source: https://leetcode.com/problems/minimum-window-substring/

const minWindow = (s, t) => {
  // complexity NlogN solution that _should_ be accurate
  let result = "";
  let minimumWindow = s;

  const reduceWord = (originalWord, charBank) => {
    let breakCase = false;
    let currentWord = originalWord
    let finalWord;
    
    for (let i = 0; i < originalWord.length && !breakCase; i++) {
      if (charBank[originalWord[i]] === 1) {
        breakCase = true;
        finalWord = originalWord.substr(i, originalWord.length);
      } else if (charBank[originalWord[i]] > 1) {
        charBank[originalWord[i]] = charBank[originalWord[i]] - 1;
      }
    }

    return finalWord;
  };

  const cleanWordEdges = (word) => {
    let start;
    let end;
    for (let i = 0; i < word.length; i++) {
      if (t.includes(word[i])) {
        start = start === undefined ? i : start;
        end = i;
      } 
    }
    return word.substring(start, end + 1);
  }

  const countChars = (word) => {
    let charSet = {};
    for (let i = 0; i < word.length; i++) {
      if (t.includes(word[i])) {
        charSet[word[i]] = charSet[word[i]] === undefined ? 1 : charSet[word[i]] + 1;
      } 
    }
    return charSet;
  };

  const stillValid = (word) => {
    let charSet = countChars(word);
    let origSet = countChars(t);
    for (let key in origSet) {
      if (!charSet[key] || charSet[key] < origSet[key]) {
        return false;
      }
    }
    return true;
  }

  // console.log(stillValid("BAANC"), stillValid("ANC"), stillValid("BNC"));

  minimumWindow = cleanWordEdges(minimumWindow);

  // reduce word slides the window from the left, cursor adjustment will test for all words
  // sliding the window downward from the right side
  for (let cursor = s.length; cursor >= 0; cursor--) {
    let newWord = s.substring(0, cursor);
    if (stillValid(newWord)) {
      // this is to test that our new word still contains at least the correct amount of each
      // character featured in T
      let newMin = reduceWord(newWord, countChars(newWord));
      minimumWindow = !!newMin && newMin.length < minimumWindow.length ? newMin : minimumWindow;
    }
  }

  result = minimumWindow;

  return result;
};


console.log(minWindow("ADOBECODEBANC", "BANC"));
console.log(minWindow("ABCDDBE", "DB"));
console.log(minWindow("ABCBDSBSDABCCBCCCHLASBCBCJSCBASCBJBCSDHABCBCJSDC", "BCD"));
console.log(minWindow("XYZ", "BCD"));
// console.log(minWindow("a", "aa"));

/*
  Problem / V&V Notes

  Minimum Windows Substring
  "given a string S and a string T, find a min window in S which contains string T
  in complexity O(N)"

  (window is a substring of S that contains all the letters of T in any order)

  ex
  In: S = ADOBECODEBANC, T = ABC
  Out: BANC

  Inp: string S, string T
  Out: substring of S containing all letters of T, 
    empty string if no substr of S contains all of T
  Com: O(N)
  Edg: 
    - not all letters of T exist in S
    - multiple occurences of letters from T appearing in S
      (input is guaranteed that there will only be one unique minimum)
*/