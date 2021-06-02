struct Solution {}

impl Solution {
    pub fn shortest_palindrome(s: String) -> String {
        if Solution::palindrome_validity_check(s) {
            String::from("true")
        } else {
            String::from("false")
        }
    }

    pub fn palindrome_validity_check(s: String) -> bool {
        for (i, rc) in s.chars().rev().enumerate() {
            let c = s.chars().nth(i).unwrap();
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
}

/*  
 *  Leetcode:
 *  Runtime:
 *  Memory Usage:
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
