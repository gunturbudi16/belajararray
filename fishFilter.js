/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
// var results = []
    // for (var i = 0; i < fishes.length; i++) {
    //     if (fishes[i].indexOf('ikan') != -1) results.push(fishes[i]);
    // }
    // if (results.length == 0) {
    //     return "tidak ada Data"
    // }
    // results[results.length - 1] = 'dan ' + results[results.length - 1];
    // return results.join(', ')
*/

function fishFilter(fishes) {
    var hasil = []
    for (var i = 0; i < fishes.length; i++) {
        var flek = true
        if (fishes[i][0] != "i")
            flek = false
        if (flek)
            hasil.push(fishes[i])
    }
    if (hasil.length == 0)
        return "Tidak Ada Data"
    hasil[hasil.length - 1] = "dan " + hasil[hasil.length - 1]
    return `${hasil}`
}



// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data