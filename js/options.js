// Obtener referencias a todos los botones que terminan con "-options"
const buttons = document.querySelectorAll('[id$="-options"]');
buttons.forEach(button => {
  // Agregar un evento de clic a cada botón
  button.previousElementSibling.addEventListener('click', function () {
    // Obtener la división correspondiente a cada botón
    const div = document.getElementById(button.id);

    // Obtener la imagen dentro del botón
    const image = button.previousElementSibling.querySelector('img');

    // Toggle para agregar o quitar la clase que controla la visibilidad
    div.classList.toggle('hidden');

    // Toggle para agregar o quitar la clase 'selected' en la imagen
    image.classList.toggle('selected', !div.classList.contains('hidden'));
  });
});

// Función para recargar la página
function recargarPagina() {
  location.reload();
}

// Configurar la recarga cada 1000 milisegundos (1 segundo)
// setInterval(recargarPagina, 1000);

