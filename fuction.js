// Esperar a que cargue el documento
document.addEventListener('DOMContentLoaded', function () {
  
  const formulario = document.querySelector('#formGatitos');

  // Solo ejecuta si estamos en la página del formulario
  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault(); // Evitar recarga de página

      // Obtenemos los campos
      const nombre = document.querySelector('#nombre');
      const correo = document.querySelector('#correo');
      const tipoCasa = document.querySelector('#tipoCasa');
      const mensaje = document.querySelector('#mensaje');
      const acepto = document.querySelector('#acepto');

      let todoCorrecto = true;

      // 1. Validar Nombre
      if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        todoCorrecto = false;
      } else {
        nombre.classList.remove('is-invalid');
      }

      // 2. Validar Correo simple
      if (correo.value.trim() === '' || !correo.value.includes('@')) {
        correo.classList.add('is-invalid');
        todoCorrecto = false;
      } else {
        correo.classList.remove('is-invalid');
      }

      // 3. Validar Select
      if (tipoCasa.value === '') {
        tipoCasa.classList.add('is-invalid');
        todoCorrecto = false;
      } else {
        tipoCasa.classList.remove('is-invalid');
      }

      // 4. Validar Mensaje
      if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        todoCorrecto = false;
      } else {
        mensaje.classList.remove('is-invalid');
      }

     