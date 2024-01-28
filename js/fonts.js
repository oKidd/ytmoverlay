// Obtén la referencia del elemento select
const fontSelector = document.getElementById("text-font");

// Realiza el fetch a la API de Google Fonts
fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDtc_LJPdx3SROwu7IDnqGkFdYGvdC4brE")
    .then(response => response.json())
    .then(data => {
        // Obtén las fuentes del array items de la respuesta de la API
        const googleFonts = data.items.map(font => font.family);

        // Agrega opciones al select para cada fuente
        googleFonts.forEach(font => {
            const option = document.createElement("option");
            option.text = font;
            option.value = font;
            option.style.fontFamily = `'${font}', sans-serif`;
            fontSelector.add(option);
        });

        // Evento que se activa al seleccionar una fuente
        fontSelector.addEventListener("change", function () {
            // Puedes realizar acciones adicionales al seleccionar una fuente
            const selectedFont = this.value;
            // console.log("Fuente seleccionada:", selectedFont);
            const styleTag = document.getElementById('fontStyles');
            styleTag.textContent += `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=${selectedFont}&display=swap');`;
            this.style.fontFamily = `'${selectedFont}', sans-serif`;
            // console.log(selectedFont)
        });
    })
    .catch(error => console.error('Error al obtener fuentes:', error));
