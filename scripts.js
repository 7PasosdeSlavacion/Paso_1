function inicio(){
    var url = "index.html";
    window.location.href = url;
}

function salir() {
window.close();
}

function alexis(){
    var url = "alexis.html";
    window.location.href = url;
}


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();