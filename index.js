const characters    = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers       = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols       = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
let allowedCharacters
const generateBtn = document.getElementById("generate-btn")
let password = { one: "", two: "" }

generateBtn.addEventListener("click", function () {
    characterSelector()
    passwordGenerator()
})

function characterSelector() {
    if (document.querySelector('#symbols-chk').checked && document.querySelector('#num-chk').checked) {
        allowedCharacters = characters.concat(symbols, numbers)
    } else if (document.querySelector('#symbols-chk').checked) {
        allowedCharacters = characters.concat(symbols)
    } else if (document.querySelector('#num-chk').checked) {
        allowedCharacters = characters.concat(numbers)
    } else {
        allowedCharacters = characters
    }
}

function passwordGenerator() {
    password.one = ""
    password.two = ""
    for (let i = 0; i < 30; i++) {
        let randomKey = Math.floor(Math.random() * allowedCharacters.length)
        if (i < 15) {
            password.one += allowedCharacters[randomKey]
            document.querySelector("#password-one").textContent = password.one
        } else {
            password.two += allowedCharacters[randomKey]
            document.querySelector("#password-two").textContent = password.two
        }
    }
}

// function passwordGenerator() {
//     let passwords = getRandomStrings()
//     document.querySelector("#password-one").textContent = passwords[0]
//     document.querySelector("#password-two").textContent = passwords[1]
// }

// function getRandomStrings(length = 15, amount = 2)
// {
//     let strings = [];

//     while(strings.length < amount){
//         let string = "";

//         while (string.length < length) {
//             let randomKey = Math.floor(Math.random() * allowedCharacters.length)
//             string += allowedCharacters[randomKey]
//         }
//         strings.push(string)
//     }

//     return strings;
// }