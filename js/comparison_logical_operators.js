// Operadores lógicos y de comparación
// Usar confirm cuando se necesite obtener la respuesta a una pregunta de sí o no por parte del usuario. Mostrar true o false como respuesta (no hace falta poner un mensaje).

// 1. Número mayor a 100
// Crear un programa que permita ingresar tres números y muestre si alguno de ellos es mayor a 100.
let num1 = 50;
let num2 = 60;
let num3 = 105;

if (num1 > 100 || num2 > 100 || num3 > 100) {
    console.log("Numbers greater than 100: ");
    if (num1 > 100) {
    console.log(num1);
    }
    if (num2 > 100) {
        console.log(num2);
    }
    if (num3 > 100) {
        console.log(num3);
    }   
}
    else {
        console.log(`Neither of the numbers (${num1}, ${num2}, ${num3}) are greater than 100`);
    }

// 2. Número dentro de rango
// Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, 
// uno que represente el límite mayor, y luego otro cualquiera y mostrar si el último número está dentro del rango.
let numeroInferior = Number(prompt("Introduce the lower limit: "));
let numeroSuperior = Number(prompt("Introduce the upper limit: "));
let numero = Number(prompt("Introduce a number: "));

if (numero >= numeroInferior && numero <= numeroSuperior) {
    console.log(`${numero} is within the established limit`);
} else {
    console.log(`${numero} is outside of the established limit`);
}

// 3. Donación de sangre
// Crear un programa que realice al usuario 3 preguntas: 
// si se ha hecho tatuajes recientemente, si ha tenido o tiene hepatitis, si tiene anemia. 
// Si responde afirmativamente a alguna de ellas, mostrar un mensaje que indique si puede o no donar sangre.

function canGiveBlood() {
    let hadTattoo = confirm("Click \"OK\" if you have had a tattoo recently, if not, click \"cancel\"");
    let hashadHep = confirm("Click \"OK\" if you have or have had hepatitis, if not, click \"cancel\"");
    let hasAnemia= confirm("Click \"OK\" if you have anemia, if not, click \"cancel\"");
    if (hadTattoo || hashadHep  || hasAnemia) {
        return ("You cannot give blood.");
    }
    else {
        return ("You may give blood.");
    }
}

console.log(canGiveBlood());


// 4. Autenticación
// Crear un programa que pida ingresar el usuario y la contraseña y los compare con los valores guardados en variables. 
// Mostrar un mensaje si el acceso es autorizado o no.
let user = "jessb";
let password = "password1";

function authenticatePassword() {
    let tryUser = prompt("Enter your username: ");
    let tryPassword = prompt("Enter your password: ");

    if (tryUser === user && tryPassword === password) {
        return "Correct; you're in!";
    } else {
        return "Incorrect credentials.";
    }
}

console.log(authenticatePassword());

// 5. Mantenimiento
// Hacer un programa que pregunte si el auto tiene aceite, agua y neumáticos con presión. 
// Si alguna respuesta es negativa, mostrar que necesita mantenimiento.

function carMaintenance() {
    let hasOil = confirm("Do you have oil in your car?");
    let hasWater = confirm("Do you have water in your car?");
    let hasTiresPressure = confirm("Do your tires have proper pressure?");

    if (!hasOil || !hasWater || !hasTiresPressure) {
        console.log("Your car needs maintenance.");
    } else {
        console.log("Your car is ready to go!");
    }
}

carMaintenance();


// 6. Acceso restringido
// Un club tiene reglas: pueden entrar miembros con la cuota al día o no miembros con autorización. 
// Preguntar si es miembro, si tiene la cuota al día y si tiene autorización. 
// Mostrar si el acceso es permitido o no.

function clubAccess() {
    let isMember = confirm("Are you a club member?");
    let hasPaid = confirm("Do you have your fee up to date?");
    let hasAuthorization = confirm("Do you have authorization to enter?");

    if (isMember && hasPaid || hasAuthorization) {
        console.log("Access granted.");
    } else {
        console.log("Access denied.");
    }
}

clubAccess();


// 7. Cátedra promocionada
// Pedir los valores de tres parciales y mostrar si la cátedra se promociona. 
// Se promociona si al menos dos parciales tienen nota 8 o más.

