// for (let i = 0; i < 9; i++) {
//   console.log('i value.....', i);

//   for (let j = 0; j < 9; j++) {
//     console.log('row -->', [i, j]);
//     console.log('col -->', [j, i]);
//     let box = [
//       3 * Math.floor(i / 3) + Math.floor(j / 3),
//       3 * (i % 3) + (j % 3),
//     ];
//     console.log('box -->', box);
//     console.log('--------------------------------------------------------');
//   }

//   console.log('==============================================');
// }

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowSet = new Set();
  let colSet = new Set();
  let boxSet = new Set();

  for (let i = 0; i < 9; i++) {
    rowSet.clear();
    colSet.clear();
    boxSet.clear();

    for (let j = 0; j < 9; j++) {
      let row = board[i][j];
      let col = board[j][i];
      let box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (row !== '.') {
        if (rowSet.has(row)) {
          return false;
        } else {
          rowSet.add(row);
        }
      }

      if (col !== '.') {
        if (colSet.has(col)) {
          return false;
        } else {
          colSet.add(col);
        }
      }

      if (box !== '.') {
        if (boxSet.has(box)) {
          return false;
        } else {
          boxSet.add(box);
        }
      }
    }
  }

  return true;
};
