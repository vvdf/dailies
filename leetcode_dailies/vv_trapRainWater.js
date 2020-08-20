// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

const mapEmpty = (inputArray) => inputArray.reduce((acc, val) => acc + val) < 2;
// let test = [1, 2, 3, 4, 5];
// let test2 = [0, 0, 0];~
// console.log(mapEmpty(test2));

const trapRainWater = (elevMap) => {
  let waterCells = 0;
  
  while (!mapEmpty(elevMap)) {
    let leftWallFound = false;
    let rightWallFound = false;
    
    for (let i = 0; i < elevMap.length && !leftWallFound; i++) {
      if (elevMap[i] < 1) {
        elevMap[i] += 1;
      } else if (elevMap[i] >= 1) {
        leftWallFound = true;
      }
    }
    
    for (let i = elevMap.length - 1; i >= 0 && !rightWallFound; i--) {
      if (elevMap[i] < 1) {
        elevMap[i] += 1;
      } else if (elevMap[i] >= 1) {
        rightWallFound = true;
      }
    }
    
    for (let i = 0; i < elevMap.length; i++) {
      if (elevMap[i] < 1) {
        waterCells += 1;
      }
    }
    
    elevMap.map(val => val - 1);
    console.log(elevMap);
  }

  return waterCells;
};

console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]) === 6);

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