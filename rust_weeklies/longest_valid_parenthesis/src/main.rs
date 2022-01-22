struct Solution {}

impl Solution {
    pub fn longest_valid_parentheses(s: String) -> i32 {
        
    }
}

fn main() {

}

/*
 * https://leetcode.com/problems/longest-valid-parentheses/
 *
 * input: array containing ONLY '()' characters
 * output: integer
 * constraints: 
 * edge cases: 
 *  - no valid parenthesis present
 *  - entire string is a valid parenthesis
 *
 * potential approaches:
 *  - iterate through each character and expanding out as long as
 *      left bracket count is greater than or equal to right bracket
 *      count
 *      - no valid parenthesis collection will start with anything
 *          other than a left bracket '(' or end with ')'
 *          (potential optimization)
 *      - big O of n^2
 *  - iterate through the list to count total number of left and right
 *      brackets, iterate once more to create an additional array listing
 *      a disparity count of each side, then reducing the string based on
 *      where it's weighted incorrectly?
 *      - could work to just trim the edges of the string until the
 *          left and right bracket count is balanced
 *          if this works, big O of n
 * /
