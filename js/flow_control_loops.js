//🔄 Estructuras de control: bucles

//Bucle for

// 1 🔢 Números impares
// Crear un programa que muestre en consola los números impares entre el 0 y el 20
for (let i = 1; i < 20; i+=2) {
    console.log(i);
}

// 2 📀 Playlist
// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. 
// Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. 
// Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando.
// Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.
function fillPlaylist() {
    let namePlaylist = prompt("Enter the name for your playlist: ");
    let numberSongs = Number(prompt(`Enter the number of songs you want ${namePlaylist} to have: `));
    let listSongs = [];;
    for (let i = 1; i < numberSongs+1; i++) {
        songTitle = prompt("Enter a song title: ");
        listSongs.push(songTitle);
    }
    return `Your playlist, ${namePlaylist} has ${numberSongs}! Here they are: ${listSongs.join(", ")}`;
}

console.log(fillPlaylist());

// 3 🔍 Número mayor o menor
// Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. 
// Luego, preguntar entre cuántos se desea buscar. 
// Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

// 4 ❗️ Factorial
// Crear un programa que pida ingresar un número, y muestre su factorial. 
// Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. 
// Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24

function calculateFactorial() {
    let numUser = Number(prompt("Enter a number to calculate its factorial: "));
    let resultFactorial = 1;
    for (let i = numUser; i > 0; i--) {
        resultFactorial *= i;
    }
    return resultFactorial;
}

console.log(calculateFactorial());

// 5 🏃‍♀️ Carrera
// Crear un programa para controlar las vueltas de una deportista. 
// Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. 
// Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). 
// Ejemplo:
// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s

// 6 ✊🤚✌️ Piedra, papel, tijera II
// Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. 
// Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién ganó la ronda, puntaje parcial hasta el momento y rondas restantes. 
// Al finalizar se debe indicar quién ganó. Ejemplo:
// Ronda: 2 de 5
// 🙍‍♀️ Jugadora: Piedra
// 👾 Computadora: Tijera
// Jugadora ha ganado esta ronda 🎉
// Puntaje: 2 (Jugadora) - 0 (Computadora)

function rockPaperScissors() {
    let userScore = 0;
    let computerScore = 0;
    do {
        const choices = {1: 'rock', 2: 'paper', 3: 'scissors'};
        
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        let userChoice = Number(prompt("Enter a number: (1=rock, 2=paper, 3=scissors)"));
        
        if (![1, 2, 3].includes(userChoice)) {
            console.log("Invalid choice! Please enter 1, 2, or 3.");
            continue;
        }
        
        let userChoiceString = choices[userChoice];
        let computerChoiceString = choices[computerChoice];
        let result = `You chose ${userChoiceString}, and the computer chose ${computerChoiceString}. `;

        if (userChoice === computerChoice) {
            console.log(result + "It's a draw!");
        } else if (
            (userChoice === 1 && computerChoice === 3) ||
            (userChoice === 3 && computerChoice === 2) ||
            (userChoice === 2 && computerChoice === 1)
        ) {
            userScore++;
            console.log(result + "You won!");
        } else {
            computerScore++;
            console.log(result + "The computer won!");
        }

        console.log(`Score: You ${userScore} - ${computerScore} Computer`);

        var continueGame = confirm("Click \"OK\" to play again, or \"Cancel\" to exit.");
    } while (continueGame);
}

rockPaperScissors();



// 7 📐 Patrón
// Crear un programa que muestre en consola el siguiente patrón
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************

function drawTrainglePattern(numberLines) {
    for (let i = 0; i <= numberLines; i++) {
        console.log("x".repeat(i));
    }
}

drawTrainglePattern(10);


// Bucle while

// 8 🔐 Múltiples intentos
// Crear un programa que pida ingresar usuario y contraseña. 
// El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. 
// Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
// Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

// 9 💲Cara o cruz
// Crear un programa que permita escoger entre cara o cruz. 
// El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. 
// El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. 
// También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. 
// Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

function headsOrTails() {
    let continueGame = true;
    const arrayHeadsTails = ["heads", "tails"];
    let playerCounter = 0;
    let computerCounter = 0;
    while (continueGame) {
        let computerChoice = arrayHeadsTails[Math.floor(Math.random() * arrayHeadsTails.length)];
        let playerChoice = prompt("Heads or tails?: ").toLowerCase();
        if (computerChoice === playerChoice) {
            playerCounter += 1;
            console.log(`Computer chose ${computerChoice}. You win this round!`)
        } else {
            computerCounter += 1;
            console.log(`Computer chose ${computerChoice}. You lose this round`)
        }
        continueGame = confirm("Press \"continue\" to keep playing");
        if (continueGame == false) {
            let finalScore = `Final score: Player: ${playerCounter} Computer: ${computerCounter} `;
        if (playerCounter > computerCounter) {
            console.log(`You won the match! \n${finalScore}`);
        }
        else if (computerCounter > playerCounter) {
            console.log(`You lost the match! \n${finalScore}`);
        }
        else {console.log(`It's a draw! \n${finalScore}`);}
        break;
        }
    }
}

headsOrTails();
// 10 ⚖️ Mayor o menor
// Crear un programa que elija un número al azar entre 1 y 10. 
// El programa debe luego pedir al usuario que intente adivinar el número. 
// Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. 
// El programa debe terminar cuando se adivina el número.
