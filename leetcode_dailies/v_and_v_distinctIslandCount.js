/*

distinct islands
 given a 2d grid, each element in that grid can be a 0 or 1, 0 = water, 1 = land
 you want to count the islands with distinct shapes (rotate/mirror still count as unique islands)
 
 implement count islands, numbering islands
 depth first painting algorithm, search for first available unmarked land, spread to all connected land cells
 assigning it a island number.
 save an image of that island
  create a rectangle copy/snapshot of the island from the two greatest extreme corners to be used for
  comparison against other islands later.
 repeat until there are islands left on the 2d grid
 rule out any islands in list of snapshotted islands that has a duplicate.
 return list of remaining snapshots . length
*/

const distinctIslandCount = (grid) => {
  let islandSnapshots = [];
  let islandsFound = 0;
  
  // populate islandSnapshot container by painting uniquely connected islands
  const findNextIsland = () => {
    let islandFound = false;
    for (let y = 0; y < grid.length && !islandFound; y += 1) {
      for (let x = 0; x < grid[y].length && !islandFound; x += 1) {
        if (grid[y][x] === 1) {
          // unclaimed land is found, claim it/paint it
          paint(x, y, islandsFound + 2); // this will start the island painting at the unused value 2
          islandFound = true;
        }
      }
    }
    if (islandFound) {
      
      // take snapshots of islands
      snapshotIsland(islandsFound + 2);
      
      // continue searching for next islands
      islandsFound += 1;
      findNextIsland();
    }
  };
  
  const paint = (x, y, brush) => {
    // breadth first exploration painting all connected land tiles to a given number/passed 'brush'
    
    // paint current cell
    grid[y][x] = brush;
    
    // check all adjacent cells for need to be painted
    if (y - 1 >= 0 && grid[y - 1][x] === 1) {
      // step up
      paint(x, y - 1, brush);
    }
    
    if (x - 1 >= 0 && grid[y][x - 1] === 1) {
      // step left
      paint(x - 1, y, brush);
    }
    
    if (x + 1 < grid[y].length && grid[y][x + 1] === 1) {
      // step right
      paint(x + 1, y, brush);
    }
    
    if (y + 1 < grid.length && grid[y + 1][x] === 1) {
      // step down
      paint(x, y + 1, brush);
    }
  };
  
  const snapshotIsland = (valueToSnapshot) => {
    // find upper left and bottom right extremities for a given island
    let xmax = 0;
    let ymax = 0;
    
    let xmin = grid[0].length - 1;
    let ymin = grid.length - 1;
    
    let result = [];
    
    for (let y = 0; y < grid.length; y += 1) {
      for (let x = 0; x < grid[y].length; x += 1) {
        if (grid[y][x] === valueToSnapshot) {
          if (y < ymin) {
            ymin = y;
          }
          
          if (y > ymax) {
            ymax = y;
          }
          
          if (x < xmin) {
            xmin = x;
          }
          
          if (x > xmax) {
            xmax = x;
          }
        }
      }
    }
    
    // create snapshot
    for (let y = ymin; y < ymax + 1; y += 1) {
      result.push([]);
      for (let x = xmin; x < xmax + 1; x += 1) {
        // console.log();
        if (grid[y][x] === valueToSnapshot) {
          result[y - ymin].push(1);
        } else {
          result[y - ymin].push(0);
        }
      }
    }
    
    islandSnapshots.push(result);
  };
  
  // begin island searching
  findNextIsland();
  
  // remove duplicate islands
  for (let i = 0; i < islandSnapshots.length; i += 1) {
    for (let j = i + 1; j < islandSnapshots.length; j += 1) {
      if (JSON.stringify(islandSnapshots[i]) === JSON.stringify(islandSnapshots[j])) {
        islandsFound -= 1;
      }
    }
  }
  
  return islandsFound;
};

let testIslands = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 0, 1],
];

let dupeIslands = [
  [1, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 0],
  [1, 1, 0, 1],
];

let spiraland = [
  [0, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

// printGrid(testIslands);
let countedIslands = distinctIslandCount(testIslands);
console.log("UNIQUE ISLANDS", countedIslands);

let countedDupe = distinctIslandCount(dupeIslands);
console.log("UNIQUE ISLANDS (confirmed Dupes)", countedDupe);



const printGrid = (grid) => {
  console.log(
    grid.map(row => (
      row.map(number => asciiArt[number])
    ))
   .join('\n'))
}

printGrid(testIslands);


// const distinctIslands = (grid) => {
//   const workingGrid = [...grid];
//   const shapes = new Set();
//   let currentShape;

//   const flood = (rowIndex, colIndex, direction) => {
//     if (
//       (rowIndex < 0 || colIndex < 0) // Off the left side of map
//       || (rowIndex > grid.length - 1 || colIndex > grid[rowIndex].length - 1) // Off right side
//       || (workingGrid[rowIndex][colIndex] === 0) // Current tile is water
//     ) {
//       currentShape += '.'; // Register end of stack
//       return;
//     }

//     workingGrid[rowIndex][colIndex] = 0;
//     currentShape += direction;

//     flood(rowIndex, colIndex + 1, '>'); // Right
//     flood(rowIndex + 1, colIndex, 'v'); // Down
//     flood(rowIndex, colIndex - 1, '<'); // Left
//     flood(rowIndex - 1, colIndex, '^'); // Up
//   };

//   workingGrid.forEach((row, i) => {
//     row.forEach((entry, j) => {
//       if (entry === 1) {
//         currentShape = '';
//         flood(i, j, '');
//         shapes.add(currentShape);
//       }
//     });
//   });

//   return shapes.size;
// };
