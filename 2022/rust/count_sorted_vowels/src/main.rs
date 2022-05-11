struct Solution {}

impl Solution {
    pub fn count_vowel_strings(n: i32) -> i32 {
        let mut counter = 0;
        let mut word = [char; n] = ['a', n];
        
        counter
    }
}

fn main() {
    let test_input = 1;
    println!("First test: n 1 should output 5 -> {:?}", Solution::count_vowel_strings(1));
    println!("First test: n 2 should output 15 -> {:?}", Solution::count_vowel_strings(2));
    println!("First test: n 3 should output 35 -> {:?}", Solution::count_vowel_strings(3));
    println!("First test: n 33 should output 66045 -> {:?}", Solution::count_vowel_strings(33));
}

/* https://leetcode.com/problems/count-sorted-vowel-strings/
 * 
 * input: integer, representing max length of strings
 * output: number of correct ordered vowel only strings possible to
 *   construct from said input sized words (ie 2:aa, ae, ai, but not ea)
 * constraints: 1 <= n <= 50
 * edge cases: none i can think of yet
 *
 * initial idea for solving:
 *   - can theoretically break down to math equation rather than
 *       needing to iterate through actual strings
 *       n -> 1 + n + 3 * n-1 + 5 * n + 
 *   - aaa aae aai aao aau, aee aei aeo aeu, aii aio aiu, aoo aou, auu (n 3 = partial output of 15)
 *   - eee eei eeo eeu, eii eio eiu, eoo eou, euu (n 3 = partial output of 10)
 *   - iii iio iiu, ioo iou, iuu (n 3 = partial output of 6)
 *   - ooo oou, ouu (n 3 = part out of 3)
 *   - uuu (n 3 = part out of 1)
 *   
 *   - n 4 = aaaa aaae aaai aaao aaau, aaee aaei aaeo aaeu, aaii aaio aaiu, aaoo aaou, aauu
 *       aeee aeei aeeo aeeu, aeii aeio aeiu, aeoo aeou, aeuu
 *       aiii aiio aiiu, aioo aiou, aiuu
 *       aooo aoou, aouu
 *       auuu (35)
 *     eeee eeei eeeo eeeu, eeii eeio eeiu, eeoo eeou, eeuu,
 *       eiii eiio eiiu, eioo eiou, eiuu
 *       eooo eoou eouu
 *       euuu (20)
 *     iiii iiio iiiu, iioo iiou, iooo ioou iouu iuuu (9)
 *     oooo ooou, oouu, ouuu (4)
 *     uuuu (1)
 */
