/*
# EJERCICIOS SOBRE "SELECTORES EN JS"
*/


// 1. Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
let firstP = document.querySelector("p");
//firstP.textContent = "hola que tal";

// 2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
let secondA = firstP.getElementsByTagName("a")[1];
secondA.setAttribute("href", "https://www.google.com")

// 3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
let myList = document.getElementById("milista");
let childrenList = myList.children;
childrenList[childrenList.length -2].textContent ="Penultimate Child";

// 4. Desactiva el atributo class del último p de la página
let ps = document.getElementsByTagName("p");
let lastP = ps[ps.length -1];
lastP.removeAttribute("class");

// 5. Crea un elemento h3 e insertalo al final del body
const newH3 = document.createElement("h3");
newH3.textContent = "I'm a new h3 element";
document.body.appendChild(newH3);

// 6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
const newSpan = document.createElement("span");
newSpan.textContent = " - I'm a new span";
newH3.appendChild(newSpan);

// 7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
const newA = document.createElement("a");
newA.textContent = " - here";
newA.setAttribute("href", "https://google.com");
ps[1].appendChild(newA);

// 8. Comprueba que todos los  p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
let psHero = document.querySelectorAll("div.hero p");
for (let p of psHero){
    if(p.hasAttribute("class")) {
        p.remove();
    }
}

// 9. Selecciona el  último nodo hijo de body
let lastNodeBody = document.body.lastChild;

// 10. Selecciona el siguiente elemento hermano del primer p
let pSibling = firstP.nextElementSibling;
// 11. Borra el último elemento de body
lastNodeBody.remove();
// 12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame <img src="cambiame"> a "cambiado"
let imgs = document.getElementsByTagName("img");
for (let i of imgs) {
    if (i.getAttribute("src") === "cambiame") {
        i.setAttribute("src", "cambiado");
    }
}

// 13. Dale la clase "claseejemplo" al primer p
firstP.classList.add("exampleClass");
// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
let uls = document.getElementsByTagName("ul");
for(let ul of uls) {
    if (ul.children.length == 2) {
        let newLi = document.createElement("li");
        newLi.textContent = "I'm a new li";
        ul.appendChild(newLi);
    }
}
// 15. Selecciona el padre del primer p
let parentFirstP = firstP.parentElement;

// 16. Selecciona el hermano anterior del primer p
let olderSiblingFirstP = firstP.previousSibling;

// 17. Selecciona el primer div con clase "container" y modifica su background-color a red
let divContainer = document.querySelectorAll("div.container")[0];
divContainer.setAttribute("style", "background-color: red")

// 18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
let pText = document.getElementById("text");
let newAP = document.createElement("a");
newAP.textContent = "New content";
newAP.setAttribute("href", "https://www.google.com");
pText.replaceWith(newAP)

;// 19. Selecciona los div con clase "eustakio"
let divEu = document.querySelectorAll("div.eustakio")[0];
divEu.setAttribute("style", "color: purple");

// 20. Selecciona el párrafos que un ID con valor "paisa"
let pPaisa = document.getElementById("paisa");
pPaisa.setAttribute("style", "color: green");

// 21. Selecciona el primer párrafo hijo de un div
let firstPInDiv = document.querySelector("div p");

// 22. Selecciona el penúltimo enlace de la página.
let allLinks = document.querySelectorAll("a");
let penultimateLink = allLinks[allLinks.length - 2];

// 23. Selecciona el antepenúltimo párrafo de los div y añádele la clase "portatil" si no la tiene, y en caso de tenerla, que la elimine.
let divParagraphs = document.querySelectorAll("div p");
if (divParagraphs.length >= 3) {
    let antepenultimateP = divParagraphs[divParagraphs.length - 3];
    antepenultimateP.classList.toggle("portatil");
}

// 24. Selecciona el padre del primer li de la página
let firstLi = document.querySelector("li");
let firstLiParent = firstLi.parentElement;

// 25. Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
let orderedLists = document.querySelectorAll("ol");
for (let ol of orderedLists) {
    if (ol.children.length === 2) {
        let newLi = document.createElement("li");
        newLi.textContent = "Elemento intermedio";
        ol.insertBefore(newLi, ol.children[1]);
    }
}

// 26. Añade el atributo class con valor "azul" al último elemento p
let lastParagraph = document.querySelectorAll("p");
lastParagraph[lastParagraph.length - 1].classList.add("azul");

// 27. Comprueba los elementos div que tengan el atributo class; si lo tiene, se debe añadir el valor "container", y si no lo tiene, no se hace nada.
let allDivs = document.querySelectorAll("div");
for (let div of allDivs) {
    if (div.hasAttribute("class")) {
        div.classList.add("container");
    }
}

// 28. Obtén el valor del atributo alt de la última imagen
let allImgs = document.querySelectorAll("img");
let lastImgAlt = allImgs[allImgs.length - 1].getAttribute("alt");
console.log(lastImgAlt);

// 29. Suponiendo que tenemos <span class="textoAzul" id="primerspan">Hola</span>.
// Obtén los valores de los atributos y los imprimes por pantalla uno por uno.
let primerSpan = document.getElementById("primerspan");
if (primerSpan) {
    for (let attr of primerSpan.attributes) {
        console.log(`${attr.name}: ${attr.value}`);
    }
}

// 30. Modifica el estilo del h1 para que el font-size sea de 40px, el color sea naranja y el texto se alinee a la derecha.
let h1 = document.querySelector("h1");
h1.style.fontSize = "40px";
h1.style.color = "orange";
h1.style.textAlign = "right";

// 31. Suponiendo que tenemos el siguiente código. Añade debajo un tercer p que diga "soy el tres";
// ```html
//   <div id="parrafos">
//     <p>hola soy el uno</p>
//     <p>hola soy el dos</p>
//   </div>
// ```
// 32. Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto "hola yo soy el uno y medio".
// 33. Añade un nuevo elemento a una lista de modo que ocupe la primera posición.
// 34. Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.
// 35. Convierte  el primer elemento de una lista en un enlace.
// 36. Borra el atributo title de todas las imágenes con la clase 'img'.
// 37. Añade un punto final al texto contenido por las etiquetas p.
// 38. De un conjunto de etiquetas article hijos de un section con la clase 'products', selecciona aquellos que tengan la clase 'oferta' y establece el valor de su atributo data-iva a cero
// 39. Añade el texto "Modificado" al tercer li de todos los  ul
// 40. Incluye la clase porelasterisco en todos los p que tengan la clase preparado
// 41. Inserta un div con la clase pepaino y cuyo border sea rojo, con dos etiquetas hijas p, en las que el primer párrafo sea la clase del div y el segundo párrafo sea el color del border.
// 42. De las listas no ordenadas, selecciona el primer y último hijo "li" y sus hermanos anteriores o posteriores y cambiales el color a rojo
// 43. Seleccionar los span que sean hijos de un "p" cuyo padre del elemento "p" sea un div con la clase "padre"y cambia los estilos del div poniendo un color de fondo azul