function screen(){
let times = new Date();
let hour = times.getHours();
let minute = times.getMinutes();
let second = times.getSeconds();
let timeList = [];
timeList.push(second, minute, hour);
let timeList_2 = ["AM"];

timeList.forEach((p) => {
    if(p < 10){
        p = "0" + p.toString()
    }
    timeList_2.unshift(p)
});

if(timeList_2[0] > 12){
    timeList_2[0] = timeList_2[0] - 12;
    timeList_2[timeList_2.length - 1] = "PM";
    if(timeList_2[0] < 10){
        timeList_2[0] = "0" + timeList_2[0]
    }
}


document.querySelector(".screen").innerHTML = timeList_2[0] + " : " + timeList_2[1] + " : " + timeList_2[2] +
" " + timeList_2[3];
setTimeout(screen, 1000);
}

screen()

