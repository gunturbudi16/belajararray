/*
Tranpose the Matrix
================
Author: Muhammad Ramadiansyah
Description: matrixTranspose adalah sebuah fungsi untuk menukar posisi baris dan kolom
              dari sebuah matriks
Examples:
1. input = [
  [1, 2],
  [3, 4],
  [5, 6]
]
  output = [
    [1, 3, 5],
    [2, 4, 6]
  ]
2. input = [
    [1, 2]
]
  output = [
    [1],
    [2]
  ]
*/
function matrixTranspose(matriks) {
  // write your code here
  var column = matriks.length;
  var row = matriks[0].length;
  console.log(column);

  var newArr = [];
  for (var x = 0; x < row; x++) {
    var oneRow = []
    for (var y = 0; y < column; y++) {
      oneRow.push(matriks[y][x])
    }
    newArr.push(oneRow)
  }
  return newArr;
}

console.log(matrixTranspose([
  [1, 2],
  [3, 4],
  [5, 6]
]))
/*
    input:
    [
    [1, 2],
    [3, 4],
    [5, 6]
    ]
    output :
    [
    [1, 3, 5],
    [2, 4, 6]
    ]
*/

console.log(matrixTranspose([
  [1, 2],
  [3, 4]
]));

/*
    input:
    [
    [1, 2],
    [3, 4]
    ]
    output :
    [
    [1, 3],
    [2, 4]
    ]
*/

console.log(matrixTranspose([
  [1, 2]
]))
/*
    input:
    [
    [1, 2]  
    ]
    output :
    [
    [1],
    [2]
    ]
*/

console.log(matrixTranspose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
/*
    input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]
    output = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]
*/