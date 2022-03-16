/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let result = [];
  let heights = {};
  let heightOptions = [];

  for (let i = 0; i < people.length; i += 1) {
    if (!heights[people[i][0]]) {
      heights[people[i][0]] = [];
      heightOptions.push(people[i][0]);
    }
    heights[people[i][0]].push(people[i]);
  }

  heightOptions.sort((a, b) => {
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }
        return 0;
  });

  for (let i = 0; i < heightOptions.length; i += 1) {
    let key = heightOptions[i];
    heights[key].sort((a, b) => {
        if (a[1] < b[1]) {
          return -1;
        }
        if (a[1] > b[1]) {
          return 1;
        }
        return 0;
    });

    for (let j = 0; j < heights[key].length; j += 1) {
      result.splice(heights[key][j][1], 0, heights[key][j]);
    }
  }

    return result;
};