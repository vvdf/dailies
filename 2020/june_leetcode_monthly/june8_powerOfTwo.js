
// var powersOfTwo = {};
// for (let i = 0; i < 64; i += 1) {
//     powersOfTwo[Math.pow(2, i)] = i;
// }
// console.log(powersOfTwo);
var isPowerOfTwo = function(n) {
	let ones = 0;
	while (ones < 2 && n !== 0) {
		ones += n & 1;
		n = n >> 1
	}
	return ones === 1;
};

console.log(100, isPowerOfTwo(100));
console.log(64, isPowerOfTwo(64));
console.log(128, isPowerOfTwo(128));
console.log(0, isPowerOfTwo(0));
console.log(1, isPowerOfTwo(1));
console.log(2, isPowerOfTwo(2));
console.log(3, isPowerOfTwo(3));
console.log(4, isPowerOfTwo(4));
console.log(5, isPowerOfTwo(5));
console.log(536870912, isPowerOfTwo(536870912));
console.log(16777217, isPowerOfTwo(16777217));

// let test = 128;
// console.log(test);
// test >> 1;
// console.log(test >> 1);