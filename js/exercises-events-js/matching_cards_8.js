// 8. Juguemos a adivinar las parejas. Debes distribuir en la página una cuadrícula de 6 x 5 cajas. De las 30 cajas habrá 15 distintas. Cada par de cajas será de un color distinto. Inicialmente todas las cajas aparecerán negras. Cuando el usuario pinche sobre una caja, se revelará su auténtico color. En ese momento debes arrastrar la caja al lugar donde creas que se encuentra su pareja. Si aciertas, ambas cajas permanecerán boca arriba y ya no se podrá interactuar con ellas. Si fallas, las dos cajas volverán a su estado inicial. El programa debe detectar cuándo están todas las cajas emparejadas y cuánto tiempo has tardado en resolverlo.


document.addEventListener("DOMContentLoaded", () => {
    let memoryGrid = document.getElementById("memoryGrid");
    let playAgainBtn = document.getElementById("playAgainBtn");
    let cols = 6;
    let rows = 5;

    // Function to reset the game
    function resetGame() {
        // Clear the grid
        memoryGrid.innerHTML = '';
        
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
                card.dataset.open = false;
                card.dataset.found = false;
                memoryGrid.appendChild(card);

                // Function to check color
                let colorChecker = (e) => {
                    e.target.style.backgroundColor = e.target.dataset.color;
                    e.target.dataset.open = true;

                    let cardsOpen = document.querySelectorAll("[data-open = 'true']");
                    if (cardsOpen.length === 2) {
                        if (cardsOpen[0].dataset.color === cardsOpen[1].dataset.color) {
                            cardsOpen[0].removeEventListener("click", colorChecker);
                            cardsOpen[1].removeEventListener("click", colorChecker);
                            cardsOpen[0].dataset.open = false;
                            cardsOpen[1].dataset.open = false;
                            cardsOpen[0].dataset.found = true;
                            cardsOpen[1].dataset.found = true;

                            let gameCompleted = document.querySelectorAll(`[data-found = "true"]`);
                            if(gameCompleted.length === cols * rows) {
                                alert("All matching pairs were found!");
                            }
                        } else {
                            setTimeout(() => {
                                cardsOpen[0].style.backgroundColor = "rgb(36, 36, 36)";
                                cardsOpen[1].style.backgroundColor = "rgb(36, 36, 36)";
                                cardsOpen[0].dataset.open = false;
                                cardsOpen[1].dataset.open = false;
                            }, 750);
                        }
                    }
                };

                // Event listener
                card.addEventListener("click", colorChecker);
            }
        }
    }

    // Initialize the game
    resetGame();

    // Event listener for "Play Again" button
    playAgainBtn.addEventListener("click", resetGame);
});
