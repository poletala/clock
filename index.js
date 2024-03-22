

const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
let hours   =  currentTimeDate.getHours();
let minutes =  currentTimeDate.getMinutes();
minutes = minutes < 10 ? '0'+minutes : minutes;
let seconds = currentTimeDate.getSeconds();
seconds = seconds < 10 ? '0'+seconds : seconds;
let currentTime = `${hours}:${minutes}:${seconds}`;
let currentDate  = currentTimeDate.getDate();
let currentMonth = month[currentTimeDate.getMonth()];
let CurrentYear = currentTimeDate.getFullYear();
let fullDate = `${currentDate} ${currentMonth}, ${CurrentYear}`;
document.querySelector("time").innerHTML = currentTime;
document.querySelectorAll("time")[1].innerHTML = fullDate;
setTimeout(getCurrentTimeDate, 500);
}
getCurrentTimeDate();