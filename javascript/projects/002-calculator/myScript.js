//Giving variables
let number = document.querySelectorAll(".number")
let operator = document.querySelectorAll(".operator")
let operatorValue = "";
let equal = document.querySelector(".equal")
let del = document.querySelector(".del")
let clear = document.querySelector(".ac")
let topScreen = document.querySelector(".top_screen")  //.textContent.toString().slice(0, -1)
let bottomScreen = document.querySelector(".bottom_screen")

number.forEach(function(button){
    button.addEventListener("click", function(){
        if(bottomScreen.textContent.includes(".") && button.textContent == ".") return
        
        if(bottomScreen.textContent === "0" && button.textContent != ".") {
            bottomScreen.textContent = "0." + button.textContent
        }else{bottomScreen.textContent += button.textContent}
        
    })
})

operator.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.textContent == "-" && topScreen.textContent == "" && bottomScreen.textContent == ""){
            return bottomScreen.textContent = "-"
        }
        operatorValue = button.textContent
        computation(topScreen.textContent.toString().slice(-1))
        display()
    })
})

function display(){
    topScreen.textContent = bottomScreen.textContent + operatorValue
    bottomScreen.textContent = ""
    
}

function computation(operatorValue){
    if(topScreen.textContent == "" || topScreen.textContent == "+" ||
     topScreen.textContent == "*" || topScreen.textContent == "÷") return
    

    switch(operatorValue){
        case "+" :
            bottomScreen.textContent = (parseFloat(bottomScreen.textContent) * 10 +
             parseFloat(topScreen.textContent.toString().slice(0, -1)) * 10) / 10;
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
    operatorValue = ""
}

document.querySelector(".ac").addEventListener("click", () => {
    bottomScreen.textContent = ""
    topScreen.textContent = ""
    operatorValue = ""
})

document.querySelector(".del").addEventListener("click",  () => {
    bottomScreen.textContent = bottomScreen.textContent.toString().slice(0, -1)
})

document.querySelector(".equal").addEventListener("click", () => {
    computation(topScreen.textContent.slice(-1))
    topScreen.textContent = ""
})