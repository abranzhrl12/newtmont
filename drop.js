const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const fileIcon = document.getElementById('fileIcon');
const fileInfo = document.getElementById('fileInfo');
const btnUpload = document.querySelector('#btnupload')
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
      fileIcon.src = 'excel-icon.png'; // replace with your Excel icon path
    } else {
      fileIcon.src = ''; // if it's not a supported type
    }

    // Display icon
    fileIcon.style.display = 'block';
  }
}


    // modal de cargar
    btnUpload.addEventListener('click', () => {
   
      contentload.classList.remove('active');
      modalload.classList.add('active');  // Sin el punto antes de 'active'
    });

    closeLoad.addEventListener('click', () => {
      contentload.classList.add('active');  // Sin el punto antes de 'active'
      setTimeout(() => {
        modalload.classList.remove('active');
      }, 400);
    });
