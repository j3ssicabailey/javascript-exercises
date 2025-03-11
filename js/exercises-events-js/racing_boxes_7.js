// 7. Escribe un programa para simular la velocidad de pulsación de dos teclas. En pantalla
// aparecerán dos cajas, una verde y otra roja, una debajo de otra. El alto de cada caja será de 40 px y el ancho inicial de 10 px cada una. La primera caja incrementará su ancho 5px cada vez que se pulse la tecla [a]. La segunda caja hará lo mismo cuando se pulse la tecla [ñ]. El juego termina cuando una de las cajas llega a 500 px de ancho. En ese momento deben desactivarse los eventos de ambas teclas y mostrarse un mensaje bajo las cajas que ponga «GANA VERDE» • «GANA ROJO». Se trata de calcular con qué mano eres capaz de realizar más pulsaciones.


let greenBox = document.getElementById("greenBox");
let redBox = document.getElementById("redBox");
let raceResult = document.getElementById("raceResult");

let curWidthG = 10;
let curWidthR = 10;

document.body.addEventListener("keypress", (e) => {
    if(e.key === "a") {
        let curWidthG = parseInt(window.getComputedStyle(greenBox).width);
        if(!isNaN(curWidthG) && curWidthG < 500) {
            greenBox.style.width = (curWidthG + 5) + "px";
        }
    } else if (e.key === "ñ") {
        let curWidthR = parseInt(window.getComputedStyle(redBox).width);
        if(!isNaN(curWidthR) && curWidthR < 500) {
            redBox.style.width = (curWidthR + 5) + "px";
        }
    }
    if (curWidthG >= 500) {
        raceResult.textContent = "Green wins!"
        disableEvent();
    } else if (curWidthR >= 500) {
        raceResult.textContent = "Red wins!"
        disableEvent();
    }
});

