let contadorSegundos = document.getElementById("segundos");
let contadorMilesimas = document.getElementById("milesimas");
let contadorPuntos = document.getElementById("puntos");
let botonStart = document.getElementById("start");
let botonStop = document.getElementById("stop");
let botonReset = document.getElementById("reset");
let segundos = 00;
let milesimas = 00;

botonStart.onclick = function() {
    cambiarColor()
    clearInterval(start);
    start = setInterval(startTimer, 20);
    console.log("henlo")
    
}

botonStop.onclick = function() {
    clearInterval(start);
    // quitarColor();
    
}

botonReset.onclick = function() {
    clearInterval(start);  
    segundos = 0;
    milesimas = 0;
    contadorMilesimas.innerHTML = "00";
    contadorSegundos.innerHTML = "00";
    quitarColor();
}


function startTimer() {
    milesimas++;
    if (milesimas >= 60){
    timerSegundos();
    }     
    if (milesimas < 10) {
    contadorMilesimas.innerHTML = "0" + milesimas;
    } else if (milesimas >= 10){
    contadorMilesimas.innerHTML = milesimas;
    }
}

function timerSegundos() {
    milesimas = 0;
    segundos++;
    contadorSegundos.innerHTML = "0" + segundos;
    if (segundos >= 10){
    contadorSegundos.innerHTML = segundos;
    }
}

function cambiarColor() {
    contadorMilesimas.className = "";
    contadorMilesimas.className += "active";
    contadorSegundos.className = "";
    contadorSegundos.className += "active";
    contadorPuntos.className = "";
    contadorPuntos.className += "active";
    addActiveClass(document.getElementById("stopwatch"))
}

function quitarColor() {
    contadorMilesimas.className -= "active";
    contadorSegundos.className -= "active";
    contadorPuntos.className -= "active";
    removeActiveClass(document.getElementById("stopwatch"))
}

addActiveClass = (clase) => {
    clase.className = "";
    clase.className += "active";
}

function removeActiveClass(clase) {
    clase.className -= "active";
}
