document.querySelector(".word_input").addEventListener("keyup", reverseWord)
let seperator = document.querySelector(".seperator")
seperator.addEventListener("keyup", triger)
const letters = document.querySelector(".letter_input")
letters.addEventListener("keyup", reverseLetter)
const words = document.querySelector(".word_input")
document.querySelector("button").addEventListener("click", ()=>{location.reload()})


function reverseWord() {
    letters.value = ""
        
    let wordsList = words.value.toUpperCase().split(" ")

    wordsList.reverse()
    
    if(seperator.value == "") seperator.value = " "
    
    document.querySelector(".printer").innerText = wordsList.join(seperator.value)
}

function reverseLetter(){
    words.value = ""
    const letterValue = letters.value

    let lettersList = letterValue.toUpperCase().split("")

    lettersList.reverse()

    if(seperator.value == "") seperator.value = ""

    document.querySelector(".printer").innerText = lettersList.join(seperator.value)
}

function triger(){
    if(words.value != ""){
        reverseWord()
    }else reverseLetter()
}