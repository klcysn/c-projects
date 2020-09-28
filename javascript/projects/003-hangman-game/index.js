const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
const i = Math.floor(Math.random() * 20) + 1;
const word = wordList[i].split("");
console.log("word", word)
word.forEach(() => {
    
})
document.querySelector("body").addEventListener("keyup", (letter) => {
console.log("letter", letter)
    if(letter.keyCode >= 65 && letter.keyCode <= 90){
        if(word.includes(letter.key)){
            alert("okkk")
        }
    }else{return}
});

function chooser(){
      
};
