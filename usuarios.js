let modal = document.getElementById("myModal");
let openModalBtn = document.getElementById("openModal");
let closeModalSpan = document.querySelector(".close");
let form = document.getElementById("addEmpresaForm");
let tableBody = document.querySelector("#empresasTable tbody");

let idEmpresaInput = document.getElementById("idEmpresa");
let descripcionEmpresaInput = document.getElementById("descripcionEmpresa");
let modalTitle = document.getElementById("modalTitle");
let submitBtn = document.getElementById("submitBtn");
 const modalCompanyCancel= document.querySelector("#companyBtnCancel");
let editingRow = null; // Variable para guardar la fila en edición

// Abre el modal para agregar nueva empresa
openModalBtn.onclick = function() {
    editingRow = null;
    idEmpresaInput.value = "";
    descripcionEmpresaInput.value = "";
    modalTitle.innerHTML = `Nuevo Usuario <svg class="sucess-svg2 close" width="20" viewBox="0 0 384 512">
    <path fill="#0C2B82" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"/>
    </svg>`;
   
    modal.style.display = "block";
    document.querySelector(".close").onclick = function() {
        modal.style.display = "none";
        
    };
    modalCompanyCancel.addEventListener('click',()=>{
        modal.style.display = "none";
    });
}

// Cierra el modal cuando se hace clic en la X
closeModalSpan.onclick = function() {
    modal.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
form.onsubmit = function(event) {
    event.preventDefault();

    var idEmpresa = idEmpresaInput.value;
    var descripcionEmpresa = descripcionEmpresaInput.value;

    if (editingRow) {
        // Si está en modo edición, actualiza la fila existente
        editingRow.cells[1].innerText = idEmpresa; // Actualiza Id Empresa en la columna 1
        editingRow.cells[2].innerText = descripcionEmpresa; // Actualiza Descripción Empresa en la columna 2
    } else {
        // Si no está en modo edición, añade una nueva fila
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td class="table__td">
                 <button  class="edit-btn table__editbtn">
                                        <svg  class="svg"  width="16"  viewBox="0 0 14.7 14.7">
                                          <path  class="svg-color" fill="#6b7386" fill-rule="evenodd"  d="m9.95.46c.62-.62,1.62-.62,2.24,0l2.05,2.05c.62.62.62,1.62,0,2.24l-1.25,1.25L8.7,1.72l1.25-1.25Zm-2.37,2.37L.46,9.95c-.3.3-.46.7-.46,1.12v2.05c0,.87.71,1.58,1.58,1.58h2.05c.42,0,.82-.17,1.12-.46l7.12-7.12L7.58,2.84Z"/>
                                        
                                      </svg>
                                    </button>
            </td>
            <td class="table__td">${idEmpresa}</td>
            <td class="table__td">${descripcionEmpresa}</td>

        `;
        tableBody.appendChild(newRow);

        // Añadir evento de clic para el botón de editar en la nueva fila
        newRow.querySelector(".edit-btn").addEventListener("click", function() {
            openEditModal(newRow);
        });
    }

    modal.style.display = "none";
    form.reset();
}

// Función para abrir el modal en modo edición
function openEditModal(row) {
    editingRow = row; // Almacena la fila que se está editando
    idEmpresaInput.value = row.cells[1].innerText; // Lee Id Empresa de la columna 1
    descripcionEmpresaInput.value = row.cells[2].innerText; // Lee Descripción Empresa de la columna 2
    modalTitle.innerHTML = `Editar Usuario <svg class="sucess-svg2 close" width="20" viewBox="0 0 384 512">
    <path fill="#0C2B82" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"/>
</svg>`;
   
    submitBtn.innerHTML = ` 
<svg width="20" viewBox="0 0 15.5 15.5">
      <rect fill="#fff" class="cls-1" x="4" y="9" width="7.5" height="6.5"/>
      <path fill="#fff" class="cls-1" d="m15.5,4.29v10.07c0,.3-.13.6-.34.81s-.5.33-.8.33h-1.36v-7.25c0-.41-.34-.75-.75-.75H3.25c-.42,0-.75.34-.75.75v7.25h-1.37c-.3,0-.59-.12-.8-.33-.21-.21-.33-.51-.33-.81V1.14c0-.3.11-.59.33-.8.21-.22.5-.34.8-.34h1.14v3.97c0,.42.34.75.75.75h7.56c.41,0,.75-.33.75-.75s-.34-.75-.75-.75H3.77V0h7.44l4.29,4.29Z"/>

</svg> Guardar Cambios`;

    modal.style.display = "block";
    document.querySelector(".close").onclick = function() {
        modal.style.display = "none";
    };
    modalCompanyCancel.addEventListener('click',()=>{
        modal.style.display = "none";
    });
}

// Añadir eventos de clic para los botones de editar existentes
document.querySelectorAll(".edit-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        var row = button.parentNode.parentNode; // Selecciona la fila
        openEditModal(row);
    });
});
// Escuchar el evento de búsqueda en el input
document.getElementById("searchInput").addEventListener("input", function() {
    var filter = this.value.toUpperCase();
    var rows = document.querySelectorAll("#empresasTable tbody tr");

    rows.forEach(function(row) {
        var idEmpresa = row.cells[1].innerText.toUpperCase(); // Id Empresa está en la columna 1
        var descripcionEmpresa = row.cells[2].innerText.toUpperCase(); // Descripción Empresa está en la columna 2

        // Verifica si el filtro coincide con Id Empresa o Descripción Empresa
        if (idEmpresa.includes(filter) || descripcionEmpresa.includes(filter)) {
            row.style.display = ""; // Muestra la fila si coincide
        } else {
            row.style.display = "none"; // Oculta la fila si no coincide
        }
    });
});
