try {
    function showMessage(type) {
        // const container = document.getElementById('messages-container');
        // container.innerHTML = ''; // Limpiar el contenedor antes de agregar un nuevo mensaje
        
        let messageHTML = '';
        
        switch(type) {
          case 1:
            messageHTML = `
              <div class="sucess">
                
                <svg class="sucess-svg1" width="26" id="Capa_2" data-name="Capa 2"  viewBox="0 0 32.85 32.85">
                  <defs>
                    <style>
                      .cls-10 {
                        fill: #fff;
                        fill-rule: evenodd;
                      }
                    </style>
                  </defs>
                  <g id="Capa_2-2" data-name="Capa 2">
                    <path class="cls-10" d="m16.42,32.85c-7.74,0-11.61,0-14.02-2.41S0,24.17,0,16.42,0,4.81,2.41,2.41C4.81,0,8.68,0,16.42,0s11.61,0,14.02,2.41c2.41,2.41,2.41,6.28,2.41,14.02s0,11.61-2.41,14.02-6.28,2.41-14.02,2.41Zm4.06-22.31c.53.43.61,1.21.18,1.73l-9.38,11.5c-.23.29-.58.45-.95.45s-.72-.17-.95-.45l-3.75-4.6c-.43-.53-.35-1.3.18-1.73.53-.43,1.3-.35,1.73.18l2.8,3.43,8.43-10.33c.43-.53,1.21-.61,1.73-.18Zm6.57,0c.53.43.61,1.21.18,1.73l-9.39,11.5c-.25.3-.63.47-1.02.45-.39-.02-.75-.23-.97-.56l-.47-.72c-.37-.57-.21-1.33.36-1.7.33-.22.74-.25,1.09-.13l8.49-10.4c.43-.53,1.21-.61,1.73-.18Z"/>
                  </g>
                </svg>
              <span>Registro Exitoso</span>
      
              <svg class="sucess-svg2" width="20" viewBox="0 0 384 512"><path fill="#fff" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"/></svg>
              </div>
            `;
            break;
          case 2:
            messageHTML = `
              <div class="error">
                 <svg class="error-svg1" width="26" id="Capa_2" data-name="Capa 2"  viewBox="0 0 32.85 32.85">
                  <defs>
                    <style>
                      .cls-10 {
                        fill: #fff;
                        fill-rule: evenodd;
                      }
                    </style>
                  </defs>
                  <g id="Capa_2-2" data-name="Capa 2">
                    <path class="cls-10" d="m16.42,32.85c-7.74,0-11.61,0-14.02-2.41S0,24.17,0,16.42,0,4.81,2.41,2.41C4.81,0,8.68,0,16.42,0s11.61,0,14.02,2.41c2.41,2.41,2.41,6.28,2.41,14.02s0,11.61-2.41,14.02-6.28,2.41-14.02,2.41Zm4.06-22.31c.53.43.61,1.21.18,1.73l-9.38,11.5c-.23.29-.58.45-.95.45s-.72-.17-.95-.45l-3.75-4.6c-.43-.53-.35-1.3.18-1.73.53-.43,1.3-.35,1.73.18l2.8,3.43,8.43-10.33c.43-.53,1.21-.61,1.73-.18Zm6.57,0c.53.43.61,1.21.18,1.73l-9.39,11.5c-.25.3-.63.47-1.02.45-.39-.02-.75-.23-.97-.56l-.47-.72c-.37-.57-.21-1.33.36-1.7.33-.22.74-.25,1.09-.13l8.49-10.4c.43-.53,1.21-.61,1.73-.18Z"/>
                  </g>
                </svg>
                <div class="error__texts">
                  <p>Error en el Registro</p>
                  <small>Intentelo nuevamente</small>
                </div>
            
      
              <svg class="error-svg2" width="20" viewBox="0 0 384 512"><path fill="#fff" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"/></svg>
              </div>
            `;
            break;
          case 3:
            messageHTML = `
             <div class="warning">  
              <svg class="warning-svg1" width="26" id="Capa_2" data-name="Capa 2"  viewBox="0 0 32.85 32.85">
                  <defs>
                    <style>
                      .cls-10 {
                        fill: #fff;
                        fill-rule: evenodd;
                      }
                    </style>
                  </defs>
                  <g id="Capa_2-2" data-name="Capa 2">
                    <path class="cls-10" d="m16.42,32.85c-7.74,0-11.61,0-14.02-2.41S0,24.17,0,16.42,0,4.81,2.41,2.41C4.81,0,8.68,0,16.42,0s11.61,0,14.02,2.41c2.41,2.41,2.41,6.28,2.41,14.02s0,11.61-2.41,14.02-6.28,2.41-14.02,2.41Zm4.06-22.31c.53.43.61,1.21.18,1.73l-9.38,11.5c-.23.29-.58.45-.95.45s-.72-.17-.95-.45l-3.75-4.6c-.43-.53-.35-1.3.18-1.73.53-.43,1.3-.35,1.73.18l2.8,3.43,8.43-10.33c.43-.53,1.21-.61,1.73-.18Zm6.57,0c.53.43.61,1.21.18,1.73l-9.39,11.5c-.25.3-.63.47-1.02.45-.39-.02-.75-.23-.97-.56l-.47-.72c-.37-.57-.21-1.33.36-1.7.33-.22.74-.25,1.09-.13l8.49-10.4c.43-.53,1.21-.61,1.73-.18Z"/>
                  </g>
                </svg>
                <div class="warning__texts">
                  <span>Complete todos los</span>
                  <span>campos</span>
                </div>
             
      
              <svg class="warning-svg2" width="20" viewBox="0 0 384 512"><path fill="#fff" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"/></svg>
              
          </div>
            `;
            break;
          default:
            console.log('Tipo de mensaje no válido');
            return;
        }
      
      // Insertar el mensaje en el DOM
      document.body.insertAdjacentHTML('beforeend', messageHTML);
      
      // Seleccionar el último mensaje insertado
      const insertedMessage = document.body.lastElementChild;
      
      // Eliminar el mensaje después de 1 segundo
      setTimeout(() => {
        insertedMessage.remove(); // Elimina el div del DOM
      },3000); // 1000ms = 1 segundo
      
      }
      
} catch (error) {
    
}


//prueba
const registerSucces=document.querySelector('#registerSucces')
registerSucces.addEventListener('click',()=>{
  showMessage(1);
  modalload.classList.remove('active')
  setTimeout(() => {
    modal.classList.remove('active');
  }, 300);

  }) 
