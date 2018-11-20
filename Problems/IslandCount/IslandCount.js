const testString1 = `
.0...\n
.00..\n
....0
`
const testString2 = `
..000.\n
..000.\n
..000.\n
.0....\n
..000.
`
const testString3 = `
..000.\n
..0...\n
..0.0.\n
..0...\n
..000.\n
`
const testString4 = `
0...0\n
..0..\n
0...0
`
const testString5 = `
00...0\n
0...00\n
......\n
0.0.0.\n
0.....
`
const testString6 = `
0...0\n
0...0\n
00000
`

function countIslands(mapStr) {
  // console.log(mapStr);
  let islandOutput = 0;
  const board = mapStr.split('\n');
  console.log(board);
  board.forEach((e, i) => {
    if (e === '') {
      board.splice(i, 1);
    }
  });
  board.forEach((e, i) => {
    board[i] = e.split('');
  });
  // console.log(board);
  const copy = board.slice(0);
  copy.forEach((e, i) => {
    copy[i] = new Array(e.length);
  });
  // console.log(copy);
  // console.log(board.length);
  function sufficientLength(offsetx, offsety, startx, starty) {
    if (offsetx !== 0) {
      if (offsetx === 1) {
        return startx < copy[starty].length;
      }
      if (offsetx === -1) {
        return startx > 0;
      }
      console.log('Error offsetx is not 0, 1, or -1. Coords: ', offsetx, offsety);
    } else if (offsety !== 0) {
      if (offsety === 1) {
        return starty < copy.length - 1;
      }
      if (offsety === -1) {
        return starty > 0;
      }
      console.log('Error offsety is not 0, 1, or -1. Coords: ', offsetx, offsety);
    }
    console.log(`ERROR: offsetx is ${offsetx} and offsety is ${offsety}. If and Else If failed.`);
    return false;
  }
  function checkLogic(offsetx, offsety, startx, starty) {
    console.log(copy);
    console.log(`offsetx: ${offsetx}, offsety: ${offsety}, startx: ${startx}, starty: ${starty}`);
    // sufficientLength(offsetx, offsety, startx, starty);
    if (
      sufficientLength(offsetx, offsety, startx, starty) &&
      copy[starty + offsety][startx + offsetx] !== 1
    ) {
      copy[starty + offsety][startx + offsetx] = 1;
      console.log(copy);
      if (board[starty + offsety][startx + offsetx] === '0') {
        console.log(
          `coordinates ${startx + offsetx}, ${starty +
            offsety} are connected to ${startx}, ${starty}`
        );
        subroutine(startx + offsetx, starty + offsety);
      }
    }
  }
  function subroutine(x, y) {
    checkLogic(1, 0, x, y);
    checkLogic(0, 1, x, y);
    checkLogic(-1, 0, x, y);
    checkLogic(0, -1, x, y);
    // // console.log(x, y);
    // // console.log(board[y][x]);
    // // console.log(copy[y]);
    // // console.log(x < copy[y].length);
    // // console.log(copy[y][x + 1] !== 1);
    // // console.log(board[y][x + 1]);
    // // console.log(board[y][x + 1] === '0');
    // // if copy adjacent R = 0 && input adjacent R = 0
    // if (x < copy[y].length && copy[y][x + 1] !== 1) {
    //   // set copy to 1
    //   copy[y][x + 1] = 1;
    //   // console.log(copy);
    //   if (board[y][x + 1] === '0') {
    //     console.log(`coordinates ${x + 1}, ${y} are connected to ${x}, ${y}`);
    //     // start subroutine
    //     subroutine(x + 1, y);
    //   }
    // }
    // // console.log(y < copy.length - 1);
    // // console.log(copy[y + 1][x] !== 1);
    // // console.log(board[y + 1][x] === '0');
    // // if copy below = 0
    // if (y < copy.length - 1 && copy[y + 1][x] !== 1) {
    //   // set copy to 1
    //   copy[y + 1][x] = 1;
    //   // console.log(copy);
    //   // if input below = 0
    //   if (board[y + 1][x] === '0') {
    //     console.log(`coordinates ${x}, ${y + 1} are connected to ${x}, ${y}`);
    //     // start subroutine
    //     subroutine(x, y + 1);
    //   }
    // }
    // // if copy left = 0
    // if (x > 0 && copy[y][x - 1] !== 1) {
    //   // set copy to 1
    //   copy[y][x - 1] = 1;
    //   // console.log(copy);
    //   // if input left = 0
    //   if (board[y][x - 1] === '0') {
    //     console.log(`coordinates ${x - 1}, ${y} are connected to ${x}, ${y}`);
    //     // start subroutine
    //     subroutine(x - 1, y);
    //   }
    // }
    // // if copy above = 0
    // if (y > 0 && copy[y - 1][x] !== 1) {
    //   // set copy to 1
    //   copy[y - 1][x] = 1;
    //   // console.log(copy);
    //   // if input above = 0
    //   if (board[y - 1][x] === '0') {
    //     console.log(`coordinates ${x}, ${y - 1} are connected to ${x}, ${y}`);
    //     // start subroutine
    //     subroutine(x, y - 1);
    //   }
    // }
  }

  board.forEach((e, i) => {
    // console.log(e);
    e.forEach((r, o) => {
      // console.log(r);
      // console.log(copy[i][o]);
      if (copy[i][o] == undefined) {
        // console.log('true');
        if (r === '.') {
          // console.log('true true');
          copy[i][o] = 1;
        } else {
          copy[i][o] = 1;
          islandOutput += 1;
          subroutine(o, i);
        }
      }
      // console.log(copy[i][o]);
    });
  });
  console.log(islandOutput);
  return islandOutput;
}

// countIslands(testString1);
// countIslands(testString2);
// countIslands(testString3);
// countIslands(testString4);
// countIslands(testString5);
countIslands(testString6);