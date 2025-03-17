// 6. Crea una aplicación que contenga un párrafo con mucho texto. Debajo del párrafo debe aparecer un botón por cada vocal. Al pulsar sobre una vocal, esa vocal desaparecerá del texto.

let text = document.getElementById("vowelText");
let vowelButtons = document.getElementById("vowelButtons");

vowelButtons.addEventListener("click", (e) => {
    let vowel = e.target.getAttribute("data-vowel");
    let newText = text.textContent.split("").filter(letter =>
        letter.toLowerCase() !== vowel).join("");
    text.textContent = newText;
    e.target.disabled = true;
});
    
    



