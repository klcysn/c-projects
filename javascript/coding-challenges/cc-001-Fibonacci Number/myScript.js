
document.getElementById("submit").addEventListener("click", Fibonacci)



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
    document.getElementById("screen").innerHTML = list
}


