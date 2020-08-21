// https://leetcode.com/submissions/detail/383958500/

const trap = (elevMap) => {
  let waterCells = 0;
  let startIdx = 0;
  let endIdx = elevMap.length;
  const delta = () => endIdx - startIdx;

  let continueSearch = true;

  // traverse until delta of remaining placements <= 2
  while (continueSearch) {
    // update start idx
    for (let i = startIdx; i < endIdx; i++) {
      if (elevMap[i] > 0 || i === endIdx - 1) {
        startIdx = i;
        break;
      }
    }

    // update endidx
    for (let j = endIdx - 1; j >= startIdx; j--) {
      if (elevMap[j] > 0 || j === startIdx) {
        endIdx = j + 1;
        break;
      }
    }

    // run through and count 0s
    continueSearch = delta() < 2 ? false : true;
    for (let k = startIdx; k < endIdx && continueSearch; k++) {
      if (elevMap[k] < 1) {
        waterCells += 1;
      } else if (elevMap[k] > 0) {
        elevMap[k] -= 1;
      }
    }
  }

  return waterCells;
};

console.log(trapRainWater([0, 1, 1, 1, 0]));
console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]) === 6);
console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));

// FIX IMPLEMENTATION
// TRY CUTTING OFF SIDES TO IMPROVE ITERATION SPEED
// SHORT CIRCUIT WHEN ONLY 1 or 2 ADJACENT NUMBERS ARE FOUND

/*
Trapping Rain Water
Given N non neg integers, representing an elevation map, where the width of each bar is 1
compute how much water this elevation map is able to trap after rain
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Input: array of positive integers, representing elevation map to form our walls
Output: total "cells" of rainwater, aka cells enclosed by walls formed in our elevation map
Constraints: None (thankfully)
Edge Cases: 
  - Do out of bounds of array count as viable/functional walls? (Assuming no)
  - Empty input, improper input


Visual rep of our example input:
[0,1,0,2,1,0,1,3,2,1,2,1]

.......O....
...O###OO#O.
.O#OO#OOOOOO

Output is number of # aka water cells

Potential solution 1:
  - Traverse down the elevation map checking each row for a closed pair of walls
    ie if a number reaches this given height start counting in between itself and it's enclosing wall
    if a matching wall is found, add the number counted to the number of rain cells to be returned at the end
    else if no matching wall is found discard the numbers counted
  - Time complexity: O(nm)
  - Space complexity: O(m)
  
Potential solution 2:

.......O....
...O###OO#O.
.O#OO#OOOOOO
   ^
  (@idx 1: found a highest value to our left, 1)
  (@idx 2: found a value lower than our highest, thus water CAN be contained potentially)
  (@idx 3: found a value equivalent to or higher than our last discovered highest, previous potential water
    IS contained, establish a new highest)
    (left wall = 1, right wall = 2, for each gap step, sum the difference between current height at each step
     and the previously discovered wall (to be adjusted if the right wall turns out to be))
     
    (after each left wall is found, mark it as a potential left wall, and adventure down the array to find
    it's definite matching right wall)
    
    What makes a definitive matching right wall? When the last and current cell is positive (as I'm traversing
    through the array)
*/

/*

  possible solution:
    start at the highest, explore left and right, finding the next highest in either direction, counting the water
    in between, and removing/ignoring them accordingly (perhaps just maximizing them out)

    possibly start by creating an ordered list by height
    [{ tallest value, index}, {next tallest, index}]

    and iterating through this list accordingly as long as index of current search isn't already cleared out

    ie:
      031452103
      ----X---- (5 is marked as explored as we being to start exploring its sides)
      5 is tallest we count the next tallest on either side


      031452103
      ----XXXX- (5 is marked as explored as we being to start exploring its sides)

      so we erase ones AFTER we xplore it, AND erase the water cells in between, leaving just the wall
      so that it can then be explored on the other side

*/