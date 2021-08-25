// JavaScriptda ikki turdagi Data Type lar bor

// 1. Primitive. Bu turdagi data type lar o'zgarmas hisoblanadi!

// 1. number
// 2. string 
// 3. boolean
// 4. null
// 5. undefined
// 6. bigInt

// let raqam = 12
// let matn = "Salom"
// let mantiq = true || false
// let yoq = null
// let topilmadi = undefined
// let kattaRaqam = 1000000000000000000n

// 2. Object

// 1. typeof [] = object

// let meva1 = "Banan"
// let meva2 = "Olma"
// let meva3 = "Shaftoli"


// 1 o'lchamlik array
// let mevalar = ["Banan", "Olma", "Shaftoli"]
// let raqamlar = [1, 2, 3, 4, 5, 3]
// raqamlar.splice(2, 1, 13)

// function deleteThrees(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 3) {
//             array.splice(i, 1)
//             i--
//         }
//     }

//     return array
// }

// console.log(deleteThrees([1, 3, 3, 4, 5, 3]))

// unshift() arrayning boshiga qo'shish va push() arrayni ohiriga qo'shish 
// mevalar.push("Uzum")
// mevalar.unshift("Gilos")

// shift() arrayning boshidagi elementni ochiradi va pop() arrayning ohiridagi elementni ochiradi 
// mevalar.shift()
// mevalar.pop()



// Ko'p o'lchamlik array
// let mevalarMalumot = [
//     ["Olma", "5000", "Namangan"],
//     ["Banan", "10000", "Xitoy"],
//     ["Shaftoli", "7000", "Oltiariq"]
// ]

// console.log(mevalarMalumot[0][0], mevalarMalumot[0][1], "so'm")


// 2. typeof {} = object

// let mevalarObjekti = {
//     nomi: "Olma",
//     narxi: 2400,
//     "qayerni-ki": "Namangan"
// }

// mevalarObjekti["rangi"] = "Qizil"
// mevalarObjekti.narxi = 5000
// delete mevalarObjekti.nomi

// Arrayni ichida objektlar

// let aralash = [12, true, [], "Salom", -1, {}]
// let mevalar = [
//     {
//         nomi: "Olma",
//         narxi: 2400,
//         "qayerni-ki": "Namangan"
//     },
//     {
//         nomi: "Banan",
//         narxi: 7000,
//         "qayerni-ki": "Xitoy"
//     },
// ]


// console.log(mevalar[0].nomi)

// 3. Function    

// 1. typeof function(){} = function