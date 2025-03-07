// Crea un programa que a partir de una nutrida variedad de elementos HTML los coloree con colores especificos segun el elemento
// cada vez que se coloque el ratón sobre ellos, y los vuelva a colorear de blanco cuando el ratón los abandone.

//Changing h1
const titleElement = document.getElementsByTagName("h1")[0];

titleElement.addEventListener("mouseover", () => {
    titleElement.setAttribute("style", "background-color: pink")
})
titleElement.addEventListener("mouseout", () => {
    titleElement.setAttribute("style", "background-color:")
})

//Changing ps with class
const psClassElements = document.querySelectorAll("p.pWithClass");
psClassElements.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.style.backgroundColor = "green";
    });

    p.addEventListener("mouseout", () => {
        p.style.backgroundColor = "";
    });
});

//Changing table ths 
const ths = document.getElementsByTagName("th"); 

for (let i = 0; i < ths.length; i++) {
    ths[i].addEventListener("mouseover", () => {
        ths[i].style.backgroundColor = "yellow";
    });

    ths[i].addEventListener("mouseout", () => {
        ths[i].style.backgroundColor = ""; 
    });
}

//Changing links only if class name (!important to override other styles ??)
const lis = document.getElementsByTagName("li");

for (let li of lis) {
    const a = li.querySelector("a");
    if (a && a.hasAttribute("class")) {
        li.addEventListener("mouseover", () => {
            li.style.backgroundColor = "lightblue";  
        });

        li.addEventListener("mouseout", () => {
            li.style.backgroundColor = "";  
        });
    }
}


//Changing form
const firstForm = document.forms[0];
firstForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Scanning form...")
    let agreeTerms = document.getElementById("checkbox");
    if (agreeTerms.checked) {
        firstForm.submit() 
    } else {
        alert("You must agree to terms to send");
    }
});