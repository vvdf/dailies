// Longest Nice Substring, https://leetcode.com/problems/longest-nice-substring
// Runtime: 612 ms, faster than 100.00% of JavaScript online submissions for Longest Nice Substring.
// Memory Usage: 55.3 MB, less than 100.00% of JavaScript online submissions for Longest Nice Substring.

const niceWordChecker = (word) => {
	const dict = {};
	let missingPairs = 0;
	word.split('').forEach(val => { dict[val] = true; });
	for (let key in dict) {
		if (!dict.hasOwnProperty(key.toLowerCase()) || !dict.hasOwnProperty(key.toUpperCase())) {
			return false;
		}
	}
	return true;
};

const longestNiceSubstring = function(s) {
	let longestNiceWord = '';

	for (let i = 0; i < s.length; i += 1) {
		let currentWord = s.substr(i);
		if (currentWord.length < longestNiceWord) {
			break;
		}
		while (!niceWordChecker(currentWord)) {
			currentWord = currentWord.substr(0, currentWord.length - 1);
		}
		longestNiceWord = currentWord.length > longestNiceWord.length ? currentWord : longestNiceWord;
	}

	return longestNiceWord;   
};

/*
	input: string
	output: string (first largest found valid word)
	constraints: none
	edge cases: string is empty, funky arrangement of matching cases, ie: 'yAbBcCeDdbbbbaE'

	find longest nice substring, where nice is words containing alt case counterparts of every letter
	possible ideas:
		'abDdeCbDeagHi'
		go over every letter and try backtracking at end until it reaches a nice word, and see if longer than current found word

	possible optimizations:
		cut out early through iterations if future words to be searched through are shorter than longest word found so far
		find each pair and perform a binary search in either direction from each of them as long as they've never been explored before
*/