struct Solution {}

impl Solution {
    pub fn count_vowel_strings(n: i32) -> i32 {
        let mut count = 1;
        let mut word = vec!['a'; n as usize];

        // start index at end of word
        let mut idx: i32 = n - 1;
        let mut next_char = 'u';

        while idx >= 0 {
            if word[idx as usize] == 'a' { next_char = 'e'; }
            else if word[idx as usize] == 'e' { next_char = 'i'; }
            else if word[idx as usize] == 'i' { next_char = 'o'; }
            else if word[idx as usize] == 'o' { next_char = 'u'; }
            
            word[idx as usize] = next_char;
                
            if idx == n - 1
                || word[idx as usize] == 'u'
                && idx < 1
                || word[idx as usize] == 'u'
                && idx > 0
                && word[(idx - 1) as usize] != 'u' {
                count += 1;
            }
            if word[idx as usize] == 'u' {
                idx -= 1;
            } else if idx < n - 1 {
                idx += 1;
            }
        }

        count
    }
}

fn main() {
    println!("First test: n 1 should output 5 -> {:?}", Solution::count_vowel_strings(1));
    println!("First test: n 2 should output 15 -> {:?}", Solution::count_vowel_strings(2));
    println!("First test: n 3 should output 35 -> {:?}", Solution::count_vowel_strings(3));
    println!("First test: n 33 should output 66045 -> {:?}", Solution::count_vowel_strings(33));
}

/* https://leetcode.com/problems/count-sorted-vowel-strings/
 * Runtime: 16 ms, faster than 6.14% of Rust online submissions for Count Sorted Vowel Strings.
Memory Usage: 2.2 MB, less than 8.77% of Rust online submissions for Count Sorted Vowel Strings.
 *
 * input: integer, representing max length of strings
 * output: number of correct ordered vowel only strings possible to
 *   construct from said input sized words (ie 2:aa, ae, ai, but not ea)
 * constraints: 1 <= n <= 50
 * edge cases: none i can think of yet
 *
 * initial solution ideas:
 *   - brute force, iterate through every possiblity using an index/register ie.
 *      aaaa -> aaae -> aaai -> aaao -> aaau -> aaee -> etc
 *      - general process would be, iterate char at idx up
 *      - if at u, move idx left and attempt to iterate up
 *      - if you don't move idx anymore, then take current char and apply that to
 *          all chars right as you move down word idx
 *          (ie aaa_u_ -> aa_e_u -> aae_e_ -> continue)
 *      - end when idx attempts to go below 0
 *
 * potential optimization:
 *   - can theoretically break down to math equation rather than
 *       needing to iterate through actual strings, probably requires
 *       combinatorial math
 *       n -> 1 + n + 3 * n-1 + 5 * n + 
 *   - aaa aae aai aao aau, aee aei aeo aeu, aii aio aiu, aoo aou, auu (n 3 = partial output of 15)
 *   - eee eei eeo eeu, eii eio eiu, eoo eou, euu (n 3 = partial output of 10)
 *   - iii iio iiu, ioo iou, iuu (n 3 = partial output of 6)
 *   - ooo oou, ouu (n 3 = part out of 3)
 *   - uuu (n 3 = part out of 1)
 */
