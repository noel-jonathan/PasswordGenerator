const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
let allowedCharacters
const generateBtn = document.getElementById("generate-btn")
let password = { one: "", two: "" }

generateBtn.addEventListener("click", function () {
    characterSelector(); passwordGenerator()
})

function characterSelector() {
    if (document.querySelector('#symbols-chk').checked && document.querySelector('#num-chk').checked) {
         allowedCharacters = characters.concat(symbols, numbers); console.log(allowedCharacters) 
    } else if (document.querySelector('#symbols-chk').checked) {
        allowedCharacters = characters.concat(symbols); console.log(allowedCharacters)
    } else if (document.querySelector('#num-chk').checked) {
        allowedCharacters = characters.concat(numbers); console.log(allowedCharacters)
    } else {
        allowedCharacters = characters
    }
    
}

function passwordGenerator() {
    password.one = ""
    password.two = ""
    for (let i = 0; i < 30; i++) {
        let j = Math.floor(Math.random() * allowedCharacters.length)
        if (i < 15) {
            password.one += allowedCharacters[j]
            document.querySelector("#password-one").textContent = password.one
        } else {
            password.two += allowedCharacters[j]
            document.querySelector("#password-two").textContent = password.two
        }
    }
}