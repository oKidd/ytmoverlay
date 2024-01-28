document.addEventListener('DOMContentLoaded', function () {
    // Código para desactivar el arrastre de las imágenes
    const imagenes = document.querySelectorAll('img');
    imagenes.forEach((imagen) => {
        imagen.setAttribute('draggable', 'false');
    });

    const frame = document.getElementById('frame').contentDocument;

    const frameImages = frame.querySelectorAll('img');
    frameImages.forEach((imagen) => {
        imagen.setAttribute('draggable', 'false');
    });
});