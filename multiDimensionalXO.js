/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!

# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'

*/

function multiDimensionalXO(size) {
    // Code here
    var x = "X"
    var o = "O";
    var counter = 0;
    var result = []
    for (var i = 0; i < size; i++) {
        var dalam = []
        if (i % 2 === 0) {
            for (var j = 0; j < size; j++) {
                if (counter > x.length - 1) {
                    counter = 0
                }
                if (j % 2 === 0) {
                    dalam.push(o)
                } else {
                    dalam.push(x)
                }
            }
        } else {
            for (var j = 0; j < size; j++) {
                if (counter > x.length - 1) {
                    counter = 0
                }
                if (j % 2 === 0) {
                    dalam.push(x)
                } else {
                    dalam.push(o)
                }

            }
        }
        result.push(dalam)
    }
    return result
}

console.log(multiDimensionalXO(3));
// [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]

console.log(multiDimensionalXO(5));
/*
[ [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(0));
// Invalid input



function multiDimensionalXO(size) {
    var x = "X"
    var o = "O";
    var counter = 0;
    var result = []
    for (var i = 0; i < size; i++) {
        result.push([])
        if (i % 2 === 0) {
            for (var j = 0; j < size; j++) {
                if (counter > x.length - 1) {
                    counter = 0
                }
                if (j % 2 === 0) {
                    result[i].push(x)
                } else {
                    result[i].push(o)
                }

            }
        } else {
            for (var j = 0; j < size; j++) {
                if (counter > x.length - 1) {
                    counter = 0
                }
                if (j % 2 === 0) {
                    result[i].push(o)
                } else {
                    result[i].push(x)
                }

            }
        }

    }
    return result
}

console.log(multiDimensionalXO(5));
// [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]