const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
const i = Math.floor(Math.random() * 20) + 1;
const word = wordList[i].split("");
console.log("word", word);
let wordDiv =[];
word.forEach((letter) => {
    let division = document.createElement("div")
    division.classList.add("letter")
    division.innerHTML = letter
    document.querySelector(".word").appendChild(division)
    wordDiv.push(division)
})
console.log(wordDiv)
console.log(document.querySelector(".word"))
document.querySelector("body").addEventListener("keyup", (letter) => {
    if(letter.keyCode >= 65 && letter.keyCode <= 90){
        if(!word.includes(letter.key)){
            document.querySelector(".wrong_words").textContent += letter.key;
            return
        }else {
        
            wordDiv.forEach((x) => {
            if(x.innerText == letter.key){
                x.style.color = "white";
            }
        });
        
        }
         
    
    }else return
});



