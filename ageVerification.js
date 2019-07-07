/*
=================
AGE VERIFICATION
=================

[INSTRUCTION]
Terdapat function ageVerification , function akan mengembalikan list orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
- jika gender male diberikan imbuhan Mr.
- jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
- jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

[EXAMPLE]
input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/


function ageVerification(list) {
    // your code here
    var hasil = []
    for (var i = 0; i < list.length; i++) {
        var pisah = []
        var kalimat = ''
        for (var j = 0; j < list[i].length; j++) {
            if (list[i][j] == ",") {
                pisah.push(kalimat)
                kalimat = ''
                continue;
            } else if (j === list[i].length - 1) {
                kalimat += list[i][j]
                pisah.push(kalimat)
            }
            kalimat += list[i][j]
        }
        hasil.push(pisah)
    }
    return hasil
    var output = []
    for (var i = 0; i < hasil.length; i++) {
        if (hasil[i][2] > 19) {
            var akhir = ''
            if (hasil[i][1] == "male") {
                akhir += "Mr"
            } else if (hasil[i][1] == "female" && hasil[i][2] > 30) {
                akhir += "Mrs"
            } else if (hasil[i][1] == "female" && hasil[i][2] < 30) {
                akhir += "Ms"
            }
            var akhir = akhir + ". " + hasil[i][0]
            output.push(akhir)
        }
    }
    return output
}


var people = ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19'];

console.log(ageVerification(people));
// ['Mr. Miftah', 'Mr. Dhimas', 'Mr.Toni', 'Mrs. Nita', 'Ms.Nana']

var people2 = ['Arya,female,22', 'Greyjoy,male,100', 'littlefinger,male,45', 'Bran,male,15']
console.log(ageVerification(people2));
// ['Ms. Arya', 'Mr. Greyjoy', 'Mr. littlefinger']