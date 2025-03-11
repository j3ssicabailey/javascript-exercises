// 7. Escribe un programa para simular la velocidad de pulsación de dos teclas. En pantalla
// aparecerán dos cajas, una verde y otra roja, una debajo de otra. El alto de cada caja será de 40 px y el ancho inicial de 10 px cada una. La primera caja incrementará su ancho 5px cada vez que se pulse la tecla [a]. La segunda caja hará lo mismo cuando se pulse la tecla [ñ]. El juego termina cuando una de las cajas llega a 500 px de ancho. En ese momento deben desactivarse los eventos de ambas teclas y mostrarse un mensaje bajo las cajas que ponga «GANA VERDE» • «GANA ROJO». Se trata de calcular con qué mano eres capaz de realizar más pulsaciones.

let boxRace = (e) => {
    let letter = e.key;
    let box = document.querySelector(`[data-letter = ${letter}]`);

    if (box) {
        let width = box.offsetWidth;
        width += 5;
        box.style.width = `${width}px`
    

        if (width >= 500) {
            let raceResult = document.getElementById("raceResult");
            if (box.classList.contains("green")) {
                raceResult.textContent = "Green wins!"
            } else if (box.classList.contains("red")) {
                raceResult.textContent = "Red wins!"
            }
            document.body.removeEventListener("keydown", boxRace);
        }
    }
}

document.body.addEventListener("keydown", boxRace);

let resetButton = document.getElementById("reset");
let boxes = document.querySelectorAll("div.race-box");

resetButton.addEventListener("click", () => {
    boxes.forEach(box => {
        box.style.width = "10px";  
    });
    
    let raceResult = document.getElementById("raceResult");
    raceResult.textContent = "Who will win, red or green?"; 

    document.body.addEventListener("keydown", boxRace);
});