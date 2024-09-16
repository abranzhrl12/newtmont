
const nuevoColor = '#3A68C5';
const baseColor = '#FCAF17'

const contraer = document.querySelector("#contraer")
const subdrop = document.querySelector('#subdrop');
const items = document.querySelectorAll('.menu__item');
const itemAdministration = document.querySelector('.menu__item-Administration')
// Crea un array que incluye todos los elementos de 'items' y 'itemssub' (si está definido)
const allItems = [...items, itemAdministration].filter(Boolean); // `filter(Boolean)` elimina los valores `null` o `undefined`
const itemssub = document.querySelectorAll('.menu__sublist-item');
const itemsTextAll=document.querySelectorAll('.menu__item-text')



try {
  const dashboard=document.querySelector('#dashboard')

dashboard.addEventListener('click',()=>{
  window.location.href = 'dashboard.html';
})

} catch (error) {
  
}

try {
  const booking=document.querySelector('#bookingservice');
booking.addEventListener('click',()=>{
  window.location.href = 'start.html';
})

} catch (error) {
  
}


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
let check = 10;

subdrop.addEventListener('click', (event) => {
  // Detiene la propagación del evento a los elementos padres
  event.stopPropagation();
  
  // Alterna el estado del checkbox y la variable 'check'
  subdrop.checked = check % 2 === 0;
  subdrop.classList.toggle('active', check % 2 === 0);
  check++;
});

contraer.addEventListener('click', () => {
  if (contraer.checked) {
    // Si 'contraer' está marcado, marca 'subdrop' y remueve la clase 'active' de todos los items
    subdrop.checked = false;
    itemsTextAll.forEach(item =>{
      item.classList.add('active')
    })

  }else{
    itemsTextAll.forEach(itemT =>{
      itemT.classList.remove('active')
    })
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
    itemsTextAll.forEach(itemT =>{
      itemT.classList.remove('active')
    })
    contraer.checked = false;  // Marca el checkbox 'contraer' si corresponde
  }
})

//cambiar pagina

const initialPage = document.querySelector('.menu__figure');
initialPage.addEventListener('click', () => {

  window.location.href = 'start.html';
})