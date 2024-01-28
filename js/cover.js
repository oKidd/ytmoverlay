document.getElementById('frame').addEventListener('load', function () {
    const frame = this.contentDocument;


    const cover = frame.getElementById('cover');

    const animationDuration = getComputedStyle(cover).animationDuration;
    document.getElementById('duration-cover').value = parseInt(animationDuration);
    // console.log(animationDuration)
    // Event listener para el input de tipo range
    document.getElementById('duration-cover').addEventListener('input', function () {
        // Modificar
        cover.style.animationDuration = `${this.value}s`;
    });


    const coverAnimation = getComputedStyle(cover).animation;
    if (!coverAnimation.includes("running none")) {
        // Si tiene animacion
        document.getElementById('spinning-cover').checked = true;
    } else {
        // No tiene animacion
        document.getElementById('spinning-cover').checked = false;
    }
    // Event listener para el input de tipo range
    document.getElementById('spinning-cover').addEventListener('input', function () {
        // Modificar
        cover.classList.toggle('cover-animation');
    });



    const roundedCover = getComputedStyle(cover).borderRadius.slice(0, -1);
    document.getElementById('rounded-cover').value = parseInt(roundedCover);
    // Event listener para el input de tipo range
    document.getElementById('rounded-cover').addEventListener('input', function () {
        // Modificar
        cover.style.borderRadius = `${this.value}px`;
    });


    const coverVisible = getComputedStyle(cover).display;
    if (coverVisible !== "none") {
        // Si es visible
        document.getElementById('cover-visible').checked = true;

        document.getElementById('rounded-cover').disabled = false;
        document.getElementById('spinning-cover').disabled = false;
        document.getElementById('duration-cover').disabled = false;
    } else {
        // No es visible
        document.getElementById('cover-visible').checked = false;

        document.getElementById('rounded-cover').disabled = true;
        document.getElementById('spinning-cover').disabled = true;
        document.getElementById('duration-cover').disabled = true;
    }

    const coverOptionsForm = document.getElementById('cover-options');
    // Obtener todos los elementos con clase "sub-option" dentro del formulario
    const subOptionsList = coverOptionsForm.getElementsByClassName('sub-option');
    // Event listener para el input de tipo range
    document.getElementById('cover-visible').addEventListener('input', function () {
        // Modificar
        if (cover.classList.contains('cover-display')) {
            // Se ha activado la visibilidad
            for (const subOption of subOptionsList) {
                // Realizar acciones con cada elemento sub-option
                if(!subOption.querySelector('#cover-visible')){
                    subOption.classList.toggle('hidden');
                    subOption.querySelector('input').disabled = false;
                    subOption.querySelector('input').style.cursor = 'pointer';
                }
            }
        } else {
            // Se ha desactivado la visibilidad
            // subOptions.getElementsByClassName('sub-option').disabled = true;
            for (const subOption of subOptionsList) {
                // Realizar acciones con cada elemento sub-option
                if(!subOption.querySelector('#cover-visible')){
                    subOption.classList.toggle('hidden');
                    subOption.querySelector('input').disabled = true;
                    subOption.querySelector('input').style.cursor = 'default';
                }
            }
        }
        cover.classList.toggle('cover-display');
    });

});