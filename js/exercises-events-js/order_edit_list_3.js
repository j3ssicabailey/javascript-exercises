// 3. Escribe un programa que permita ordenar los elementos de una lista desordenada. Cada elemento debe tener un aspa en su extremo derecho para poder ser eliminado. Además, al final habrá un botón para añadir un elemento. El texto del nuevo elemento se le debe pedir al usuario por teclado.

let addButton = document.getElementById("addItem");
let sortableList = document.getElementById("sortableList");
let sortButton = document.getElementById("sortList");
let deleteButtons = document.querySelectorAll("span.delete");

addButton.addEventListener("click", () => {
    let newItem = prompt("Add an item to the list: ");
    if (newItem) {
        let newLi = document.createElement("li");
        newLi.innerHTML = `${newItem} <span class="delete">✖</span>`
        sortableList.appendChild(newLi);
    } else {
        alert ("Please try again");
    }
})

sortButton.addEventListener("click", () => {
    let lisArray = Array.from(sortableList.children);
    if (lisArray.length >= 2) {
        lisArray.sort((a, b) => (a.textContent > b.textContent ? 1 : -1));
        lisArray.forEach(li => sortableList.appendChild(li));
    } else {
        alert ("There aren't enough elements to sort");
    }
})

deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let li = e.target.closest("li");
        if(li) {
            li.remove();
        }
    });
});




