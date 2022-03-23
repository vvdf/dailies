struct Solution {}

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let bracket_stack: Vec<char> = Vec::new();
        let mut bracket_key = std::collections::HashMap::new();
        bracket_key.insert(String::from("{"), String::from("}"));
        bracket_key.insert(String::from("["), String::from("]"));
        bracket_key.insert(String::from("("), String::from(")"));

        for i in &s[..] {
            
        }
    }

    bracket_stack.len() < 1
}

fn main() {
    let test_input = "()";
    let test_in2 = "()[]{}";
    let test_in3 = "(]";
    println!("{:?}", Solution::is_valid(test_input));
}

/*
 *
 *
 */
