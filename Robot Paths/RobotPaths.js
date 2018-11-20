function makeBoard(n) {
  const board = [];

  for (let row = 0; row < n; row += 1) {
    board.push([]);
    for (let col = 0; col < n; col += 1) {
      board[row].push(false);
    }
  }

  board.togglePiece = (row, col) => {
    board[row][col] = !board[row][col];
  };

  board.hasBeenVisited = (row, col) => board[row][col];

  return board;
}

function robotPaths(n) {
  const board = makeBoard(n);
  let count = 0;

  function checkDirection(coords, offsetCoords) {
    const newRow = coords[0] + offsetCoords[0];
    const newCol = coords[1] + offsetCoords[1];
    if (
      newRow < n &&
      newRow >= 0 &&
      newCol < n &&
      newCol >= 0 &&
      !board.hasBeenVisited(newRow, newCol)
    ) {
      board.togglePiece(newRow, newCol);
      // console.log(`Moving from ${coords[0]},${coords[1]} to ${newRow},${newCol}`);
      subroutine(newRow, newCol);
      board.togglePiece(newRow, newCol);
    } else {
      // console.log(board);
      // console.log(`Move ${coords[0]},${coords[1]} to ${newRow},${newCol} is invalid`);
    }
  }

  function subroutine(currentRow, currentCol) {
    if (currentRow === n - 1 && currentCol === n - 1) {
      // console.log(
      //   `Currently on ${currentRow}, ${currentCol} and finish line is ${n - 1}, ${n - 1}`
      // );
      count += 1;
    } else {
      checkDirection([currentRow, currentCol], [0, 1]);
      checkDirection([currentRow, currentCol], [1, 0]);
      checkDirection([currentRow, currentCol], [0, -1]);
      checkDirection([currentRow, currentCol], [-1, 0]);
    }
  }

  board.togglePiece(0, 0);
  subroutine(0, 0);

  return count;
}

console.log(robotPaths(5));
