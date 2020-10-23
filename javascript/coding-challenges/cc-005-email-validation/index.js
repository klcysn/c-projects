document.querySelector("button").addEventListener("click", check)
const output =document.querySelector("div")

document.querySelector("input").addEventListener("keyup", (event)=>{
    if(event.keyCode == 13){check()}
})

function check(){
    const inputValue = document.querySelector("input").value
    const website = document.querySelector("input").value.split("@")[1]

    if(!inputValue.includes("@")){
        output.innerText = "Your mail address has't '@', please write your mail again!"
    }else if(website == ""){
        output.innerText = "Your mail address has't 'website', please write your mail again!"
    }else if(website.split(".")[1]==undefined || website.split(".")[1]==""){
        output.innerText = "Your don't have extension, please write your mail again!"
    }else if(website.split(".")[1].length > 3){
        output.innerText = "Your extension is not correct, please write your mail again!"
    }else{output.innerText = "Your mail is Valid!!"}
}