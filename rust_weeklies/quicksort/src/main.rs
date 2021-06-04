
struct Solution {}

impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        if nums.len() < 1 {
            return nums;
        }
        let mut copy = nums.clone();
        let mut left: Vec<i32> = Vec::new();
        let mut pivot = vec![copy.pop().unwrap()];
        let mut right: Vec<i32> = Vec::new();

        for n in copy.iter() {
            if n < &pivot[0] {
                left.push(*n);
            } else if n > &pivot[0] {
                right.push(*n);
            } else {
                pivot.push(*n);
            }
        }
        left = Solution::sort_array(left);
        right = Solution::sort_array(right);
        left.append(&mut pivot);
        left.append(&mut right);
        left
    }

    pub fn sort_array_inplace(nums: Vec<i32>) -> Vec<i32> {
        
    }
}

fn main() {
    let sort_me = vec![5, 7, 3, 1, 9];
    let sort_me2 = vec![5, 7, 3, 1, 9];
    println!("{:?}", Solution::sort_array(sort_me));
    println!("{:?}", Solution::sort_array_inplace(sort_me2));
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
