
    $(document).ready(function() {
    $('#myTable').DataTable({
        searching: false // Deshabilita el filtro
    });
});
  
    const contraer = document.querySelector("#contraer")
    const registerBtn = document.querySelector('#register-Btn');
    const contentModal = document.querySelector('.modal__content')
    const closeModal = document.querySelector('.modal__close');
    const modal = document.querySelector('.modal');
    const btnUpload = document.querySelector('#btnupload')
    const modalload = document.querySelector('.load')
    const closeLoad = document.querySelector('#closeLoad')
    const contentload = document.querySelector('.modal-load')




     const nuevoColor = '#3A68C5';
    const baseColor = '#FCAF17'
    const subdrop = document.querySelector('#subdrop');
    const items = document.querySelectorAll('.menu__item');
    const itemAdministration = document.querySelector('.menu__item-Administration')

    // Crea un array que incluye todos los elementos de 'items' y 'itemssub' (si está definido)
    const allItems = [...items, itemAdministration].filter(Boolean); // `filter(Boolean)` elimina los valores `null` o `undefined`
    const itemssub = document.querySelectorAll('.menu__sublist-item');

  

 



    // Añade un evento de clic a cada elemento
    allItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los elementos
        allItems.forEach(i => i.classList.remove('active'));

        // Añade la clase 'active' al elemento clicado
        console.log(item)
        item.classList.add('active');
        itemssub.forEach(i => i.classList.remove('active'));
        subdrop.checked = false;
        document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', baseColor);
      });
    });
    // modal de cargar
    btnUpload.addEventListener('click', () => {
      console.log('Upload')
      contentload.classList.remove('active');
      modalload.classList.add('active');  // Sin el punto antes de 'active'
    });

    closeLoad.addEventListener('click', () => {
      contentload.classList.add('active');  // Sin el punto antes de 'active'
      setTimeout(() => {
        modalload.classList.remove('active');
      }, 400);
    });

    contraer.addEventListener('click', () => {
      if (contraer.checked) {
        // Si 'contraer' está marcado, marca 'subdrop' y remueve la clase 'active' de todos los items
        subdrop.checked = false;


      }
    });

    itemssub.forEach(items => {
      items.addEventListener('click', () => {
        itemssub.forEach(i => i.classList.remove('active'));
        document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', nuevoColor);
        items.classList.toggle('active');

      });
    });

    const hiddenMenu = document.querySelector('.close-hamburger')
    const inputmovil = document.querySelector('#input-movil');
    hiddenMenu.addEventListener('click', () => {

      console.log('clickkkk')

      // Desmarcar el input (si es un checkbox o radio)
      if (inputmovil && inputmovil.type === 'checkbox') {
        inputmovil.checked = false;
      }
    })


    const svgangle = document.querySelector('.menu__angle-right');

    subdrop.addEventListener('click', () => {
      itemssub.forEach(i => i.classList.remove('active'));
      document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', baseColor);
      svgangle.classList.toggle('active');
      if (subdrop && subdrop.type === 'checkbox' && contraer) {
        contraer.checked = false;  // Marca el checkbox 'contraer' si corresponde
      }
    })

    const initialPage = document.querySelector('.menu__figure');
    initialPage.addEventListener('click', () => {
      console.log('hola')
      window.location.href = 'start.html';
    })


    let widtch = window.innerWidth;
    window.addEventListener('resize', () => {
      widtch = window.innerWidth;
    });

    registerBtn.addEventListener('click', () => {


      if (widtch > 960) {
        contentModal.classList.add('active');
        modal.classList.add('active');
      } else {
        window.location.href = 'registro.html';
      }

    })

    closeModal.addEventListener('click', () => {

      contentModal.classList.remove('active');
      setTimeout(() => {
        modal.classList.remove('active');
      }, 500);
    })
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const fileIcon = document.getElementById('fileIcon');
    const fileInfo = document.getElementById('fileInfo');

    // Drag and Drop Events
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      handleFiles(e.dataTransfer.files);
    });

    // Button Click for File Input
    fileInput.addEventListener('change', () => {
      handleFiles(fileInput.files);
    });

    // Handle Files Function
    function handleFiles(files) {
      const file = files[0];

      if (file) {
        const fileType = file.type;
        const fileName = file.name;

        // Show file info
        fileInfo.textContent = `Uploaded: ${fileName}`;

        // Update icon based on file type
        if (fileType === 'application/pdf') {
          fileIcon.src = 'pdf-icon.png'; // replace with your PDF icon path
        } else if (
          fileType ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          fileType === 'application/vnd.ms-excel'
        ) {
          fileIcon.src = './Assets/iconos/office365.png'; // replace with your Excel icon path
        } else {
          fileIcon.src = ''; // if it's not a supported type
        }

        // Display icon
        fileIcon.style.display = 'block';
      }
    }
