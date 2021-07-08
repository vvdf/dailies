struct Solution {}

impl Solution {
    pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
        let mut start_idx: usize = 0;
        let mut stop_idx: usize = arr.len();
     
        while stop_idx - start_idx > k as usize {
            if Solution::a_closer_than_b(arr[stop_idx - 1], arr[start_idx], x) {
                start_idx = start_idx + 1;
            } else {
                stop_idx = stop_idx - 1;
            }
        }
        
        Vec::from(&arr[start_idx..stop_idx])
    }

    pub fn a_closer_than_b(a: i32, b: i32, x:i32) -> bool {
        i32::abs(x - a) < i32::abs(x - b)
    }
}

fn main() {
    let ex_vec0 = vec![1, 2, 3, 4, 5];
    // let example_vec1 = vec![1, 3, 5, 9, 21, 23, 25];
    // let example_vec2 = vec![1, 2, 4, 5, 6, 10, 12];
    // let example_vec3 = vec![20, 100, 101, 105, 1000, 1001, 5000];
    println!("{:?}", Solution::find_closest_elements(ex_vec0, 4, 3));
    // println!("{:?}", Solution::find_closest_elements(example_vec1, 5, 10));
    // println!("{:?}", Solution::find_closest_elements(example_vec2, 5, 8));
    // println!("{:?}", Solution::find_closest_elements(example_vec3, 5, 99));
}

/*
 *  https://leetcode.com/problems/find-k-closest-elements/submissions/
 *  Runtime: 8 ms, faster than 98.98% of Rust online submissions for Find K Closest Elements.
 *  Memory Usage: 2.1 MB, less than 69.39% of Rust online submissions for Find K Closest Elements.
 *
 *  input: <sorted int array/vector>, <k> number of entries of items that are closest to <x>
 *  output: <sorted int vector> containing the entries closest to x
 *  constraints: 
 *      1 <= k <= arr.length
 *      1 <= arr.length <= 104
 *      arr is sorted in ascending order.
 *      104 <= arr[i], x <= 104
 *  edge cases:
 *      - multiple entries of same distance from x
 *          ie k = 5, x = 12
 *          [10 10 10 14 14 14] would the correct answer be
 *          10 10 10 14 14 or 10 10 14 14 14?
 *
 *  potential approaches:
 *      - iterate over entries in array, keeping track of an array of "highest found so far"
 *          where for each entry in array, I then iterate over "highest so far" to see
 *          if any of those can should be shifted out vs item currently iterating over
 *      - improvement to the above idea: the array we are being given is already sorted,
 *          utilizing this we perform a binary search over the array members to find
 *          values closest to x, and then only ever have to explore outwards in either
 *          direction a total of k times
 *      - ultimately, we are actually just extracting a k sized slice out of the array,
 *          potential optimization could be aiming to find the edges of the k sized
 *          slice. for example if arr.length - k is smaller than k, it could be quicker
 *          to find where to cut off items
 *      - simpler option with less premature optimization: iterate once over the entire array
 *          comparing left to right side, adjusting indeces until width of stop idx - start idx
 *          = k, then return a vector from the slice of arr containing those
 */
