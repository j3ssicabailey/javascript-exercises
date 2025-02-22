// Estructuras de control: condicionales

// if, else, else if

// 1 🔢 Número par o impar
// Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.
function isOddOrEven(number) {
    if (isNaN(number)) {
        return "Please enter a valid number.";
    }
    if (number % 2 == 0) {
        return `${number} is even`;
    } else { return `${number} is odd`;}
}

isOddOrEven(Number(prompt("Introduce a number: ")));

// 2 📆 Días del mes
// Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.
function daysInMonth(month) {
    switch (month) {
        case "February":
            console.log(`${month} has 28 or 29 days`);
            break;
        case "April":
        case "June":
        case "September":
        case "November":
            console.log(`${month} has 30 days`);
            break;
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            console.log(`${month} has 31 days`);
            break;
        default:  
            console.log(`${month} is not a valid month. Please try again`);
    }
}

daysInMonth("January");

// 3 🔐 Cambio de contraseña
// Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. 
// Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. 
// En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.
function changePassword() {
    const currentPassword = "abc123";
    const securityQS = ["What's your favourite colour?", "What's your favourite food", "What's your favourite season?"];
    const securityAs = ["green", "cheese", "summer"];
    let allCorrect = true;
    for (i = 0; i < securityQS.length; i++) {
        let userAnswer = prompt(securityQS[i]);
        if (userAnswer !== securityAs[i]) {
            console.log("Incorrect answer");
            allCorrect = false;
            break;
        }
    }
    if (allCorrect) {
        console.log("All questions answered correctly");
        let newPassword;
        do {
            newPassword = prompt("Please enter your new password: ");
        } while (newPassword === currentPassword);
        console.log(`Your new password is set to: ${newPassword}`);
    } else {
        return "Failed security check";
    }
}

changePassword();

// 4 🎓 Examen aprobado
// Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, 
// si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.

// 5 Grupo de letras
// Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
// grupo A = {a, e, i, o ,u}
// grupo B = {b, c, d, f, g}
// grupo C = {h, j, k , l, m}
// grupo D = {n, p, q, r}
// grupo E = {s, t, v, w, x, y, z}

// 6 🥪 Sandwich
// Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. 
// En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. 
// Mostrar al final un mensaje con el pedido resultante. Debe preguntar:
// Tipo de pan: blanco, negro, integral
// Ingrediente 1: tomate, lechuga, pimiento
// Ingrediente 2: cebolla, aceituna, pepino
// Aderezos: mostaza, mayonesa, picante
// Gaseosa: Coca Cola, Pepsi, Sprite

function orderSandwich() {
    let breadType = prompt("Enter your choice of bread (white, brown, wholemeal): ");
    
    while (!["white", "brown", "wholemeal"].includes(breadType)) {
        console.warn("Please enter a valid choice of bread!");
        breadType = prompt("Enter your choice of bread (white, brown, wholemeal): ");
    } 
    console.log(`You chose ${breadType} bread.`);

    let firstIngredient = prompt("Enter your first ingredient (tomato, lettuce, pepper): ");
    
    while (!["tomato", "lettuce", "pepper"].includes(firstIngredient)) {
        console.warn("Please enter a valid first ingredient!");
        firstIngredient = prompt("Enter your first ingredient (tomato, lettuce, pepper): ");
    } 
    console.log(`You chose ${firstIngredient}.`);

    let secondIngredient = prompt("Enter your second ingredient (onions, olives, cucumber): ");
    while (!["onions", "olives", "cucumber"].includes(secondIngredient)) {
        console.warn("Please enter a valid second ingredient!");
        secondIngredient = prompt("Enter your second ingredient (onions, olives, cucumber): ");
    }
    console.log(`You chose ${secondIngredient}.`);

    let dressing = prompt("Enter your dressing (mustard, mayo, spicy): ");
    while (!["mustard", "mayo", "spicy"].includes(dressing)) {
        console.warn("Please enter a valid dressing!");
        dressing = prompt("Enter your dressing (mustard, mayo, spicy): ");
    }
    console.log(`You chose ${dressing}.`);

    let soda = prompt("Enter your soda (Coca Cola, Pepsi, Sprite): ");
    while (!["Coca Cola", "Pepsi", "Sprite"].includes(soda)) {
        console.warn("Please enter a valid soda!");
        soda = prompt("Enter your soda (Coca Cola, Pepsi, Sprite): ");
    }
    console.log(`You chose ${soda}.`);

    // Final sandwich order
    alert(`Your sandwich order is complete! Here's what you chose:\n
    Bread: ${breadType}\n
    First Ingredient: ${firstIngredient}\n
    Second Ingredient: ${secondIngredient}\n
    Dressing: ${dressing}\n
    Soda: ${soda}`);
}
// Example 
orderSandwich();


// 7 ✊🤚✌️ Piedra, papel o tijera
// Crear un programa que permita ingresar al jugador piedra, papel o tijera, 
// genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.

function rockPaperScissors() {
    const choices = {1: 'rock', 2: 'paper', 3: 'scissors'};
    
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let userChoice = Number(prompt("Enter a number: (1=rock, 2=paper, 3=scissors)"));
    
    if (![1, 2, 3].includes(userChoice)) {
        return "Invalid choice! Please enter 1, 2, or 3.";
    }
    
    let userChoiceString = choices[userChoice];
    let computerChoiceString = choices[computerChoice];
    let result = `You chose ${userChoiceString}, and the computer chose ${computerChoiceString}. `;
    
    if (userChoice === computerChoice) {
        return result + "It's a draw!";
    }
    
    if (userChoice === 1 && computerChoice === 3
        || userChoice === 3 && computerChoice === 2
        || userChoice === 2 && computerChoice === 1) {
        return result + "You won!";
    } else {
        return result + "The computer won!";
    }
}

