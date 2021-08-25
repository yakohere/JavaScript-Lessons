// function sayHello(name) {
//     return `Salom ${name}`
// }

// console.log(sayHello("Sardor"))

// console.log("5 + 5", 5 + 5);
// console.log("5 - 5", 5 - 5);  
// console.log("5 * 5", 5 * 5);
// console.log("5 / 5", 5 / 5);
// console.log("5 ** 5", 5 ** 5);
// console.log("5 % 5", 5 % 5);

// Sonni stringga aylantirish, stringni songa

// function oddOrEven(raqam) {
//     if (raqam % 2 === 0) {
//         return "Juft"
//     } else {
//         return "Toq"
//     }
// }

// const result = oddOrEven(123)
// console.log(result)


// function daraja(a, b) {
//     return a ** b
// }

// console.log(daraja(5, 5))


// let arr = [2, 4, 5, 7]


// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log("max", max)


// if (5 > 4 || 5 < 7) {
//     ...
// }

// console.log("E'lon")


// let ism = 'Sardor'

// console.log(ism[ism.length - 1])


// function mevaQidir(mevalar) {
//     let result = []

//     for (let i = 0; i < mevalar.length; i++) {
//         if (mevalar[i].includes("o")) {
//             result.push(mevalar[i])
//         }
//     }

//     return result;
// }

// console.log(mevaQidir(["olma", "banan", "olcha"]))


// console.log("slice", ism.slice(0, -2))
// console.log("substr", ism.substr(0, 2))
// console.log("substring", ism.substring(0, 2))
// console.log("split", ism.split(""))


// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// console.log(validateEmail("yakyho@gmail.uz"))


// let str = "yakhyo@gmail.com "

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim())
// console.log(str.startsWith("yakhyo"))
// console.log(str.endsWith("yakhyo"))

// function oddOrEven(raqam) {
//     if (raqam % 2 === 0) {
//         return "Juft"
//     } else {
//         return "Toq"
//     }
// }

// const oddOrEvenArrow = (raqam) => raqam % 2 === 0 ? "Juft" : "Toq"

// console.log(ozgaruvchi(5))
// console.log(oddOrEvenArrow(4))


// function oddOrEvenSwitch(raqam) {
//     switch (raqam % 2 === 0) {
//         case true:
//             return "Juft";
//         case false:
//             return "Toq"
//     }
// }

// console.log(oddOrEvenSwitch(2))


// raqam % 2 === 0 ? "Juft" : "Toq"


// let mevalar = ["olma", "orik", "shaftoli"]
// mevalar.shift()
// mevalar.unshift()

// console.log(mevalar.filter(meva => meva.includes("l")))

// let raqamlar = [1, 2, 4];

// console.log(raqamlar.map(raqam => raqam * 2))



// "aaaBBBccA"
// "AAAbbbCCa"

function lowerToUpper(str) {
    let result = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toUpperCase()
        }
    } 

    return result

}

console.log(lowerToUpper("aaaBBBccA"))

