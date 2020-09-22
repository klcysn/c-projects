function enter(e){
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById("submit").click();
    }
}

document.getElementById("submit").addEventListener("click", guessNumber);
document.getElementById("guess").addEventListener("keyup", enter);
let number = Math.ceil(Math.random() * 100)
let counter = 0

function guessNumber(){
   let guess = document.getElementById("guess").value;
   let result;
   if(guess == "") {result = "Write The Number";}
   else if(guess == NaN){result = "Are you sure that this is a number?";}
   else if (parseInt(guess) > number){result = "I am thinking about lower number";}
   else if(parseInt(guess) < number){result = "I am thinking about higher number";}
   else if(parseInt(guess) == number){
       alert(`You are the winner :D. You guest after ${counter} times!`)
       let conf = confirm("You wanna play again?");
       if(conf){
           location.reload();
       }else{
           document.getElementById("orientation").innerHTML = "Thanks for game!";
           return
       }
    }
   document.getElementById("guess").value = ""
   counter++;
   document.getElementById("orientation").innerHTML = result
   document.getElementById("screen").innerHTML = "This is your test number: " + counter
   
   
    
}