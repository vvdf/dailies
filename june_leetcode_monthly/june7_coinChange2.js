/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let counter = 0;
    let presolved = {};
    let coinList = coins.slice().sort((a, b) => {
    	if (a > b) {
    		return -1;
    	}
    	if (a < b) {
    		return 1;
    	}
    	return 0;
    });

	const step = (target, coinIndex = 0) => {
		if (target === 0) {
			counter += 1;
		} else {
			for (let i = coinIndex; i < coinList.length; i += 1) {
				if (target >= coinList[i]) {
					step(target - coinList[i], i);
				}
			}
		}
	};

	for (let i = 1; i < 15; i += 1) {
		console.log("new step run #", i);
		step(i);
		presolved[i] = counter;
		counter = 0;
	}

	step(amount);

	console.log(presolved);

	return counter;
};