console.log(rockPaperScissors());


// 8 🎨 Simón dice
// Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. 
// Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, 
// y mostrar al finalizar si acertó la secuencia.
// Ejemplo
// Simón dice: rojo, rojo, azul, verde, amarillo.
// Ingrese el primer color: rojo
// Ingrese el primer color: rojo
// Ingrese el primer color: azul
// Ingrese el primer color: verde
// Ingrese el primer color: amarillo
// Felicitaciones! Has ganado!
function simonSays() {
    let colorArray = ["red", "green", "blue", "yellow"];
    let randomArray = [];
    for (let i = 0; i < 5; i++) {  
        let randomNumber = colorArray[Math.floor(Math.random() * colorArray.length)];
        randomArray.push(randomNumber);
    }
    console.log("Simon says: " + randomArray.join(", "));
    return randomArray;
    
}

function userSimonSays() {
    let sequence = simonSays();
    let correct = true;
    
    for (let i = 0; i < sequence.length; i++) {
        let userGuess = prompt(`Enter colour ${i + 1}: `);

        if (userGuess !== sequence[i]) {
            correct = false;
            break;
        }
    }
    if (correct) {
        console.log("Well done, you got all the colours right!");
    } else {
        console.log("Sorry, you didn't win this time!");
    }
}

userSimonSays();

// Condicional switch

// 9 🗓 Meses del año
// Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

// 10 ❄️ Estaciones del año II
// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina.
function showSeasonLength(season) {
    season = season.trim().toLowerCase();
    let start, end;
    switch (season) {
        case "spring":
            start = "March";
            end = "May";
            break;
        case "summer":
            start = "June";
            end = "August";
            break;
        case "autumn":
            start = "September";
            end = "November";
            break;
        case "winter":
            start = "December";
            end = "February";
            break;
        default:
            return "Invalid season";
    }
    let msg = `The season of ${season} starts in ${start} and ends in ${end}`;
    return msg;
}

console.log(showSeasonLength("SummEr"));

// 11 🧮 Calculadora
// Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, 
// y luego de elegida, ingresar dos números y hacer dicha operación con ella.
function simpleCalculator() {
    let num1 = Number(prompt("Please enter your first number: "));
    let num2 = Number(prompt("Please enter your second number: "));
    let result;
    let operation = prompt("Enter the operation to perform (add, substract, multiply, divide): ");
    switch (operation) {
        case "add":
            result = num1 + num2;
            return `${num1} + ${num2} = ${result}`;
        case "subtract":
            result = num1 - num2;
            return `${num1} + ${num2} = ${result}`;
        case "multiply":
            result = num1 * num2;
            return `${num1} + ${num2} = ${result}`;
        case "divide":
            result = num1 / num2;
            return `${num1} + ${num2} = ${result}`;
        default:
            return "Please try again";
    }
}

simpleCalculator();

// 12 📺 Televisor
// Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. 
// Si elige que sí, debe mostrar un mensaje con el canal actual y el nivel de volumen de un televisor, 
// y debe permitir realizar las siguientes operaciones:
// CAMBIAR CANAL: permite ingresar un canal (0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.

function operateTelevision() {
    let turnOn = prompt("Do you want to turn on the TV? Yes | No : ").toLowerCase();
    let currentChannel = 50;
    let currentVolume = 10;

    switch (turnOn) {
        case "no":
            console.log("Goodbye!");
            return;
        case "yes":
            let operation = prompt(`What do you want to do? (Enter a number 1-6)\n
                1) Change channel\n
                2) Next channel\n
                3) Previous channel\n
                4) Increase volume\n
                5) Decrease volume\n
                6) Mute
            `);

            switch (operation) {
                case "1":
                    let newChannel = parseInt(prompt(`You're on channel ${currentChannel}. Which channel do you want to go to (1-99)?: `));
                    if (newChannel >= 1 && newChannel <= 99) {
                        currentChannel = newChannel;
                        console.log(`Switching to channel ${currentChannel}`);
                    } else {
                        console.log("Invalid channel. Please enter a number between 1 and 99.");
                    }
                    break;
                case "2":
                    currentChannel = currentChannel < 99 ? currentChannel + 1 : 99;
                    console.log(`Switching to channel ${currentChannel}`);
                    break;
                case "3":
                    currentChannel = currentChannel > 1 ? currentChannel - 1 : 1;
                    console.log(`Switching to channel ${currentChannel}`);
                    break;
                case "4":
                    currentVolume = Math.min(currentVolume + 5, 100);
                    console.log(`Increasing volume to ${currentVolume}`);
                    break;
                case "5":
                    currentVolume = Math.max(currentVolume - 5, 0);
                    console.log(`Decreasing volume to ${currentVolume}`);
                    break;
                case "6":
                    currentVolume = 0;
                    console.log("Volume set to 0 (Muted)");
                    break;
                default:
                    console.log("Invalid option. Enter a number 1-6.");
            }
            break;
        default:
            console.log("Invalid response. Please enter Yes or No.");
    }
}

operateTelevision();

