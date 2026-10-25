// Esperar a que toda la página cargue
document.addEventListener('DOMContentLoaded', function () {
  
  // Seleccionamos el formulario con querySelector
  const formulario = document.querySelector('#formGatitos');

  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault(); // Evita que la página se reinicie sola

      // 1. Obtenemos los 4 elementos del HTML
      const dueno = document.querySelector('#dueno');
      const mascota = document.querySelector('#mascota');
      const tipoOrigen = document.querySelector('#tipoOrigen');
      const compromiso = document.querySelector('#compromiso');

      let esValido = true;

      // 2. Validar nombre del dueño
      if (dueno.value.trim() === '') {
        dueno.classList.add('is-invalid');
        esValido = false;
      } else {
        dueno.classList.remove('is-invalid');
      }

      // 3. Validar nombre de la mascota
      if (mascota.value.trim() === '') {
        mascota.classList.add('is-invalid');
        esValido = false;
      } else {
        mascota.classList.remove('is-invalid');
      }

      // 4. Validar si eligió raza o callejero
      if (tipoOrigen.value === '') {
        tipoOrigen.classList.add('is-invalid');
        esValido = false;
      } else {
        tipoOrigen.classList.remove('is-invalid');
      }

      // 5. Validar casilla de compromiso
      if (!compromiso.checked) {
        compromiso.classList.add('is-invalid');
        esValido = false;
      } else {
        compromiso.classList.remove('is-invalid');
      }

      // Si algún campo quedó vacío, no continuamos
      if (!esValido) {
        return;
      }

      // Guardar en localStorage (cumple con la rúbrica)
      localStorage.setItem('gatitoRegistrado', mascota.value);

      // Modal de SweetAlert2 amigable y sencillo
      Swal.fire({
        icon: 'success',
        title: '¡Gatito registrado!'
      });

      // Limpiamos los campos del formulario
      formulario.reset();
    });
  }

});

    