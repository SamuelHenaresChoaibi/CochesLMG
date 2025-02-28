/*
scripts.js: Contindrà totes les funcionalitats necessàries per manipular el DOM 
i mostrar les dades de manera adequada.
*/

const botonCargar = document.getElementById("cargar");
const listaVehiculos = document.getElementById("lista-vehiculos");
const addButton = document.getElementById("add");

const tipoSelect = document.querySelector("select");

const marcaInput = document.querySelector("input");
const modeloInput = document.querySelector("input");
const yearInput = document.querySelector("input");
const cuartoLabel = document.getElementById("cuarto-label");
const cuartoInput = document.querySelector("input");

if (tipoSelect.getHTML === "Cotxe") {
    cuartoLabel.textContent("Portes");
    cuartoInput.setAttribute("placeholder", "Portes");
} else if (tipoSelect.getAttribute("select") === "Moto") {
    cuartoLabel.textContent("Tipus");
    cuartoInput.setAttribute("placeholder", "Tipus");
} else if (tipoSelect.getAttribute("select") === "Camió") {
    cuartoLabel.textContent("Capacitat");
    cuartoInput.setAttribute("placeholder", "Capacitat");
}


//Función para mostrar vehículos
function mostrarVehiculos() {

}