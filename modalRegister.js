
const registerBtn = document.querySelector('#register-Btn');

const modal = document.querySelector('.modal');
const contentModal = document.querySelector('.modal__content')
const closeModal = document.querySelector('.modal__close');
//open Modal
let widtch = window.innerWidth;
window.addEventListener('resize', () => {
  widtch = window.innerWidth;
});

registerBtn.addEventListener('click', () => {


  if (widtch > 749) {
    contentModal.classList.add('active');
    modal.classList.add('active');
  } else {
    window.location.href = 'registro.html';
  }

})




// close modal


    closeModal.addEventListener('click', () => {

      contentModal.classList.remove('active');
      setTimeout(() => {
        modal.classList.remove('active');
      }, 500);
    })