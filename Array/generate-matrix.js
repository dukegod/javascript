/**
 *
 * @param {*} row: 行数
 * @param column: 列数
 * @param initail: 初始值
 */

function matrixArray(row, column, initial) {
  const arr = [];
  let i;
  let j;

  for (i = 0; i < row; i += 1) {
    arr[i] = [];
    for (j = 0; j < column; j += 1) {
      arr[i][j] = initial;
    }
  }
  return arr;
}

const ma = matrixArray(2, 2, 100);
console.log(ma[0][0]);
