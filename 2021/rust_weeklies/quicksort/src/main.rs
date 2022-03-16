
struct Solution {}

impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        if nums.len() < 2 {
            return nums
        }
        let mut nums = nums.clone();
        let mut range_pairs: Vec<(usize, usize)> = vec![(0, nums.len() - 1)];
        
        while range_pairs.len() > 0 {
            let pivot_val = nums[range_pairs[0].1];
            let pivot_idx = range_pairs[0].1;
            let start_idx = range_pairs[0].0;
            let mut swap_idx = range_pairs[0].1;

            for i in start_idx..pivot_idx {
                while nums[i] > pivot_val && swap_idx > i {
                    swap_idx = swap_idx - 1;
                    if i < swap_idx {
                        nums.swap(i, swap_idx);
                    }
                }
            }
            nums.swap(pivot_idx, swap_idx);
            range_pairs.remove(0);

            if swap_idx - start_idx > 1 {
                range_pairs.push((start_idx, swap_idx - 1));    
            }

            if pivot_idx - swap_idx > 1 {
                range_pairs.push((swap_idx + 1, pivot_idx));
            }
        }
        nums
    }
}

fn main() {
    let sort_me = vec![5, 7, 3, 1, 9];
    let sort_me2 = vec![5, 7, 3, 1, 9];
    let sort_me3 = vec![5, 9, 3, 7, 6];
    let sort_me4 = vec![8, 9, 324, 2, 19, 4, 17, 29, 5, 5, 2, 5, 2, 3, 4, 8];
    println!("{:?}", Solution::sort_array(sort_me2));
    println!("{:?}", Solution::sort_array(sort_me3));
    println!("{:?}", Solution::sort_array(sort_me4));
}

/*
 *  Leetcode: https://leetcode.com/problems/sort-an-array/
 *  Runtime: 1616ms, faster than 14.29% of Rust submissions
 *  Memory: 2.8 MB, less than 85.71% of Rust submissions
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
 *
 *  Notes: have to make sure you ALSO check the number that you're swapping with
 */
