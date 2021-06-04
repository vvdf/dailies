
struct Solution {}

impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        nums
    }
}

fn main() {
    let sort_me = vec![5, 7, 3, 1, 9];
    println!("{:?}", Solution::sort_array(sort_me));
}

/*
 *  Leetcode: https://leetcode.com/problems/sort-an-array/
 *  Runtime:
 *  Memory:
 *
 *  Goal: sort an array/vector of integers in ascending order
 *
 *  Input: vector of integers
 *  Output: vector of integers that have been sorted
 *  Constraints: none
 *  Edge Cases: none that I'm aware of yet
 *
 *  Approach: In particular I'm planning to use this as practice for
 *      implementing quicksort using Rust, as such it will be my approach
 *
 *      Quicksort rough algorithm:
 *          nominate a 'pivot' point to serve as center to current step
 *          of sorting, assigning categories of less-than or greater-than
 *          to all remaining entries
 *
 *          recursively repeat for sub collections
 *
 *          return combined collections
 */