function examPromotion() {
    let exam1 = Number(prompt("Enter the first exam score: "));
    let exam2 = Number(prompt("Enter the second exam score: "));
    let exam3 = Number(prompt("Enter the third exam score: "));

    let passedExams = 0;
    if (exam1 >= 8) passedExams++;
    if (exam2 >= 8) passedExams++;
    if (exam3 >= 8) passedExams++;

    if (passedExams >= 2) {
        console.log("You promoted the subject!");
    } else {
        console.log("You need to improve your scores.");
    }
}

examPromotion();


// 8. Número más grande (2 números)
// Pedir dos números y mostrar el mayor. 
// Si son iguales, mostrar un mensaje indicándolo.
let twoNumbers = prompt("Introduce two numbers separated with a space: ");
let splitNumbers = twoNumbers.split(" ");
let firstNum = parseInt(splitNumbers[0]);
let secondNum = parseInt(splitNumbers[1]);

if (firstNum > num2) {
    console.log(`${num1} is greater than ${secondNum}`);
} else if (firstNum < secondNum) {
    console.log(`${secondNum} is greater than ${firstNum}`);
} else {
    console.log("Both numbers are equal.");
}


// 9. Número más grande (3 números)
// Pedir tres números y mostrar el mayor. 
// Si hay números iguales, mostrar un mensaje indicándolo.

let number1 = Number(prompt("Enter the first number: "));
let number2 = Number(prompt("Enter the second number: "));
let number3 = Number(prompt("Enter the third number: "));

let largest = number1;

if (number2 > largest) {
    largest = number2;
}

if (number3 > largest) {
    largest = number3;
}

if (number1 === number2 || number1 === number3 || number2 === number3) {
    console.log("There are equal numbers.");
} else {
    console.log(`The largest number is ${largest}`);
}

// 10. Términos y condiciones de uso
// Preguntar si acepta los términos y condiciones. 
// Si dice sí, mostrar "Continuando con el proceso...". 
// Si dice no, mostrar "No se puede continuar sin aceptar los términos".

let acceptsTerms = confirm("Do you accept the terms and conditions?");
if (acceptsTerms) {
    console.log("Continuing with the process...");
} else {
    console.log("You cannot continue without accepting the terms.");
}

// 11. Quizz
// Crear un cuestionario con 3 preguntas de sí o no. 
// Si todas son correctas, mostrar un mensaje de felicitaciones. 
// Si alguna es incorrecta, mostrar que ha perdido el juego.

let question1 = confirm("Is Arsenal Football Club based in London?");
let question2 = confirm("Is Arsenal's stadium called Old Trafford?"); 
let question3 = confirm("Did Arsenal win the League in 2003-2004?");

if (question1 && !question2 && question3) {
    console.log("Congratulations, you passed the Arsenal quiz!");
} else {
    console.log("You lost the game. Correct answers: Yes, No, Yes");
}



// 12. Autenticación
// Pedir usuario y contraseña y compararlos con valores guardados. 
// Si coinciden, mostrar "Autenticación exitosa". 
// Si no, mostrar "Usuario o contraseña equivocados".

// 13. Juez de gusto
// Pedir al usuario evaluar algo del 1 al 10. 
// Mostrar un mensaje dependiendo de la respuesta con mínimo 4 casos distintos. 
// Si ingresa un número fuera del rango, mostrar advertencia y volver a pedir el número.
function respondToEvaluation(eval) {
    if (eval < 1 || eval > 10 || isNaN(eval)) {
        return "Please enter a number between 1 and 10.";
    }
    switch (eval) {
        case 10:
            return "Thanks, we're glad you're happy!";
        case 9:
            return "Wonderful, we'll do even better next time!";
        case 8:
            return "Good, but there's room for improvement.";
        case 7:
            return "Not bad, we appreciate your feedback!";
        case 6:
            return "Thanks! We hope to do better next time.";
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            return "Sorry to hear that! Please tell us how we can improve.";
        default:
            return "Thank you for your evaluation.";
    }
}

respondToEvaluation(Number(prompt("Please enter your evaluation (1-10): ")))

// 14. Calificación
// Pedir el resultado de una evaluación (1-10) y mostrar un mensaje según la nota:
//  - 10: ¡Excelente!
//  - 8-9: ¡Muy bien!
//  - 6-7: Aprobado
//  - Menos de 6: Reprobado

function giveResult(resultUser) {
    if (resultUser === 10) {
        return 
    }
    else if (resultUser >= 8) {
        return "Very good!";
    }
    else if (resultUser >= 6) {
        return "Passed!";
    } else {
        return "You need to resit";
    }
}

giveResult(Number(prompt("Enter the result of the evaluation to see your score: ")));