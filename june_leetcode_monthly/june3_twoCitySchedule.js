/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let minCost = 0;

    for (let i = 0; i < costs.length; i++) {
      minCost += costs[i][0] > costs[i][1] ? costs[i][0] : costs[i][1];
    }

    const decisionTreeStep = (cost, flyerCountA, flyerCountB) => {
      if (flyerCountA + flyerCountB === costs.length && cost < minCost) {
        minCost = cost;
      } else {
        let currIdx = flyerCountA + flyerCountB;
        if (flyerCountA < costs.length / 2) {
          decisionTreeStep(cost + costs[currIdx][0], flyerCountA + 1, flyerCountB);
        }
        if (flyerCountB < costs.length / 2) {
          decisionTreeStep(cost + costs[currIdx][1], flyerCountA, flyerCountB + 1);
        }
      }
    };

    decisionTreeStep(0, 0, 0);
    return minCost;
};

// let input = [[10,20],[30,200],[400,50],[30,20]];
// let output = 110;
// console.log(twoCitySchedCost(input), output);