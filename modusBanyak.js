function modusBanyak(angka) {
    var obj = {}
    for (var i = 0; i < angka.length; i++) {
        if (!obj[angka[i]]) {
            obj[angka[i]] = 1
        } else {
            obj[angka[i]] += 1
        }
    }
    var max = -1
    var hasil = []
    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key]
        }
    }
    for (var key in obj) {
        if (obj[key] == max) {
            hasil.push(key)
        }
    }
    return hasil
}
console.log(modusBanyak([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(modusBanyak([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(modusBanyak([2, 2])) // []
console.log(modusBanyak([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]