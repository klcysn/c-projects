function screen(){
let times = new Date();
let hour = times.getHours();
let minute = times.getMinutes();
let second = times.getSeconds();
let timeList = [hour, minute, second];

let timeList_2 = timeList.map((p) =>{
    if(p < 10){return "0" + p
}else {return p}
})

timeList_2.push("AM");

if(timeList_2[0] > 12){
    timeList_2[0] = timeList_2[0] - 12;
    timeList_2[3] = "PM";
    if(timeList_2[0] < 10){
        timeList_2[0] = "0" + timeList_2[0]
    }
}


document.querySelector(".screen").innerHTML = timeList_2[0] + " : " + timeList_2[1] + " : " + timeList_2[2] +
" " + timeList_2[3];
setTimeout(screen, 1000);
}

screen()

