// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @

contoh 3 (drawThreeColsBox(1)):
@

Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(num) {
  // your code here
  var counter = 1
  for (var i = 0; i < num; i++) {
    var char = ''
    for (var j = 0; j < num; j++) {
      if (counter % 3 === 0) {
        char += " *"
      } else if (counter % 2 !== 0) {
        char += " @"
      } else {
        char += " $"
      }
      counter++
    }
    console.log(char);
  }
}

drawSymbolicColsBox(3);
console.log();
drawSymbolicColsBox(5);
console.log();
drawSymbolicColsBox(1);