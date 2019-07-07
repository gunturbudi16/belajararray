/**
Reverse Even
Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['naitwa', 'raijin', 'gekrednuht']
- input: ['draco', 'luna', 'riddle', 'hagrid']
  output: ['ocard', 'luna', 'elddir', 'hagrid']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA DAN PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/
function reverseEven(arr) {
    var balik = ' ';
    var hasil = [];
    // console.log(balik);
    // console.log(hasil);
    for (var i = 0; i < arr.length; i++) {
        balik = '';
        if (i % 2 === 0) {
            for (var j = arr[i].length - 1; j >= 0; j--) {
                balik += arr[i][j]
            }
            hasil.push(balik)
        } else {
            hasil.push(arr[i])

        }
    }
    // console.log(balik);
    // console.log(hasil);
    return hasil
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseEven([]));
// // []