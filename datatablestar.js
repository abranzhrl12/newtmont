
const empresas = ["NEWMONT", "GOLDMINING", "ABC MINING", "XYZ EXPLORATION"];
const areas = ["MEDIO AMBIENTE", "SEGURIDAD", "ADMINISTRACIÓN", "LOGÍSTICA"];
const regimenes = ["10x10", "5x5", "14x7"];
const servicios = ["Desayuno", "Almuerzo", "Cena", "Desayuno-Almuerzo-Cena"];
const campamentos = ["KM37", "KM38", "La Oroya"];

const data = Array.from({ length: 300 }, (_, i) => ({
  id: 71316 + i,
  fechaRegistro: new Date().toLocaleDateString(),
  fotocheck: 10374994 + i,
  dni: Math.floor(10000000 + Math.random() * 89999999),
  nombres: `Persona ${i + 1}`,
  area: areas[Math.floor(Math.random() * areas.length)],
  regimen: regimenes[Math.floor(Math.random() * regimenes.length)],
  origen: "Origen " + (i + 1),
  destino: "Destino " + (i + 1),
  comedor: "Comedor " + (i + 1),
  campamento: campamentos[Math.floor(Math.random() * campamentos.length)],
  servicio: servicios[Math.floor(Math.random() * servicios.length)],
  empresa: empresas[Math.floor(Math.random() * empresas.length)],
  guardia: i % 2 === 0 ? "Si" : "No",
  alojamiento: i % 2 === 0 ? "Si" : "No",
  fechaReservada: new Date().toLocaleDateString(),
}));

// Variables globales
let currentPage = 1;
let recordsPerPage = 10;
let filteredData = data;

function createEditableRow(item) {
  const row = document.createElement("tr");

  // Columna de edición
  const editCell = document.createElement("td");
  const editIcon = document.createElement("span");
  editIcon.classList.add("edit-icon");
  editIcon.innerHTML = "&#9998;"; // Icono de lápiz (puedes usar FontAwesome o similar)
  editIcon.style.cursor = "pointer";
  editIcon.addEventListener("click", () => toggleEditMode(row, item, editIcon));
  editCell.appendChild(editIcon);
  row.appendChild(editCell);

  // Añadir las celdas de datos
  Object.keys(item).forEach((key) => {
    const cell = document.createElement("td");
    cell.textContent = item[key];
    cell.setAttribute("data-key", key); // Almacenar el nombre del campo en data-key
    row.appendChild(cell);
  });

  return row;
}

function toggleEditMode(row, item, editIcon) {
  const isEditing = row.classList.contains("editing");

  if (isEditing) {
    // Guardar los cambios y volver al modo de visualización
    row.classList.remove("editing");
    editIcon.innerHTML = "&#9998;"; // Volver al icono de lápiz

    row.querySelectorAll("td[data-key]").forEach((cell) => {
      const input = cell.querySelector("input");
      if (input) {
        const key = cell.getAttribute("data-key");
        const newValue = input.value;
        cell.textContent = newValue; // Mostrar el nuevo valor
        item[key] = newValue; // Actualizar los datos en el objeto
      }
    });
  } else {
    // Cambiar al modo de edición
    row.classList.add("editing");
    editIcon.innerHTML = "&#10004;"; // Cambiar a icono de check

    row.querySelectorAll("td[data-key]").forEach((cell) => {
      const key = cell.getAttribute("data-key");
      const value = item[key];
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      cell.innerHTML = ""; // Limpiar la celda
      cell.appendChild(input); // Añadir campo de entrada
    });
  }
}




// Actualiza el combo de empresas
const selectMenu = document.querySelector(".options-list");
empresas.forEach((empresa, index) => {
  const optionDiv = document.createElement("div");
  optionDiv.classList.add("option");
  optionDiv.textContent = empresa;
  optionDiv.dataset.index = index;
  selectMenu.appendChild(optionDiv);
});

const select = document.querySelector("#selectDatabla");
const optionsList = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
  optionsList.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => opt.classList.remove('selected'));
    select.querySelector("span").textContent = option.textContent;
    option.classList.add("selected");
    optionsList.classList.toggle("active");
    filterTable();
  });
});

// Actualizar tabla y botones de paginación
function populateTable(dataToDisplay) {
  const dataTable = document.querySelector("#dataTable tbody");
  dataTable.innerHTML = ''; // Limpia las filas existentes

  dataToDisplay.forEach(item => {
    const row = dataTable.insertRow();

    Object.keys(item).forEach((key, i) => {
      const cell = row.insertCell(i);
      cell.textContent = item[key];
    });
  });
}
function updatePaginationControls() {
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  
  // Actualizar el total de páginas
  document.getElementById("totalPages").textContent = totalPages;
  
  // Actualizar el estado de los botones
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;

  // Actualizar el número de página actual
  document.getElementById("currentPage").textContent = currentPage;
  document.getElementById("pageInput").value = currentPage;
}
function paginateTable() {
  const dataTable = document.querySelector("#dataTable tbody");
  dataTable.innerHTML = ''; // Limpiar tabla

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const dataToDisplay = filteredData.slice(startIndex, endIndex);

  // Crear una fila editable por cada elemento de datos
  dataToDisplay.forEach(item => {
    const row = createEditableRow(item);
    dataTable.appendChild(row);
  });

  // Actualizar controles de paginación
  updatePaginationControls();
}


// Filtro y paginación
function filterTable() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const selectedEmpresa = document.querySelector(".select .selected")?.textContent;

  filteredData = data;

  if (selectedEmpresa) {
    filteredData = filteredData.filter(item => item.empresa === selectedEmpresa);
  }

  if (searchQuery) {
    filteredData = filteredData.filter(item =>
      item.nombres.toLowerCase().includes(searchQuery) || item.dni.toString().includes(searchQuery)
    );
  }

  currentPage = 1; // Reiniciar a la primera página
  paginateTable();
}
// Manejador para cambiar el número de registros por página
document.getElementById("numRecords").addEventListener("change", (e) => {
  recordsPerPage = parseInt(e.target.value);
  currentPage = 1; // Reiniciar a la primera página
  paginateTable();
});

// Manejador para el campo de búsqueda
document.getElementById("search").addEventListener("input", filterTable);

// Manejadores para los botones de paginación
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    paginateTable();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    paginateTable();
  }
});
// Manejador para el input de número de página
document.getElementById("pageInput").addEventListener("change", (e) => {
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const newPage = parseInt(e.target.value);

  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    paginateTable();
  } else {
    // Si el valor ingresado no es válido, lo devolvemos a la página actual
    e.target.value = currentPage;
  }
});

// Inicializar tabla
filterTable();
