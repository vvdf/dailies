struct Solution {}

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut total = 0;
        let mut last_val = 1000;
        for c in s.chars() {
            let val = match c {
                'I' => 1,
                'V' => 5,
                'X' => 10,
                'L' => 50,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => 0,
            };
               // Solution::roman_strchar_to_int(&c.to_string());
            total = total + if last_val < val {
                val + last_val * -2 
            } else {
                val
            };
            last_val = val;
        }
        total
    }
}

fn main() {
    println!("13: {}", Solution::roman_to_int(String::from("XIII")));
    println!("28: {}", Solution::roman_to_int(String::from("XXVIII")));
    println!("14: {}", Solution::roman_to_int(String::from("XIV")));
    println!("1400: {}", Solution::roman_to_int(String::from("MCD")));
}
/*  
 *  Leetcode:https://leetcode.com/problems/roman-to-integer/
 *  Runtime: 4 ms, faster than 62.58% of Rust online submissions
 *  Memory Usage: 2.2 MB, less than 22.58% of Rust online submissions
 *  
 *  Goal: Convert input roman numeral string into its decimal value
 *
 *  In: String
 *  Out: i32
 *  C: None
 *  E: 4/40/400, and 9/90/900, use a different notation system than
 *      largest component values from left to right (IV rather than
 *      IIII, IX rather than VIIII, same with X before L and C, etc)
 *  
 *  Potential Approaches:
 *      - Read/add from left to right as long as character on the right
 *          is smaller or equal
 *      - If character on the right is greater than, then backtrack
 *          and subtract one to left
 *          modification: rather than checking to the right, just track
 *          what has been traversed through last and remove double it
 *          if it is less than
 *      - use match syntax for quick conversions of char value to decimal
 */
