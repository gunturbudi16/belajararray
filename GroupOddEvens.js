/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

// PSEUDOCODE
// make function named 'groupedOddEven', with its parameter named 'students'
// READ and STORE 2 empty array variables named 'odds' and 'evens'
// make a loop: READ and STORE 'i' to 0, DO WHILE 'i' less than 'numbers' length, ADD  1 to 'i' for each loop
// IF 'students[i]' is odd, STORE 'students[i]' to 'odds'
// ELSE STORE 'students[i]' to 'evens'
// JOIN both 'odds' and 'evens' value with ', ' as separators
// IF 'odds' length equals to 0 DISPLAY 'EVENS ' + 'evens'
// ELSE IF 'evens' length equals to 0 DISPLAY 'ODDS ' + 'odds'
// ELSE DISPLAY 'ODDS: ' + 'odds' + ' EVENS: ' + 'evens'

function groupOddEven(students) {
  // Your code here 🔥
  var odds = [],
    evens = []
  for (var i = 0; i < students.length; i++) {
    if (students[i] % 2 === 1) odds.push(students[i])
    else evens.push(students[i])
  }

  odds = odds.join(', '), evens = evens.join(', ')
  if (odds.length === 0) return 'EVENS: ' + evens
  else if (evens.length === 0) return 'ODDS: ' + odds
  else return 'ODDS: ' + odds + ' EVENS: ' + evens
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"