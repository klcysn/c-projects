
document.getElementById("submit").addEventListener("click", Fibonacci)
document.getElementById("number").addEventListener("keyup", enter)

function enter(e){
    if(e.keyCode === 13){
        e.preventDefault()
        document.getElementById("submit").click()
    }
}

function Fibonacci(){
    let list = []
    let number = parseInt(document.getElementById("number").value);
    for(i = -2; i < number-2; i++){
        if(i < 0){list.push(1);}
        else{
            list.push(list[i] + list[i + 1]);
        }
    
    }
    
    list.unshift(0)
    document.getElementById("screen").innerHTML = "==>" + list.join(", ") + "<=="
}


