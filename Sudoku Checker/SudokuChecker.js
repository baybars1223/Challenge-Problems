const input1 = `795836421
462195387
381247956
279458613
654371892
813629745
147583269
538962174
926714538`;

const input2 = `
524698731
967531824
381742596
719325648
436871952
258416379
893154267
672983415
145267983`;

const input3 = `
895631472
327984516
461257398
942813765
183765924
756429183
578142639
214396857
639578241`;

const input4 = `
735814296
896275314
214963857
589427163
362189745
471356982
923541678
648792531
157638429`;

const input5 = `
895631472
327984516
461257398
942813765
183765924
756429183
578142639
214398657
639578241`;

const input6 = `
215873649
734965812
698412537
387241965
146597283
471659328
952386471
563128794
829734156`;

const input7 = `
123123123
456456456
789789789
123123123
456456456
789789789
123123123
456456456
789789789`;

const input8 = `
111111111
222222222
333333333
444444444
555555555
666666666
777777777
888888888
999999999`;

const input9 = `
795836421
462195387
381247956
279458613
654371892
813629745
147583269
538962174
926714538`;

const input10 = `
524698731
967531824
381742596
719325648
436871952
258416379
893154267
672983415
145267983`;

const input11 = `
895631472
327984516
461257398
942813765
183765924
756429183
578142639
214396857
639578241`;

const input12 = `
735814296
896275314
214963857
589427163
362189745
471356982
923541678
648792531
157638429`;

const input13 = `
895631472
327984516
461257398
942813765
183765924
756429183
578142639
214398657
639578241`;

const input14 = `
215873649
734965812
698412537
387241965
146597283
471659328
952386471
563128794
829734156`;

const input15 = `
123123123
456456456
789789789
123123123
456456456
789789789
123123123
456456456
789789789`;

const input16 = `
111111111
222222222
333333333
444444444
555555555
666666666
777777777
888888888
999999999`;

function sudokuCheck(boardStr) {
  const boardConverter = () => {
    const splitBoard = boardStr.split('\n');
    const newBoard = [];
    for (let r = 0; r < 9; r += 1) {
      newBoard.push(splitBoard[r]);
    }
    for (let c = 0; c < 9; c += 1) {
      newBoard[c] = newBoard[c].split('');
    }
    return newBoard;
  };
  const emptyMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const maps = {};
  for (let b = 0; b < 9; b += 1) {
    const varName = `map${b + 1}`;
    maps[varName] = emptyMap.slice();
  }
  const checkLogic = (value, map, coords) => {
    // console.log(value);
    // console.log(coords);
    // console.log(map[coords[0]][coords[1]]);
    if (map[coords[0]][coords[1]] === 0) {
      console.log(true);
      for (let i; i < 9; i += 1) {
        console.log(true);
        if (i !== coords[1]) {
          console.log(true);
          console.log(coords[0], i);
        }
      }
    }
    return false;
  };
  const traversal = board => {
    let valid = true;
    console.log(board[0][0]);
    console.log(board.length);
    board.forEach((row, rowIndex) => {
      console.log(row.length);
      row.forEach((element, colIndex) => {
        if (checkLogic(element, maps[`map${element}`], [rowIndex, colIndex]) === false) {
          valid = false;
          return valid;
        }
      });
    });
    console.log(valid);
    return valid;
  };
  const board = boardConverter(boardStr);
  traversal(board);

  return board;
}

console.log(sudokuCheck(input1));
