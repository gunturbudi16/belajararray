/*
GET COORDINATES EXTRA
=======================

fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
dari setiap titik "x", "y", dan "z". Output yang dikembalikan pada fungsi ini adalah
sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.

NOTES:
urutan [[array untuk "x"], [array untuk "y"], [array untuk "z"]]
bila tidak ada y urutan menjadi [[array untuk "x"], [array untuk "z"]]
jadi urutan yang tidak perlu di return

EXAMPLE:
var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", "y"],
  ["2", " ", "y", " "],
  ["3", "x", "y", " "],
]
console.log(getCoordinates(array))
// [ ["B1", "A3"], ["C1", "B2", "B3"] ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ ['A1', 'C1', 'B2', 'A3', 'C3'] ]
*/
function getCoordinates(arr) {
  // code below here

  var tampungx = []
  var tampungy = []
  var tampungz = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "x") {
        tampungx.push(arr[0][j] + arr[i][0])
      } else if (arr[i][j] == "y") {
        tampungy.push(arr[0][j] + arr[i][0])
      } else if (arr[i][j] == "z") {
        tampungz.push(arr[0][j] + arr[i][0])
      }
    }
  }
  var jawaban = []
  var tampung = [tampungx, tampungy, tampungz]
  for (var i = 0; i < tampung.length; i++) {
    if (tampung[i].length > 0) {
      jawaban.push(tampung[i])
    }
  }
  return jawaban
}

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", "y", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", "y"], 
]
console.log(getCoordinates(array))
// [ [ 'C1', 'B2', 'D3', 'C4' ], [ 'C2', 'D4' ] ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ ['A1', 'C1', 'B2', 'A3', 'C3'] ]

var array3 = [
  [" ", "A", "B", "C"],
  ["1", "z", "y", "x"],
  ["2", "y", "x", " "],
  ["3", "x", "z", "x"],
]
console.log(getCoordinates(array3))
// [ [ 'C1', 'B2', 'A3', 'C3' ], [ 'B1', 'A2' ], [ 'A1', 'B3' ] ]