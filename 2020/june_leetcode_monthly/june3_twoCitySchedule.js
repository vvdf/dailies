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

let input = [[10,20],[30,200],[400,50],[30,20]];
let input2 = [[403,578],[406,455],[710,697],[155,861],[540,843],[911,753],[477,453],[378,936],[492,720],[915,382],[984,200],[449,448],[525,964],[875,767],[905,753],[18,84],[351,167],[554,582],[175,794],[677,301],[268,994],[631,627],[53,107],[995,390],[540,406],[932,808],[426,455],[997,735],[449,757],[90,869],[640,396],[573,536]];
let output = 110;
console.log(twoCitySchedCost(input), output);
console.log(twoCitySchedCost(inpu2), "iuno");