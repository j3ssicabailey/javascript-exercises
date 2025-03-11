// 4. Elabora un programa que vaya rellenando un párrafo de forma dinámica con todas las letras que vaya pulsando el usuario sobre cualquier elemento de la página. Al final del párrafo debes incluir un botón para limpiar el contenido del párrafo.


document.addEventListener("keydown", (e) => {
    let paragraph = document.getElementById("typingParagraph");
    if (e.key === "Backspace") {
        paragraph.textContent = paragraph.textContent.slice(0, -1);
    } else if (e.key === "Space") {
        paragraph.textContent += " ";
    } else if (e.key.length === 1) {
        paragraph.textContent += e.key;
    } else {
        alert("I didn´t recognise that!");
    }
    
});

let clear = document.getElementById("clearText");
clearText.addEventListener("click", () => {
    let userConfirm = confirm("Are you sure you want to clear text?");
    if(userConfirm) {
        let paragraph = document.getElementById("typingParagraph");
        paragraph.textContent = "";
    } else {
        alert("Continue typing!");
    }
})
