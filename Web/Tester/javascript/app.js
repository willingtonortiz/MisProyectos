"use strict";
window.onload = () => {
    var agregar = document.querySelector("#agregarBtn");
    agregar.addEventListener("click", () => {
        var texto = document.querySelector("#contenido");
        crearBoton(texto);
    });
    var lista = document.getElementsByClassName("lista")[0];
    lista.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            lista.removeChild(e.target.parentElement);
        }
    });
};


var crearBoton = (contenido) => {
    var elemento = document.createElement("div");
    elemento.classList.add("item");
    var texto = document.createElement("p");
    texto.innerText = contenido.value;
    var boton = document.createElement("button");
    boton.classList.add("delete");
    boton.innerText = "Borrar";
    elemento.appendChild(texto);
    elemento.appendChild(boton);
    var lista = document.getElementsByClassName("lista")[0];
    lista.appendChild(elemento);
    contenido.value = "";
}