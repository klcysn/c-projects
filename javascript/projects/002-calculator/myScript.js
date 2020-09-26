//Giving variables
let number = document.querySelectorAll(".number")
let operator = document.querySelectorAll(".operator")
let operatorValue = "";
let equal = document.querySelector(".equal")
let del = document.querySelector(".del")
let clear = document.querySelector(".ac")
let topScreen = document.querySelector(".top_screen")
let bottomScreen = document.querySelector(".bottom_screen")

number.forEach(function(button){ //every click on .number class triggers here
    button.addEventListener("click", function(){
        if(bottomScreen.textContent.includes(".") && button.textContent == ".") return // here prevents double dot on screen
        
        if(bottomScreen.textContent === "0" && button.textContent != ".") { //here prevents double 0 without dot on screen
            bottomScreen.textContent = "0." + button.textContent
        }else{bottomScreen.textContent += button.textContent}
    })
})

operator.forEach((button) => { //every click on .operator class triggers here
    button.addEventListener("click", () => {
        if(button.textContent == "-" && bottomScreen.textContent == ""){ //here allows to enter negative value
            return bottomScreen.textContent = "-"
        }
        if((bottomScreen.textContent == "" || bottomScreen.textContent == "-") &&
         topScreen.textContent.toString().slice(-1) != "") return //here prevents to add double operator on screen allows to enter negative value
        operatorValue = button.textContent
        computation(topScreen.textContent.toString().slice(-1)) //slice prevents to send operator's value
        display()
    })
})

function display(){
    topScreen.textContent = bottomScreen.textContent + operatorValue
    bottomScreen.textContent = ""
    
}

function computation(operatorValue){
    if(topScreen.textContent == "" || topScreen.textContent == "+" ||
     topScreen.textContent == "*" || topScreen.textContent == "÷") return //here prevents to compute if top screen is empty
    

    switch(operatorValue){
        case "+" :
            bottomScreen.textContent = (parseFloat(bottomScreen.textContent) * 10 +
             parseFloat(topScreen.textContent.toString().slice(0, -1)) * 10) / 10; //here prevents 0.1+0.2 compute error
            break
        case "-" :
            bottomScreen.textContent = parseFloat(topScreen.textContent.toString().slice(0, -1)) -
             parseFloat(bottomScreen.textContent);
            break
        case "*" :
            bottomScreen.textContent = parseFloat(bottomScreen.textContent) *
             parseFloat(topScreen.textContent.toString().slice(0, -1));
            break
        case "÷" :
            bottomScreen.textContent = parseFloat(topScreen.textContent.toString().slice(0, -1)) /
             parseFloat(bottomScreen.textContent);
            break
        default:
            bottomScreen.textContent ="Error"
    }
    operatorValue = "" //here clear operator's value 
}

document.querySelector(".ac").addEventListener("click", () => {//here clear all data
    bottomScreen.textContent = ""
    topScreen.textContent = ""
    operatorValue = ""
})

document.querySelector(".del").addEventListener("click",  () => {
    bottomScreen.textContent = bottomScreen.textContent.toString().slice(0, -1)
}) //here deletes bottomScreen last value

document.querySelector(".equal").addEventListener("click", () => {
    if(bottomScreen.textContent == "" || bottomScreen.textContent == "-"){
        return bottomScreen.textContent = topScreen.textContent.slice(0, -1)
    } // here prevents error if bottomScreen is empty
    computation(topScreen.textContent.slice(-1))
    topScreen.textContent = ""
})