/*
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. 
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi 
di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

function addEvenOdd(arrNum) {
    var sumEven = 0
    var sumOdd = 0;
    for (var x = 0; x < arrNum.length; x++) {
        if (arrNum[x] % 2 == 0) {
            sumEven += arrNum[x]
        } else {
            sumOdd += arrNum[x]
        }
    }
    return [
        [sumOdd],
        [sumEven]
    ]
}

console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

console.log(addEvenOdd([])); // [ [0], [0] ]

/*
================================
Array Mastery: Substract Evens and Odds
================================

[INSTRUKSI]

Function substractEvenOdd akan menerima satu parameter berupa array of number.
Kelompokkanlah hasil pengurangan bilangan yang genap dan bilangan yang ganjil dan
return array 2 dimensi di mana array pertama merupakan hasil pengurangan angka genap dan
array selanjutnya adalah hasil pengurangan angka ganjil

Contoh:
input: [3, 5, 7, 8]
output: [[8], [-9]]

input: [15, 4, 6, 2]
output: [[3], [0]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal
  tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

/* 
pseudocode

FUNCTION 'substractEvenOdd' WITH PARAMS 'arrNum'
  
  STORE 'i' WITH 0
  STORE NEW ARRAY 'newArrRum'
  STORE NEW ARRAY 'ganjil'
  STORE NEW ARRAY 'genap'
  STORE 'even'
  STORE 'odd'
  
  FOR 'i' IS LESS THAN the length of 'arrNum' DO
    IF 'arrNum' in index 'i' MOD 2 is 0
      THEN
      'even' is equal to 'arrNum' in index i
      add 'even' INTO array 'genap'
    ELSE IF 'arrNum' in index 'i' MOD 2 IS NOT equal to 0
      THEN
      'odd' is equal to 'arrNum' in index 'i'
      add 'odd' INTO array 'ganjil'
      
  FOR i equal to 0 and 'i' is LESS than the length 'genap' DO
    IF the length of genap is not equal to 1
      THEN
      CALCULATE 'resX' WITH 'genap' in index 'i'
      STORE 'resX' with the result of CALCULATION
      PUSH 'newArrNum' in index 0 with 'resX'
    ELSE
      CALCULATE 'genap' in index i with 0
      PUSH 'newArrNum' in index 0 with the result of CALCULATION
   
  FOR i equal to 0 and 'i' is LESS than the length 'ganjil' DO
    IF the length of ganjil is not equal to 1
      THEN
      CALCULATE 'resY' WITH 'ganjil' in index 'i'
      STORE 'resY' with the result of CALCULATION
    ELSE
      CALCULATE 'ganjil' in index i with 0
  
  PUSH 'newArrNum' in index 1 with 'resY'

  RETURN 'newArrNum'

*/

function substractEvenOdd(arrNum) {
    var i = 0;
    var newArrNum = [];
    var ganjil = [];
    var genap = [];
    var even, odd;
    var resX, resY;

    for (i; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            even = arrNum[i];
            genap.push(even);

        } else if (arrNum[i] % 2 !== 0) {
            odd = arrNum[i];
            ganjil.push(odd);
        }
    }

    // console.log(ganjil);
    // console.log(genap);

    for (i = 0; i < ganjil.length; i++) {
        if (ganjil.length === 1) {
            resY = ganjil[i];
        } else {
            if (i === 0) {
                resY = ganjil[i];
            } else {
                resY = resY - ganjil[i];
            }

        }
    }
    //console.log(resY);

    for (i = 0; i < genap.length; i++) {
        if (genap.length === 1) {
            resX = genap[i];
        } else {
            if (i === 0) {
                resX = genap[i];
            } else {
                resX = resX - genap[i];
            }
        }
    }

    if (resX === undefined && resY === undefined) {
        newArrNum.push([0], [0])
    } else if (resY === undefined) {
        newArrNum.push([resX], [0])
    } else if (resX === undefined) {
        newArrNum.push([0], [resY])
    } else {
        newArrNum.push([resX], [resY]);
    }

    return newArrNum;
}

console.log(substractEvenOdd([3, 5, 7, 8])); // [ [8], [-9] ]

console.log(substractEvenOdd([14, 4, 6, 2])); // [ [2], [0] ]

console.log(substractEvenOdd([])); // [ [0], [0] ]