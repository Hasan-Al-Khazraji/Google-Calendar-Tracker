const init = function(){
    document.getElementById('btnSubmit').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();

    const color = document.getElementById('color').value;
    const title = document.getElementById('title');

    const button = document.getElementById('btnSubmit');
    const colors = document.getElementsByName('color');

    // Start timer
    if (button.children[0].innerHTML != 'End Timer'){
        const start = new Date;
        
        // Front end shenanigans
        button.children[0].innerHTML = "End Timer";
        button.style.backgroundColor = 'gray'

        title.disabled = true;

        colors.forEach((element) => {
            element.disabled = true;
        })

        // Timer
        startTimer();



    }
    else {
        button.children[0].innerHTML = "Start Timer";
        button.style.backgroundColor = ''

        title.disabled = false;

        colors.forEach((element) => {
            element.disabled = false;
        })

        stopTimer();
    }

}

// Timer Functionality REMOVE LATER TO DIFFERENT FILE
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('timer').innerHTML = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        document.getElementById('timer').style.color = "#E6BC1C";
        setTimeout(() => {
            document.getElementById('timer').innerHTML = "00:00:00";
            document.getElementById('timer').style.color = "";
        }, 3000);
    }
}

// Initalizes after DOM content is loaded
document.addEventListener('DOMContentLoaded', init);