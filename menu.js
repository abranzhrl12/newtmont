
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

 const areasPage=document.querySelector('#Areas')
 const regimenesPage=document.querySelector('#Regimenes')
 const comedores=document.querySelector('#Comedores')
 const destinos=document.querySelector('#Destinos')
 const traslado=document.querySelector('#Traslado')
 const usuarios=document.querySelector('#Usuarios')
const cerrarSession=document.querySelector('.menu__item-text--pd');
const empresasS=document.querySelector('#Empresas')

empresasS.addEventListener('click',()=>{
  window.location.href='empresas.html'
})

areasPage.addEventListener('click',()=>{
  window.location.href='Areas.html'
})

regimenesPage.addEventListener('click',()=>{
  window.location.href='Regimens.html'
})

comedores.addEventListener('click',()=>{
  window.location.href='Comedor.html'
})

destinos.addEventListener('click',()=>{
  window.location.href='destinos.html'
})


traslado.addEventListener('click',()=>{
  window.location.href='traslado.html'
})


usuarios.addEventListener('click',()=>{
  window.location.href='usuarios.html'
})

cerrarSession.addEventListener('click',()=>{
  window.location.href='index.html'
})




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
 
    item.classList.add('active');
    itemssub.forEach(i => i.classList.remove('active'));
 
    document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', baseColor);
  });
});
let check = 10;

// subdrop.addEventListener('click', (event) => {
//   // Detiene la propagación del evento a los elementos padres
//   event.stopPropagation();
  
//   // Alterna el estado del checkbox y la variable 'check'
//   subdrop.checked = check % 2 === 0;
//   subdrop.classList.toggle('active', check % 2 === 0);
//   check++;
// });

// Verifica si el checkbox ya está activo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Verificamos el estado inicial del checkbox y sincronizamos la clase 'active'
  if (subdrop.checked) {
    subdrop.classList.add('active');
    console.log("Se añadió la clase 'active' porque estaba 'checked'.");
  } else {
    subdrop.classList.remove('active');
    console.log("Se eliminó la clase 'active' porque no estaba 'checked'.");
  }
});

// Añade el evento 'click' para alternar el estado
subdrop.addEventListener('click', (event) => {
  // Detiene la propagación del evento a los elementos padres
  event.stopPropagation();

  // Depuración: Mostrar el estado actual antes de cambiarlo
  console.log("Antes del clic, estado de 'checked':", subdrop.checked);

  // Cambia la clase 'active' en función del estado actual del checkbox
  if (subdrop.checked) {
    subdrop.classList.add('active');
    console.log("Se añadió la clase 'active' porque está 'checked'.");
  } else {
    subdrop.classList.remove('active');
    console.log("Se eliminó la clase 'active' porque no está 'checked'.");
  }

  // Depuración: Mostrar el nuevo estado después de cambiarlo
  console.log("Después del clic, estado de 'checked':", subdrop.checked);
  console.log("La clase 'active' está presente:", subdrop.classList.contains('active'));
});


const textperfil=document.querySelector('.menu__item-text--wrap')

contraer.addEventListener('click', () => {
  if (contraer.checked) {
    document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', baseColor);
    // Si 'contraer' está marcado, marca 'subdrop' y remueve la clase 'active' de todos los items
    textperfil.style.textwrap='wrap';
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

// itemssub.forEach(items => {
//   items.addEventListener('click', () => {
//     itemssub.forEach(i => i.classList.remove('active'));
//     document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', nuevoColor);
//     items.classList.toggle('active');

//   });
// });

// const hiddenMenu = document.querySelector('.close-hamburger')
// const inputmovil = document.querySelector('#input-movil');
// hiddenMenu.addEventListener('click', () => {

//   console.log('clickkkk')

//   // Desmarcar el input (si es un checkbox o radio)
//   if (inputmovil && inputmovil.type === 'checkbox') {
//     inputmovil.checked = false;
//   }
// })
document.addEventListener('DOMContentLoaded', () => {
  const itemAdministration = document.querySelector('.menu__item-Administration');
  
  // Verificar si 'itemAdministration' tiene la clase 'active' al cargar la página
  if (itemAdministration.classList.contains('active')) {
    console.log("Al cargar la página, el elemento 'itemAdministration' tiene la clase 'active'.");
    document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', nuevoColor);
  } else {
    console.log("Al cargar la página, el elemento 'itemAdministration' no tiene la clase 'active'.");
  }
  
  itemssub.forEach(items => {
    items.addEventListener('click', () => {
      itemssub.forEach(i => i.classList.remove('active'));
      
      // Cambia el color del menú
      document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', nuevoColor);
      
      // Agrega o quita la clase 'active' en el elemento actual
      items.classList.toggle('active');
      
      // Verificar si 'itemAdministration' tiene la clase 'active'
      if (itemAdministration.classList.contains('active')) {
        console.log("El elemento 'itemAdministration' tiene la clase 'active'.");
      } else {
        console.log("El elemento 'itemAdministration' no tiene la clase 'active'.");
      }
    });
  });
});


const svgangle = document.querySelector('.menu__angle-right');

subdrop.addEventListener('click', () => {
  itemssub.forEach(i => i.classList.remove('active'));
  // document.documentElement.style.setProperty('--itemsMenu-ColorPrimary', baseColor);
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