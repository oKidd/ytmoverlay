const title = "In Fraganti";
const Title = document.getElementById("title");
Title.textContent = title;

const author = "FaceBrooklyn";
const Author = document.getElementById("author");
Author.textContent = author;

const cover = "https://lh3.googleusercontent.com/giqjXAk-IzN53sQwKmqmLZ95-ntX5p-Xn7lP2vZbqETc3SppJShDbcLEiSyf0iqrEC42mw4tLPkiZUAa=w544-h544-l90-rj";
const Cover = document.getElementById("cover");
Cover.src = cover;

const container = document.getElementById("container");
container.style.backgroundImage = `url('${cover}')`;

const duration = "2:43";
const Duration = document.getElementById("duration");
Duration.textContent = duration;

// Saber en que minuto/segundo de la cancion esta posicionado el reproductor.
// Ejemplo: 0:32
const seekbarPosition = "0:27";
const SeekbarPosition = document.getElementById("seekbarPosition");
SeekbarPosition.textContent = seekbarPosition;

// Este es el porcentaje de la barra de reproduccion, es decir:
// 0 es el inicio de cancion, mientras que 1 es el final.
const seekbarPercent = 0.2 * 100;
const SeekbarPercent = document.getElementById("seekbarPercent");
SeekbarPercent.style.width = `${seekbarPercent}%`;

// Función para recargar la página
function recargarPagina() {
    location.reload();
}

// Configurar la recarga cada 1000 milisegundos (1 segundo)
// setInterval(recargarPagina, 2000);