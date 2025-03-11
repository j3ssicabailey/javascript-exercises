// # Ejercicios con eventos


// 1. Crea una página HTML con un contenedor de una imagen. Debes tener preparadas diez
// imágenes y en función de la tecla numérica que se pulse (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) debe aparecer esa imagen en el contenedor. Cuando se pulse otro número, debe vaciarse el contenedor y cargarse de nuevo su imagen correspondiente.

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        console.log("Generating the corresponding image...")

        let imageChange = document.getElementById("imageContainer");
        
        imageChange.setAttribute("src", `../../../img/imgs-for-events/number${e.key}.png`);

    } else {
        alert("Press a key between 0 and 9");
    }
});
console.log("Key pressed:", e.key);
console.log("Image path:", `../img/imgs-for-events/number${e.key}.png`);







