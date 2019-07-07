// Competencies: Loopings
/*
Competencies: Looping

=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/
// SKELETON CODE (Code Sample)
function numberLadder(num) {
    for (var x = num; x > 0; x--) {
        var charY = "";
        for (var y = x; y > 0; y--) {
            charY += String(y);
        }
        console.log(charY);
    }
    return
}
numberLadder(10);
numberLadder(5);

// SKELETON CODE (Code Sample)

console.log('Lopping untuk height 3');
var nilai = 3;
var tampung = 0
for (var i = nilai; i >= 0; i--) {
    var angka = ""
    for (var j = 1; j <= i; j++) {
        angka += j + tampung
    }
    tampung++
    console.log(angka);

}
console.log('Lopping untuk height 5');
var height = 5; // isi dengan nilai tinggi tangga!
var nilai = 0;
for (var i = height; i >= 0; i--) {
    var angka = '';
    for (var j = 1; j <= i; j++) {
        angka += j + nilai;
    }
    nilai++;
    console.log(angka);
}
console.log('Lopping untuk height 1');
var height = 1; // isi dengan nilai tinggi tangga!
var nilai = 0;
for (var i = height; i >= 0; i--) {
    var angka = '';
    for (var j = 1; j <= i; j++) {
        angka += j + nilai;
    }
    nilai++;
    console.log(angka);
}
// Competencies: Loopings
/*
=================
Horizontal Series
=================
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable max, dimana akan menampilkan deret pengurangan ke kanan hingga mencapai angka 1.
Tampilkan deret sejumlah nilai max. 
Buatlah sebuah deret angka horizontal dengan pola berikut:
contoh 1 (max = 3):
321
321
321
contoh 2 (height = 5):
54321
54321
54321
54321
54321
 
contoh 3 (height = 1):
1
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var max = 5; // isi dengan nilai max!

for (var i = 0; i < max; i++) {
    var str = "";
    for (var j = max; j > 0; j--) {
        str += j;
    }
    console.log(str);
}

console.log('Lopping untuk height 1');
var height = 1; // isi dengan nilai tinggi tangga!
var nilai = 0;
for (var i = height; i >= 0; i--) {
    var angka = '';
    for (var j = 1; j <= i; j++) {
        angka += j + nilai;
    }
    nilai++;
    console.log(angka);
}