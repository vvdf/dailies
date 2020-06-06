/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.maxRoll = 0;
    this.weightList = w.map((val) => {
        this.maxRoll += val;
        return this.maxRoll;
    });
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let randomRoll = Math.floor(Math.random() * this.maxRoll + 1);
    let weightedRollIndex = 0;
    for (let i = 0; i < this.weightList.length; i++) {
        if (this.weightList[i] >= randomRoll)  {
            weightedRollIndex = i;
            break;
        }
    }
    return weightedRollIndex;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */