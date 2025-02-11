/* Ejercicio 1

Crea un nuevo array donde cada elemento del array original se duplique

*/
const arrayNumbers = [3, 5.6, 11, 4, 2.4, -9, 107, 32, 98];

function duplicateArray(arr) {
    let duplicatedArray = [];
    for (let number of arr) {
        duplicatedArray.push(number, number);
    }
    return duplicatedArray;
}

function duplicateArray(arr) {
    return arr.flatMap(n => [n, n]);
}

console.log(duplicateArray(arrayNumbers));

/* Ejercicio 2

Calcula la suma de todos los elementos en el array creado en el ejercicio 1 e imprímelo.

*/
function sumArrayNumbers(arr) {
    return arr.reduce((sum, n) => sum + n, 0);};

let duplicatedNumbers = duplicateArray(arrayNumbers);
let sumNumbers = sumArrayNumbers(duplicatedNumbers);
console.log(`The sum of the numbers in the duplicated array is: ${sumNumbers}`);

/* Ejercicio 3

Crea un nuevo array que contenga solo los números pares del array original.

*/
function getEvenNumbers(arr) {
    return arr.filter(n => n % 2 === 0)
}

console.log(getEvenNumbers(arrayNumbers));
/* Ejercicio 4

Pide al usuario que ingrese un número y verifica si está presente en el array.

*/
function isInArray(arr) {
    let numUser = Number(prompt("Enter a number: "));
    return arr.includes(numUser) ? `${numUser} is in the array`: `${numUser} isn't in the array`; ;
}

isInArray(arrayNumbers);


//6-Ordena el array de números en orden descendente y imprímelo.
function descendingOrder(arr) {
    return [...arr].sort((a, b) => b - a);
}

console.log(descendingOrder(arrayNumbers));


//7- Dado dos arrays de números, array1 y array2, crea una función que devuelva un nuevo array que
//contenga los elementos que son múltiplos de 3 y no sean múltiplos de 5. Además, asegúrate de que el nuevo array no contenga duplicados.

const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];

function newArray(arr1, arr2) {
    return [...new Set([...arr1, ...arr2].filter(num => num % 3 === 0 && num % 5 !== 0))];
}

console.log(newArray(array1, array2)); 


//8-// Ejercicio: Filtrar y transformar datos en un array

// Dado un array de objetos que representan libros,
// cada objeto tiene propiedades como título, autor y año de publicación.
// Filtra los libros que fueron publicados después de 2000
// y crea un nuevo array con los títulos de esos libros en mayúsculas.

const libros = [
    { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', año: 1954 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
    { titulo: '1984', autor: 'George Orwell', año: 1949 },
    { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', año: 1937 },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 },
];

function getBooks2000(arr) {
    return arr
        .filter(book => book.año >= 2000)
        .map(book => book.titulo.toUpperCase());
}

console.log(getBooks2000(libros));


// //9-
const estudiantes = [
    { nombre: 'Ana', edad: 20, calificaciones: [10, 90, 87] },
    { nombre: 'Carlos', edad: 22, calificaciones: [78, 92, 87] },
    { nombre: 'Elena', edad: 19, calificaciones: [75, 88, 91] },
    { nombre: 'Daniel', edad: 18, calificaciones: [82, 79, 90] },
    { nombre: 'Luisa', edad: 21, calificaciones: [88, 85, 89] },
    { nombre: 'Miguel', edad: 17, calificaciones: [76, 84, 80] },
    { nombre: 'Sara', edad: 23, calificaciones: [91, 9, 94] },
];
// //Filtra los estudiantes que tienen una edad mayor o igual a 18 años y guárdalos en un nuevo array llamado estudiantesMayoresDeEdad.
function filterStudents18Plus(arr) {
    let adultStudents = arr.filter((student) => {
        return student.edad >= 18;
    });
    return adultStudents;
}

let adultStudents = filterStudents18Plus(estudiantes);

//Calcula el promedio de calificaciones para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalificaciones.
function findAverageGrade(arr) {
    return arr.map(student => {
        let average = student.calificaciones.reduce((sum, grade) => sum + grade, 0) / student.calificaciones.length;
        return { nombre: student.nombre, promedio: average };
    });
}

//Encuentra al estudiante con la calificación más alta en el array promediosCalificaciones y muestra su nombre y calificación máxima en la consola.
function findHighestGrade(arr) {
    let highestGrade = arr.reduce((max, student) => (student.promedio > max.promedio ? student: max), arr[0]);
    return `The highest average grade was ${highestGrade.promedio}, well done ${highestGrade.nombre}`;
}


//10-
const ventas = [
    { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
    { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
    { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
    { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
    { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
];

// Filtra las ventas con una cantidad mayor a 8 unidades
function getHighOrders(arr) {
    return arr.filter(venta => venta.cantidad > 8);
}

// Calcula el total de ingresos por producto
function calculateTotalRevenue(arr) {
    return arr.map(venta => ({
        ...venta,
        total: venta.cantidad * venta.precioUnitario
    }));
}

// Encuentra la venta con el ingreso total más alto
function findHighestRevenue(arr) {
    return arr.reduce((maxVenta, venta) => 
        venta.total > maxVenta.total ? venta : maxVenta, arr[0]
    );
}

// Ordena el array por cantidad vendida en orden ascendente
function sortSalesByQuantity(arr) {
    return [...arr].sort((a, b) => a.cantidad - b.cantidad);
}

// Ejecutar funciones
const highOrders = getHighOrders(ventas);
const totalPerProduct = calculateTotalRevenue(ventas);
const biggestRevenue = findHighestRevenue(totalPerProduct);
const sortedSales = sortSalesByQuantity(ventas);

console.log(`El producto con mayor ingreso es ${biggestRevenue.producto} con un total de ${biggestRevenue.total}€`);
console.log(sortedSales);