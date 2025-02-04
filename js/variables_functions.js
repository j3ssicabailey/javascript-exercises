//# Ejercicios Javascript sobre variables

//## Ejercicio 1
//Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
console.log('Hola Mundo');

//## Ejercicio 2
//Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
let saludoGenerico="Hola Mundo";
console.log(saludoGenerico); 

//## Ejercicio 3
//Escribir un programa que pregunte el nombre del usuario usando "promt" y después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola \<nombre>!, donde //\<nombre> es el nombre que el usuario haya introducido.
let nombre = prompt ("¿Cómo te llamas?");
console.log("Hola" + nombre);


//## Ejercicio 4
//Escribir un programa que realice la siguiente operación aritmética:
//![Ejercicio 4](variables-4.png)
console.log(((3+2)/2.5)**2)

//## Ejercicio 5
//Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga que le corresponde.
function devolverPaga () {
    let horasTrabajadas = prompt("Introduce las horas trabajadas: ");
    let costePorHora = prompt("Introduce el coste por hora: ");
    return("La paga correspondiente es: " + horasTrabajadas*costePorHora);
}
console.log(devolverPaga());

//## Ejercicio 6
//Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal es \<imc> donde \<imc> es el índice de masa corporal calculado redondeado con dos decimales.
function caluclateBMI () {
    let weightKilos = prompt("Type your weight in kilograms: ");
    let heightMetres = prompt("Type your height in metres: ");
    let BMI = weightKilos/(heightMetres**2);
    return ("Your BMI is: " + BMI.toFixed(2));
}
console.log(caluclateBMI());

//## Ejercicio 7
//Escribir un programa que pida al usuario dos números enteros y muestre por pantalla: La división resultande de dividir \<n> entre \<m> da un cociente \<c> y un resto \<r> donde \<n> y \<m> son los números introducidos por el usuario, y \<c> y \<r> son el cociente y el resto de la división entera respectivamente.
function dividirNumeros() {
    let dividendo = prompt("Introduce un número entero: ");
    let divisor = prompt("Introduce otro número entero: ");
    let cociente = Math.floor(dividendo/divisor);
    let resto = dividendo % divisor;
    return `El resultado de ${dividendo} / ${divisor} es: cociente: ${cociente}, resto: ${resto}`;
}
console.log(dividirNumeros());
//## Ejercicio 8
//Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión.
function calcularCapital() {
    let cantidadInvertir = parseFloat(prompt("Introduce la cantidad que quieres invertir: "));
    let interesAnual = parseFloat(prompt("¿Cuál es el porcentaje de interés anual?: ")) / 100;
    let numeroAnios = parseInt(prompt("Introduce el número de años de ahorro: "));

    let capitalObtenido = cantidadInvertir * Math.pow(1 + interesAnual, numeroAnios);
    return `Pasados ${numeroAnios} años, tendrás ${capitalObtenido.toFixed(2)}!`;
}
console.log(calcularCapital())

//## Ejercicio 9
//Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.
function calcularPesoTotal() {
    let pesoPayasos = parseInt(prompt("Cuántos payasos se han vendido?: ")) * 112;
    let pesoMuniecas = parseInt(prompt("Cuántas muñecas se han vendido?: ")) * 75;
    return `El peso total del pedido es de ${pesoPayasos + pesoMuniecas} kilos!`;
}
console.log(calcularPesoTotal());

//# Ejercicio 10
//Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un descuento del 60%. Escribir un programa que comience leyendo el número de barras vendidas que no son del día. Después el programa debe mostrar el precio habitual de una barra de pan, el descuento que se le hace por no ser fresca y el coste final total.
function calcularPrecioPan() {
    let numeroBarrasPan = parseInt(prompt("Introduce el número de barras de pan del día anterior: "))
    let totalCuentaNormal = numeroBarrasPan * 3.49;
    let totalCuentaDescuento = totalCuentaNormal * 0.6;
    return `La barra de pan suele costar 3.49 euros \n 
    La cuenta normal sería ${totalCuentaNormal}\n 
    Con el descuento de 60% se queda en ${totalCuentaDescuento.toFixed(2)}!`;
}
console.log(calcularPrecioPan());