// 2. Crea una aplicación cuyo código HTML contenga únicamente una caja roja. Cada vez que
// el usuario pulse algunas de las teclas de los cursores (flecha arriba, flecha abajo, flecha
// a derecha, flecha a izquierda) la caja debe desplazarse 10 px en la dirección establecida por el cursor.
let x = 0;
let y = 0;
const step = 10;

document.addEventListener("keydown", (e) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    
    if (arrowKeys.includes(e.key)) {
        console.log(`You pressed: ${e.key} . Preparing to move...`);

        if (e.key === "ArrowUp") y -= step;
        if (e.key === "ArrowDown") y += step;
        if (e.key === "ArrowLeft") x -= step;
        if (e.key === "ArrowRight") x += step;

        document.getElementById("movableBox").style.transform = `translate(${x}px, ${y}px)`;
    }
});
