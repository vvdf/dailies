// https://leetcode.com/submissions/detail/383958500/
// Runtime: 88 ms, faster than 60.71% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 39.6 MB, less than 7.13% of JavaScript online submissions for Trapping Rain Water.

function DLLNode(val, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

const convertArrayToDLL = (arr) => {
  let rootNode = null;
  let lastNode = null;

  for (let i = 0; i < arr.length; i++) {
    let newNode = new DLLNode(arr[i], lastNode, null);

    if (i < 1) {
      rootNode = newNode;
    } else {
      lastNode.next = newNode;
    }

    newNode.prev = lastNode;
    lastNode = newNode;
  }

  return rootNode;
};

const trap = (elevMap) => {
  // convert array into a doubly linked list, to treat as pages so we can erase
  // whole columns after exploring them.
  // explore LL keeping track of address of "tallestSoFar" node
  // traverse left from node to find address of next tallest from left
    // re-traverse to count water in between, deleting each "page" or double LL node
    // along the way
    // at final node sew it up to point to the next node being whatever the rightmost
    // wall is after exploring that side too
    // so in the end, LeftWall's Node.next = RightWall's Node AND vice versa
  let waterCellCount = 0;
  let root = convertArrayToDLL(elevMap);

  const countWaterBetween = (leftNode, rightNode) => {
    if (leftNode === null || rightNode === null) {
      return;
    }

    let lowerHeight = leftNode.val <= rightNode.val ? leftNode.val : rightNode.val;

    for (let currNode = leftNode.next; currNode !== rightNode; currNode = currNode.next) {
      waterCellCount += lowerHeight - currNode.val;
    }  
  };

  // find the tallest, traverse left to find next tallest and solve for water in between
  // repeat in other direction, mark current as explored AND remove from remaining idx to check
  // repeat until remaining idx to check length = 0

  while (root && root.next && root.next.next) {
    // find tallest value + address
    let tallestNode = root;
    let leftWallNode = null;
    let rightWallNode = null;

    for (let currNode = root; currNode; currNode = currNode.next) {
      if (currNode.val >= tallestNode.val) {
        tallestNode = currNode;
      }
    }

    // explore left
    leftWallNode = tallestNode.prev;
    for (let currNode = tallestNode.prev; currNode; currNode = currNode.prev) {
      if (currNode.val >= leftWallNode.val) {
        leftWallNode = currNode;
      }

      if (currNode.val === tallestNode.val) {
        break;
      }
    }

    countWaterBetween(leftWallNode, tallestNode);

     // explore right
    rightWallNode = tallestNode.next;
    for (let currNode = tallestNode.next; currNode; currNode = currNode.next) {
      if (currNode.val >= rightWallNode.val) {
        rightWallNode = currNode;
      }

      if (currNode.val === tallestNode.val) {
        break;
      }
    }

    countWaterBetween(tallestNode, rightWallNode);

    // stitch walls together
    if (leftWallNode) {
      leftWallNode.next = rightWallNode;
    } else {
      // if no left wall is found, we need to move our root for future runs
      root = rightWallNode;
    }

    if (rightWallNode) {
      rightWallNode.prev = leftWallNode;
    }

    console.log(waterCellCount)
  }

  return waterCellCount;
};


// console.log(convertArrayToDLL([1, 2, 3]));
// console.log(trap([4, 2, 3]));
// console.log(trap([0, 1, 1, 1, 0]));
// console.log(trap([0, 1, 3, 4, 5]));
// console.log(trap([0, 1, 5, 4, 5]));
// console.log(trap([2, 1, 0, 3, 1]));
// console.log(trap([5, 3, 5, 0, 5]));
console.log(trap([2,2,0,4,6,2,0,6,1,4,4,7,9,6,6,3,9,6]));
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]) === 6);
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

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