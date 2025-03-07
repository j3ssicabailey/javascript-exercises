// Crea un programa que a partir de una nutrida variedad de elementos HTML los coloree con colores aleatorios 
// cada vez que se coloque el ratón sobre ellos, y los vuelva a colorear de blanco cuando el ratón los abandone.

let elements = document.body.getElementsByTagName("*");

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`
}

for (let element of elements) {
    element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomColor();
    })
    element.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "";
    })
}