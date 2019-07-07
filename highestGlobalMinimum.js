/*
======================
Highest Global Minimum
======================
Name :_____________
[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua 
angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- WAJIB menuliskan PSEUDOCODE. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan 
  secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

// - make function named sort with one parameter named arr.
// - DO loop, start with i value = 0. ADD 1 to i value for each loop WHILE i value lesser than arr length.
// - DO loop, start with j value = 0. ADD 1 to j value for each loop WHILE j value lesser than arr length REDUCED by i value.
// - IF arr[j] value is greater than arr[j+1] value, DO :
// - READ and STORE temp with arr[j] value
// - STORE arr[j] with arr[j+1] value
// - STORE arr[j+1] with temp value
// - return arr value
// *end of function sort*

// - make function named highestGlobalMinimum with two parameters named firstArr, and secondArr.
// - STORE firstArr with sort(firstArr) value
// - STORE secondArr with sort(secondArr) value
// - IF firstArr[0] value is greater than secondArr[0] value, RETURN firstArr[0]
// - ELSE RETURN secondArr[0]
// *end of function highestGlobalMinimum

function sort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function highestGlobalMinimum(firstArr, secondArr) {
  // only write code here
  firstArr = sort(firstArr)
  secondArr = sort(secondArr)
  if (firstArr[0] > secondArr[0]) return firstArr[0]
  else return secondArr[0]
}

console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 5