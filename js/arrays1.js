// Variables that the funcions will interact with:
//1. Array of pos and neg numbers
const arrayNumeros = [2.5, 7.1, -4, -9.2, 29.4, 1.4, -12.3];

//2. Array of random data of varying types
const datosAleatorios = [
    "Paisa",
    66,
    "Qué tal estás",
    {},
    { name: 'Bienve' },
    [1, 2, 3],
    ['Hola que tal'],
    true
]

//3. Array of objects "alumnos"
const alumnos = [
    {
        id: 1,
        nombre: 'Zamora',
        edad: 15,
        master: 'FullStack'
    },
    {
        id: 2,
        nombre: 'Jose Luís',
        edad: 22,
        master: 'BlockChain'
    },
    {
        id: 3,
        nombre: 'Lucía',
        edad: 19,
        master: 'IA'
    },
    {
        id: 4,
        nombre: 'Felipe',
        edad: 49,
        master: 'FullStack'
    },
    {
        id: 5,
        nombre: 'María',
        edad: 17,
        master: 'IA'
    },
    {
        id: 6,
        nombre: 'Cecilia',
        edad: 16,
        master: 'FullStack'
    },
    {
        id: 7,
        nombre: 'Cecilia',
        edad: 16,
        master: 'BlockChain'
    }
];


/* Ejercicio 1

Dado un array de números, crear una función vAbsoluto que reciba un array y que devuelve un array con los valores absolutos de los números del array que se pasa como parámetro
Pista: usar Math.abs

*/

function vAbsoluto(array) {
    let arrayAbsoluto = [];
    for (let num of array) {
        arrayAbsoluto.push(Math.abs(num));
    }
    return arrayAbsoluto;
}

console.log(vAbsoluto(arrayNumeros));

/* Ejercicio 2

Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con claves por tipo de dato y clasifique los valores del array pasado como parámetro segun su tipo

Pista: usar typeof para determinar el tipo

*/


function porTipos (arrayDatos) {
    return {
        string: arrayDatos.filter(e => typeof e === "string"),
        number: arrayDatos.filter(e => typeof e === "number"),
        boolean: arrayDatos.filter(e => typeof e === "boolean"),
        object: arrayDatos.filter(e => typeof e === "object"),
        undefined: arrayDatos.filter(e => typeof e === "undefined"),
    }
}

console.log(porTipos(datosAleatorios));



/* Ejercicio 3

Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack

Pista: usar filter

*/
let getFullStackStudents = alumnos.filter(alumno => alumno.master === "FullStack");

console.log(getFullStackStudents);

/* Ejercicio 4

Dado el array de alumnos, crear una función llamada nStudentFullStack que nos devuelva el número de usuarios que pertenecen a dicha formación. De igual manera para el resto de las formaciones

Pista: usar reduce o filter (más eficiente reduce)

*/
// Fullstack only
let nStudentFullStack = alumnos.reduce((numStudents, currentValue) => {
    if (currentValue.master === "FullStack") {
        numStudents += 1;
    }
    return numStudents;
}, 0);

console.log(nStudentFullStack);

// Function for all courses
function nStudentCourse(course) {
    return `There are ${alumnos.reduce((numStudents, currentValue) => {
        if (currentValue.master === course) {
            numStudents += 1;
        }
        return numStudents;  
    }, 0)} students in the ${course} course.`; 
}

console.log(nStudentCourse("IA"));
console.log(nStudentCourse("BlockChain"));



/* Ejercicio 5

Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el array por parámetro y devuelva un array únicamente de los mayores de edad

*/

// returns new array
function getAdultStudents(array) {
    return array.filter(student => student.edad >= 18);
}

console.log(getAdultStudents(alumnos));


// Added info to array
const addAdultStudents = alumnos.map((alumno) => {
    return {
        ... alumno,
        isAdult: alumno.edad >= 18
    }
});

console.log(addAdultStudents);

/* Ejercicio 6

Dado el array de alumnos, crear una función llamada mayor que reciba el array como parámetro y que devuelva el alumno mayor de toda la lista de alumnos

Pista: usa reduce o for

*/


const mayor = alumnos.reduce((acc, curValue) => {
    if (acc.edad > curValue.edad) {
        return acc; 
    } else {
        return curValue;  
    };
})

console.log(mayor);


/* Ejercicio 7

Haz el ejercicio 2 usando "reduce"

*/

function porTiposReduce (arrayDatos) {
    return arrayDatos.reduce((acc, elemento) => {
        let type = typeof elemento;
        acc[type] = acc[type] ? acc[type]: [];
        acc[type].push(elemento);
        return acc;
    }, {}); 
}

console.log(porTiposReduce(datosAleatorios));

/* Ejercicio 8

Dado el array de alumnos, crear una función llamada agruparPor que reciba dos parámetros, primero el array y luego un string con la propiedad por la que queremos agrupar de las posibles de los alumnos. La función devolverá un objeto con una propiedad por cada uno de los valores posibles de la propiedad pasada como parámetro. Te lo explico con un ejemplo mejor.

*/

function groupBy (arr, key) {
    return arr.reduce((acc, student) => {
        let group = student[key];
        acc[group] = acc[group] ? acc[group]: [];
        acc[group].push(student);
        return acc;
    }, {});
}

console.log(groupBy(alumnos, "master"));