// SOLVED FOR LINEAR TIME COMPLEXITY AND NO USE OF DIVISION
/*
Problem Description (from Leetcode):
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

Leetcode: https://leetcode.com/problems/product-of-array-except-self/
Runtime: 264 ms, faster than 17.45% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 44.8 MB, less than 8.00% of JavaScript online submissions for Product of Array Except Self.
 */
var productExceptSelf = function(nums) {
    let result = [];

    // naive solution A: utilizing division
    // let totalProduct = nums.reduce((acc, val) => acc * val);
    // result = nums.map((val) => totalProduct / val);

    // naive solution B: w/o division and w/o linear time complexity
    // for (let i = 0; i < nums.length; i++) {
    // 	result.push(1);
    // 	for (let j = 0; j < nums.length; j++) {
    // 		if (i !== j) {
    // 			result[i] *= nums[j];
    // 		}
    // 	}
    // }

    // optimized solution for time complexity
    let productsFromLeft = [];
    let productsFromRight = [];
    let leftProduct = 1;
    let rightProduct = 1;

    for (let i = 0; i < nums.length; i++) {
    	leftProduct *= nums[i];
    	rightProduct *= nums[nums.length - i - 1];
    	productsFromLeft.push(leftProduct);
    	productsFromRight.unshift(rightProduct);
    }

    result = nums.map((val, idx) => (
    	idx > 0 
	    	? productsFromLeft[idx - 1] 
    		: 1) 
    		* (idx < nums.length - 1 
    			? productsFromRight[idx + 1] 
    			: 1
    	));

    return result;
};

let input1 = [1, 2, 3, 4];
let output1 = [24, 12, 8, 6];

let input2 = [5, 10, 7, 11];
let output2 = [770, 385, 550, 350];

let input3 = [24, 12, 8, 6];
let output3 = [576, 1152, 1728, 2304];

let input4 = [8, 6, 7, 5, 3, 1, 9];
let output4 = [5670, 7560, 6480, 9072, 15120, 45360, 5040];

console.log("Input 1 transforms correctly into output 1:", JSON.stringify(productExceptSelf(input1)) === JSON.stringify(output1));
console.log("Input 2 transforms correctly into output 2:", JSON.stringify(productExceptSelf(input2)) === JSON.stringify(output2));
console.log("Input 3 transforms correctly into output 3:", JSON.stringify(productExceptSelf(input3)) === JSON.stringify(output3));
console.log("Input 4 transforms correctly into output 4:", JSON.stringify(productExceptSelf(input4)) === JSON.stringify(output4));
