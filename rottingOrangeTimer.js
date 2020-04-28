
/*
Rotting Oranges
in a given grid, each cell can have one of three values
0 - empty
1 - fresh orange
2 - rotting orange

LeetCode: https://leetcode.com/problems/rotting-oranges/
Results: Runtime: 68 ms, faster than 72.39% of JavaScript online submissions for Rotting Oranges.
Memory Usage: 35.5 MB, less than 78.57% of JavaScript online submissions for Rotting Oranges.

Problem Description:
	every minute any fresh orange that is adjacent to a rotting orange
	becomes rotten

	return the minimum number of minutes that must elapse until no cell
	has a fresh orange

	if this is impossible return -1 instead


Input: 2D grid of integers (0-2), can be any size (10 is approx max in
	these examples)
Output: integer, number of 'minutes' aka turns until all 1s become 2s
	(ie oranges are rotten)
Constraints: none
Edge Cases: 
	- a grid with an axis of size 0
	- 1 x N OR N x 1 size grid
	- if not all 1s are connected to 2s (then rot will never spread
		to all)
	- grid consisting ONLY of 2s and 0s, or of 1s and 0s, or all 
		of a single number etc


 determine after spreading of rot if any fresh oranges remain
 to determine if rot spread was completely successful (ie return
 number of steps to infect all, else return -1)

 traversal function pseudo
 traverse only cardinally adjacent cells that are within bounds
 AND that contain a 1


function rottingOrangeTimer (input is 2d grid of integers from 0 to 2s)
	start a Minutes (aka turns) counter at 0

	loop until rot cannot spread (ie there are no more 3s at the end of a loop)
		loop through every cell on the grid to find all 2s // grid traversal to find 2s
			at every 2, check all cardinally adjacent cells for 1s
				if 1 is found, flag to be changed to a 2 after this turn by setting to 3
		loop through every cell again to find any 3s
			if 3 is found
				loop through grid again setting 3s to 2s
				repeat loop
		incr minutes if 3 is found

	rot cannot spread, so check if we've successfully converted everything
	loop through to see if there are any 1s remaining
		if there are, return -1
		if there are no 1s remaining, return Minutes


	potential optimizations:
		- explore breadth first from all previous cells that are transforming something
			followed by their children rather than iterating across the entire grid each time.
			this would minorly increase space complexity, while greatly reducing time complexity
*/

const rottingOrangeTimer = (gridOfOranges) => {
	let minuteCounter = 0;
	let cellsToBeConverted = 0;

	do {
		cellsToBeConverted = 0;

		for (let y = 0; y < gridOfOranges.length; y++) {
			for (let x = 0; x < gridOfOranges[y].length; x++) {
				if (gridOfOranges[y][x] === 2) {
					if ((y - 1) >= 0 && gridOfOranges[y - 1][x] === 1) { // check up
						gridOfOranges[y - 1][x] = 3;
					}
					if ((x + 1) < gridOfOranges[y].length && gridOfOranges[y][x + 1] === 1) { // check right
						gridOfOranges[y][x + 1] = 3;
					}
					if ((y + 1) < gridOfOranges.length && gridOfOranges[y + 1][x] === 1) { // check down
						gridOfOranges[y + 1][x] = 3;
					}
					if ((x - 1) >= 0 && gridOfOranges[y][x - 1] === 1) { // check left
						gridOfOranges[y][x - 1] = 3;
					}
				}
			}
		}

		for (let y = 0; y < gridOfOranges.length; y++) {
			for (let x = 0; x < gridOfOranges[y].length; x++) {
				if (gridOfOranges[y][x] === 3) {
					cellsToBeConverted += 1;
					gridOfOranges[y][x] = 2;
				}
			}
		}

		if (cellsToBeConverted > 0) {
			minuteCounter += 1;
		}
	} while (cellsToBeConverted > 0);

	for (let y = 0; y < gridOfOranges.length; y++) {
		for (let x = 0; x < gridOfOranges[y].length; x++) {
			if (gridOfOranges[y][x] === 1) {
				return -1;
			}
		}
	}

	return minuteCounter;
};

let test1 = 
[[2, 1, 1],
[1, 1, 0],
[0, 1, 1]]; // expected output = 4

let test2 = 
[[2, 1, 1],
[1, 1, 0],
[0, 0, 1]]; // expected output = -1

let test3 = 
[[2],
[1],
[0]]; // expected output = 1

let test4 = 
[[2, 2, 2],
[2, 2, 0],
[0, 2, 2]]; // expected output = 0

console.log("Test Example Equals 4", rottingOrangeTimer(test1) === 4);
console.log("Test Example Equals -1", rottingOrangeTimer(test2) === -1);
console.log("Test Example Equals 1", rottingOrangeTimer(test3) === 1);
console.log("Test Example Equals 0", rottingOrangeTimer(test4) === 0);

