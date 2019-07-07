/*
=================
FIND EMPTY SEAT
=================

[INSTRUCTION]
Terdapat function findEmptySeat , function ini akan memberikan daftar tempat duduk yang kosong sesuai dengan row yang diinput user.
Terdapat 2 parameter yang pertama adalah array multidimensi yang berisi list tempat duduk, tempat duduk yang telah di booking ditandai dengan huruf X.
Parameter kedua adalah row yang ingin dicari user ('ditandai dengan huruf kapital') .

[EXAMPLE]
param 1 : 
[
  ['ROW', '1', '2', '3', '4', '5', '6'],
  ['A', 'X', 'X', 'X', 'X', ' ', ' '],
  ['B', ' ', 'X', ' ', ' ', ' ', ' '],
  ['C', 'X', 'X', 'X', 'X', ' ', ' '],
  ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]
param 2 : 
D
output :
Terdapat 3 bangku kosong, D1, D2, D3

[RULES]
- dilarang menggunakan indexof, includes
*/

function findEmptySeat(arr, row) {
    // your code here
    var cekBaris = 0
    var cekKursi = 0
    var kursiKosong = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] == row) {
            cekBaris++
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == " ") {
                    kursiKosong.push(row + arr[0][j])
                    cekKursi++
                }
            }
        }
    }
    // if (kursiKosong.length > 1) {
    //     kursiKosong[kursiKosong.length - 1] = "dan " + kursiKosong[kursiKosong.length - 1]
    // }


    if (cekBaris == 0) {
        return "baris " + row + " tidak tersedia"
    } else if (cekKursi == 0) {
        return "Bangku dibaris " + row + " sudah penuh"
    } else {
        return "terdapat " + cekKursi + " bangku Kosong " + kursiKosong
    }
}

var cinemaSeat2 = [
    ['ROW', '10', '11', '12', '13'],
    ['E', 'X', 'X', 'X', 'X'],
    ['F', ' ', 'X', ' ', ' '],
    ['G', 'X', ' ', 'X', 'X'],
    ['H', ' ', ' ', ' ', 'X'],
]

console.log(findEmptySeat(cinemaSeat2, 'G'));
//Terdapat 1 bangku kosong, G11

console.log(findEmptySeat(cinemaSeat2, 'Z'));
// Baris Z tidak tersedia

var cinemaSeat = [
    ['ROW', '1', '2', '3', '4', '5', '6'],
    ['A', 'X', 'X', 'X', 'X', ' ', ' '],
    ['B', ' ', 'X', ' ', ' ', ' ', ' '],
    ['C', 'X', 'X', 'X', 'X', 'X ', 'X'],
    ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]

console.log(findEmptySeat(cinemaSeat, 'D'));
// Terdapat 3 bangku kosong, D1, D2, D3

console.log(findEmptySeat(cinemaSeat, 'A'));
// Terdapat 2 bangku kosong, A5, A6

console.log(findEmptySeat(cinemaSeat, 'C'));
// Bangku di baris C sudah penuh