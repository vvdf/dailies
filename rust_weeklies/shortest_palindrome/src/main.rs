struct Solution {}

impl Solution {
    pub fn shortest_palindrome(s: String) -> String {
        let mut word = String::from(&s);
        let idx = Solution::find_internal_palindrome(&s);
        for c in String::from(&s[idx..]).chars() {
            word = String::from(c.to_string()) + &word[..];
        }
        word
    }

    pub fn find_internal_palindrome (s: &String) -> usize {
        let mut longest_length: usize = 0;
        for (i, _c) in s.chars().enumerate() {
            if Solution::palindrome_check(String::from(&s[..i + 1])) {
                longest_length = i;
            }
        }

        if s.len() < 1 {
            longest_length
        } else {
            longest_length + 1
        }
    }

    pub fn palindrome_check(s: String) -> bool {
        for (c, rc) in s.chars().zip(s.chars().rev()) {
            if c != rc {
                return false;
            }
        }
        true
    }
}

fn main() {
    println!("{}", Solution::shortest_palindrome(String::from("example")));
    println!("{}", Solution::shortest_palindrome(String::from("wawaw")));
    println!("{}", Solution::shortest_palindrome(String::from("ursesrun")));
    println!("{}", Solution::shortest_palindrome(String::from("")));
}

/*  
 *  Leetcode: https://leetcode.com/problems/shortest-palindrome
 *  Runtime: 1064ms, faster than 20.00% of Rust online submissions
 *  Memory Usage: 2.3MB, less than 80.00% of Rust online submissions
 *
 *  Goal: given string 's', convert 's' to a palindrome by adding chars
 *      in front, return shortest palindrome you can find
 *
 *  Input: String
 *  Output: String
 *  Constraints: none
 *  Exceptions: nothing that I can think of yet
 *
 *  Potential Approaches:
 *      - create a palindrome tester function to know when to stop
 *      - find a potential center point of reflection if there is one
 *          already, to continue building the palindrome from there
 *          - most direct method would be quadratic performance,
 *              running a centerpoint spread outward check at every single
 *              character, so maxing out at n * n at absolute worst case
 *              ie. "bcba", bcb is aldready a palindrome
 *          - maybe find the largest left edge touching palindrome, as
 *              if it is not touching it would not be valid,
 *              ie. "abcb", bcb may be a valid palindrome, but because
 *              we are only extended leftward
 *          - check from the left side and looking for matches indexes from
 *              the right side to test for existing palindrome perhaps?
 *              ie. "bcba" test "b__a" nope, "b_b_" found, so continue,
 *              "bcb_" largest interior left side palindrome found, fill in
 *              by matching the blanks on the opposite side
 *              (I believe this should be linear time complexity
 *              considering we're just running from the right side once
 *              each through every letter)
 */
