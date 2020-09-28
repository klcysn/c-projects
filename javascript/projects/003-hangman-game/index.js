const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
const i = Math.floor(Math.random() * 20) + 1;
const word = wordList[i].split("");
console.log("word", word)
word.forEach((letter) => {
    let division = document.createElement("div")
    division.classList.add("letter")
    division.innerHTML = letter
    document.querySelector(".word").appendChild(division)
})
document.querySelector("body").addEventListener("keyup", (letter) => {
    if(letter.keyCode >= 65 && letter.keyCode <= 90){
        word.forEach((x) => {
            if(x == letter.key){
                document.querySelectorAll(".letter").style.color = "white";
            }
        });
    }else{return}
});


