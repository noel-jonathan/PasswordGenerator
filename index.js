let characters = {
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"],
    allowed: []
}
const generateBtn = document.getElementById("generate-btn")
let password = { one: "", two: "" }

generateBtn.addEventListener("click", function () {
    allowedCharacters(); passwordGenerator(); test()
})

function passwordGenerator() {
    password.one = ""
    password.two = ""
    for (let i = 0; i < 30; i++) {
        let j = Math.floor(Math.random() * characters.allowed.length)
        if (i < 15) {
            password.one += characters.allowed[j]
            document.querySelector("#password-one").textContent = password.one
        } else {
            password.two += characters.allowed[j]
            document.querySelector("#password-two").textContent = password.two
        }
    }
}

function allowedCharacters() {
    characters.allowed = []
    characters.allowed.push(characters.letters)
    if (document.querySelector("#symbols-chk").checked)
    characters.allowed.push(characters.symbols)
    console.log("Symbols checked");
    if (document.querySelector("#num-chk").checked)
    characters.allowed.push(characters.numbers)
    console.log("Numbers checked");
}

function test() {
    document.querySelector('#test').textContent = characters.allowed.length
}