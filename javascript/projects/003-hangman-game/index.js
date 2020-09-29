const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
const i = Math.floor(Math.random() * 20) + 1; //use i for take random index from wordlist
const word = wordList[i].split(""); //split wordlist to append its chars to in div word on screen
console.log("word", word);
let wordDiv = []; //to collect every word char with class as object
let letterKnown = []; //to collect letter known by user
let man = ["#head", "#body", "#arm_right", "#arm_left", "#knee_right", "#knee_left"]; // to make visible mans part in order
let indx = 0; // to use as index for man list
word.forEach((letter) => { // to create div for every word char and give class and collect them as object in wordDiv list 
    let division = document.createElement("div");
    division.classList.add("letter");
    division.innerHTML = letter;
    document.querySelector(".word").appendChild(division);
    wordDiv.push(division);
})
console.log(wordDiv);
console.log(document.querySelector(".word"));
document.querySelector("body").addEventListener("keyup", collector = function(letter){check(letter)}); //to take input from body's everywhere. And give name function to remove addEventListener later
document.querySelector(".refresh").addEventListener("click", () => {location.reload()})




function check(letter) {

    if(letter.keyCode >= 65 && letter.keyCode <= 90){ //to take only a-z and A-Z inputs
        if(document.querySelector(".wrong_words").innerText.includes(letter.key) || letterKnown.includes(letter.key)){ //to give information when user press button pressed before
            document.querySelector(".snackbar").classList.replace("snackbar", "snackbar2") // to show snackbar from bottom by changing class 
            setTimeout(function(){document.querySelector(".snackbar2").classList.replace("snackbar2", "snackbar")}, 3000) // to make invisible snackbar again after 3 seconds by changing class
        }else if(!word.includes(letter.key)){ // to draw man's body parts and write wrong letter in wrong division on screen when user press button
            document.querySelector(man[indx]).style.visibility = "visible" //to make man's part visible
            indx++ //to make next body part visible in man list
            if(indx == man.length){ // to freeze screen when game end
                document.querySelector(".anounce").innerText += wordList[i] // to add word in alert box user couldn't find
                document.querySelector(".confirm_box").style.display = "block" // to make visible alert box
                document.querySelector(".container2").style.display = "block" // to freeze screen to not user click by mouse
                document.querySelector("body").removeEventListener("keyup", collector) // to remove entry button option from body 
            }else if(document.querySelector(".wrong_words").innerText == ""){ // to prevent write comma when user press first wrong letter button
                document.querySelector(".wrong_words").textContent += letter.key;
            }else{document.querySelector(".wrong_words").textContent += "," + letter.key;}  //to write comma with wrong letter 
        }else {
            wordDiv.forEach((x) => { //to iterate word every letter user strugle to find with class as object to change color 
            if(x.innerText == letter.key){ // to compare text in div with letter(it comes from function parameter) object user pressed
                x.style.color = "white";
                letterKnown.push(x.innerText); // to add letter user find in list to compare with letter user pressed at the begining of this function
            }
        });
        
        }
         
    
    }else return // to finish function when user pressed non-alphabetic characters
};



