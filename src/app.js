const init = function(){
    document.getElementById('btnSubmit').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();

    const color = document.getElementById('color').value;
    const title = document.getElementById('title');
    const timer = document.getElementById('timer');

    const button = document.getElementById('btnSubmit');
    const colors = document.getElementsByName('color');

    // Start timer
    if (button.children[0].innerHTML != 'End Timer'){
        
        // Front end shenanigans
        button.children[0].innerHTML = "End Timer";
        button.style.backgroundColor = 'gray'

        title.disabled = true;

        colors.forEach((element) => {
            element.disabled = true;
        })

        // Timer
        timer.innerHTML = "00:00:01"


    }
    else {
        button.children[0].innerHTML = "Start Timer";
        button.style.backgroundColor = ''

        title.disabled = false;

        colors.forEach((element) => {
            element.disabled = false;
        })
    }

}

// Initalizes after DOM content is loaded
document.addEventListener('DOMContentLoaded', init);