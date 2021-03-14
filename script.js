const newYears = '1 Jan 2022';

const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const Tseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(Tseconds / 3600 / 24);
    const hours = Math.floor(Tseconds / 3600) % 24;
    const minutes = Math.floor(Tseconds / 60) % 60;
    const seconds = Math.floor(Tseconds) % 60;
    
    dayEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;

}

//Initial Call
countdown();
setInterval(countdown, 1000);

