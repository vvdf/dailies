struct Solution {}

impl Solution {
    pub fn reverse(x: i32) -> i32 {
        const MEM_CAP: i32 = 2147483647;
        let mut result: i32 = 0;
        let signed: bool = x < 0;
        let mut it: i32 = if signed { x * -1 } else { x };
        while it > 0 {
            if result > MEM_CAP / 10 {
              return 0;
            }
            result *= 10;
            result += it % 10;
            it = it / 10;
        }
        if signed { result *= -1; }
        result
    }
}
