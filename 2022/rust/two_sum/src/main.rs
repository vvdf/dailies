struct Solution {}

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        for (i, el) in nums.iter().enumerate() {
            for j in i + 1..nums.len() {
                if (el + nums[j]) == target {
                    return vec![i as i32, j as i32];
                }
            }
        }
        vec![0, 1]
    }
}

fn main() {
    println!("{:?} should be [0, 1]", Solution::two_sum(vec![2, 7, 11, 15], 9));
}

/*
 *
 *  https://leetcode.com/submissions/detail/706004247/
 *  Runtime: 28 ms, faster than 24.32% of Rust online submissions for Two Sum.
Memory Usage: 2.4 MB, less than 47.61% of Rust online submissions for Two Sum.
 *
 *  input: i32 vector, target value
 *  output: vector containing idx of two numbers that add to target value from i32 vec
 *  constraints: input vector length = 2 < 1000
 *  edge cases:
 *
 */
