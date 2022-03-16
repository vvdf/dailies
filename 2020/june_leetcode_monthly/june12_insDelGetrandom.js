/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.keys = {};
    this.container = [];
    this.size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.keys.hasOwnProperty(val)) {
        this.container[this.size] = val;
        this.size += 1;
        this.keys[val] = this.size - 1;
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.keys.hasOwnProperty(val)) {
        this.keys[this.container[this.size - 1]] = this.keys[val];
        [this.container[this.keys[val]], this.container[this.size - 1]] = 
            [this.container[this.size - 1], this.container[this.keys[val]]];
        delete this.keys[val];
        this.size -= 1;
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.container[Math.floor(Math.random() * this.size)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */