/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
  
*/

function arrayRemover(array, index, count) {
  // your code here
  for (var i = 0; i < count; i++) {
    if (index === 0) {
      array[i] = "delete"
    } else {
      array[i + 1] = "delete"
    }
  }
  var hasil = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "delete") {
      continue;
    } else {
      hasil.push(array[i])
    }
  }
  return hasil
}

console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // []


var arrayLuar = []
for (var i = 0; i < 3; i++) {
  var dalam = []
  for (var j = 0; j < 3; j++) {
    dalam[j] = "*"
  }
  arrayLuar.push(dalam)
}
console.log(arrayLuar);

var arrayLuar = []
for (var i = 0; i < 4; i++) {
  var dalam = []
  for (var j = 0; j < 4; j++) {
    if (j <= i) {
      dalam[j] = "*"
    } else {
      dalam[j] = "-"
    }

  }
  arrayLuar.push(dalam)
}
console.log(arrayLuar);