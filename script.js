/*
scripts.js: Contindrà totes les funcionalitats necessàries per manipular el DOM 
i mostrar les dades de manera adequada.
*/

const botonCargar = document.getElementById("cargar");
const listaVehiculos = document.getElementById("lista-vehiculos");
const addButton = document.getElementById("add");

const tipoSelect = document.getElementById("type");

const marcaInput = document.getElementById("marca");
const modeloInput = document.getElementById("model");
const anyInput = document.getElementById("any");
const cuartoLabel = document.getElementById("cuarto-label");
const cuartoInput = document.getElementById("cuartoInput");
const cargarVehiculos = document.getElementById("cargar-datos");
const vehiculo = document.getElementById("vehiculo");

function cambiarTipo() {
    const tipo = tipoSelect.value;
    switch (tipo) {
        case "Cotxe":
            cuartoLabel.textContent = "Portes";
            cuartoInput.placeholder = "Portes";
            cuartoInput.removeAttribute("type");
            cuartoInput.setAttribute("type", "number");
            break;

        case "Moto":
            cuartoLabel.textContent = "Tipus";
            cuartoInput.placeholder = "Tipus";
            cuartoInput.removeAttribute("type");
            cuartoInput.setAttribute("type", "text");
            break;

        case "Camio":
            cuartoLabel.textContent = "Capacitat";
            cuartoInput.placeholder = "Capacitat (tones)";
            cuartoInput.removeAttribute("type");
            cuartoInput.setAttribute("type", "number");
            break;

        default:
            cuartoLabel.textContent = "Extra";
            cuartoInput.placeholder = "Extra";
            cuartoInput.removeAttribute("type");
            cuartoInput.setAttribute("type", "text");


    }
}

function renderizarVehiculos() {
    listaVehiculos.innerHTML = "";

    obtenerVehiculos().forEach((vehiculo, index) => {
        const item = document.createElement("li");
        item.className = "bg-white shadow-lg p-4 rounded-lg flex justify-between items-center mb-2";

        // Definir icono según tipo de vehículo
        let icono = "";
        let extraInfo = "";

        if (vehiculo instanceof Coche) {
            icono = "🚗";
            extraInfo = `${vehiculo.puertas} portes`;
        } else if (vehiculo instanceof Moto) {
            icono = "🏍️";
            extraInfo = `${vehiculo.tipoMoto} tipus`;
        } else if (vehiculo instanceof Camion) {
            icono = "🚛";
            extraInfo = `${vehiculo.capacidad} pes`;
        }



        item.innerHTML = `
            <div class="flex items-center gap-2 id="vehiculo${index}"">
                <p style="font-size: 40px;">${icono}</p>
                <div>
                    <strong class="text-blue-600 uppercase">${vehiculo.marca}</strong>
                    <p>(${vehiculo.year})</p>
                </div>
                <div>
                    <p class="text-gray-500">${vehiculo.modelo}</p>
                    <p class="text-gray-500">${extraInfo}</p>
                </div>
            

            </div> 
            <button class="text-red-500 font-bold text-xl ml-auto" onclick="eliminarYRenderizar(${index});">✖</button>
            `;

        listaVehiculos.appendChild(item);
        console.log(vehiculos);
    });
}

addButton.onclick = function () {
    const tipo = tipoSelect.value;
    const marca = marcaInput.value.trim();
    const modelo = modeloInput.value.trim();
    const year = anyInput.value.trim();
    const extra = cuartoInput.value.trim();

    if (marca && modelo && year && extra) {
        cargarVehiculos.textContent = null;
        addVehiculo(tipo, marca, modelo, year, extra);
        renderizarVehiculos();

        marcaInput.value = "";
        modeloInput.value = "";
        anyInput.value = "";
        cuartoInput.value = "";
    }
};

function eliminarYRenderizar(index) {
    eliminarVehiculo(index);
    renderizarVehiculos();
}

botonCargar.onclick = function () {
    cargarVehiculos.textContent = "Cargando datos...";
    
    listaVehiculos.style.display = "none";

    setTimeout(() => {
        if (typeof callback === "function") {
            callback('Datos cargados'); 
        }

        if (vehiculos.length === 0) {
            cargarVehiculos.textContent = "¡No hay vehículos guardados!";
        } else {
            cargarVehiculos.textContent = null;
            renderizarVehiculos();
            listaVehiculos.style.display = "block"; // Volver a mostrar la lista
        }
    }, 2000);
};

// Inicializar la funcionalidad
cambiarTipo();