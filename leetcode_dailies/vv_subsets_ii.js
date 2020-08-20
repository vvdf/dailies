// subsets II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var subsetsWithDup = function(nums) {
// 	instantiate powerset as an object
	let powerSet = {};
	let result = [];

	const step = (setSoFar, setToExplore) => {
		setSoFar.sort();
		powerSet[JSON.stringify(setSoFar)] = true;
		for (let i = 0; i < setToExplore.length; i++) {
			let nextSet = setSoFar.slice();
			let nextExploreSet = setToExplore.slice();
			nextSet.push(setToExplore[i])
			nextExploreSet.splice(i, 1);
			step(nextSet, nextExploreSet);
		}
	};

	step([], nums);

	for (let key in powerSet) {
		result.push(key.split('').map(char => Number(char)));
	}

	return result;
};

console.log(subsetsWithDup([1, 2]));

/*
given a collection of ints, that might contain dupe numbers, return all possible subsets, aka the power set.
the solution set must not contain dupe subsets

a power set, is a set of sets which are all possible subsets of the original set

example 1: [1, 2, 2]
example out: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]

ABC
A B C AB BC AC ABC

input: array of integers, nums
output: 2d array of integer collections, sets of sets, containing all unique subsets of the original set
constraints: none
edge cases:
	- duplicate numbers, these will result in potentially duplicated subsets
	- empty inputs
notes:
	- order of output does not matter
	- 

ABC
A B C
AB AC, BC
ABC // reached max length of set

ABB
A B (B already exists within current set, do not add)
AB (AB already exists, don't add) BB
ABB


function subsetWithDupes (input nums)
	instantiate powerset as an object

	// populate the subsets
	//for each member of nums, step through recursively sorting currently populated subset in numerical order
		//adding if it doesn't exist into our powerset
		//continue stepping through further down the decision tree until subset is length of initial input

	function step (arraySubsetSoFar, arraySubsetToExplore)
		sort arraySubsetSoFar
		add to powerset (if it doesn't exist)
		for each member of arraySubsetToExplore, step(arraySubSetSoFar + element, arraySubsetToExplore - element)

	step([], nums)

	convert powerset members from object representations to desired output of array subsets within an array
	return powerset

*/