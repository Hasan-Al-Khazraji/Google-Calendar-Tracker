const init = function(){
    document.getElementById('btnSubmit').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();
    document.getElementById('theForm').submit();
}

// Initalizes after DOM content is loaded
document.addEventListener('DOMContentLoaded', init);