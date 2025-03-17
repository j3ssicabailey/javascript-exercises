// 8. Juguemos a adivinar las parejas. Debes distribuir en la página una cuadrícula de 6 x 5 cajas. De las 30 cajas habrá 15 distintas. Cada par de cajas será de un color distinto. Inicialmente todas las cajas aparecerán negras. Cuando el usuario pinche sobre una caja, se revelará su auténtico color. En ese momento debes arrastrar la caja al lugar donde creas que se encuentra su pareja. Si aciertas, ambas cajas permanecerán boca arriba y ya no se podrá interactuar con ellas. Si fallas, las dos cajas volverán a su estado inicial. El programa debe detectar cuándo están todas las cajas emparejadas y cuánto tiempo has tardado en resolverlo.


document.addEventListener("DOMContentLoaded", () => {
    let memoryGrid = document.getElementById("memoryGrid");
    let cols = 6;
    let rows = 5;

    // Create colors array
    let colorsArray = [];
    for (let i = 0; i < (cols * rows) / 2; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = `rgb(${red}, ${green}, ${blue})`;
        colorsArray.push(color, color);
    }

    // Shuffle colors
    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }
    shuffle(colorsArray);

    // Create cards and assign colors
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let card = document.createElement("div");
            card.classList.add("matchingCards");

            let index = row * cols + col; 
            card.dataset.color = colorsArray[index];

            card.dataset.color = colorsArray.pop();
            memoryGrid.appendChild(card);

            // Click - reveal color
            card.addEventListener("click", (e) => {
                e.target.style.backgroundColor = e.target.dataset.color;
            });
        }
    }
});


