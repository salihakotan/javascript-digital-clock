let userName = prompt("Please enter your name...");
let userNameDOM = document.querySelector("#userName");
let todaysDateDOM = document.querySelector("#todays-date");
let dayNameDOM = document.querySelector("#day-name");


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");



userNameDOM.innerHTML = `${userName}`;




function showTime(){

    const date = new Date();

    hours.innerHTML = date.getHours();
    if(hours.innerHTML < 10) {
        hours.innerHTML = `0 ${date.getHours()}`
}


    minutes.innerHTML = date.getMinutes();

    if(minutes.innerHTML < 10) {
        minutes.innerHTML = `0 ${date.getMinutes()}`
    }

    seconds.innerHTML = date.getSeconds();
    if(seconds.innerHTML < 10) {
        seconds.innerHTML = `0 ${date.getSeconds()}`
    }

    dayNameDOM.innerHTML = days[date.getDay()];

    
}

setInterval(showTime,0.1);