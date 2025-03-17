// 5. Crea una rutina que no permita que el ratón se coloque encima de una caja azul de 100 x 100 px. Cada vez que el ratón intente colocarse encima, la posición de la caja debe cambiar aleatoriamente por la página.

let blueBox = document.getElementById("avoidBox");

let moveBox = () => {
    blueBox.style.position = "absolute";
    let maxWidth = window.innerWidth - blueBox.offsetWidth; 
    let maxHeight = window.innerHeight - blueBox.offsetHeight; 

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    blueBox.style.left = `${randomX}px`;
    blueBox.style.top = `${randomY}px`;
};


blueBox.addEventListener("mouseover", moveBox);




