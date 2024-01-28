document.getElementById('download').addEventListener('click', function () {
  // Obtener el contenido del iframe con id "frame"
  let contenidoIndex = document.getElementById('frame').contentDocument;

  // Guardar y limpiar el estilo de fondo del elemento con id "container"
  const container = contenidoIndex.getElementById('container');
  const savedContainer = container.style.backgroundImage;
  container.style.backgroundImage = '';

  // Guardar y eliminar el atributo "src" del elemento con id "cover"
  const cover = contenidoIndex.getElementById('cover');
  const savedCover = cover.getAttribute('src');
  cover.removeAttribute('src');

  // Obtener el contenido HTML del iframe
  contenidoIndex = contenidoIndex.documentElement.outerHTML;

  // Restaurar el estilo de fondo del elemento con id "container" y el atributo "src" del elemento con id "cover"
  container.style.backgroundImage = savedContainer;
  cover.setAttribute('src', savedCover);

  // Obtener el contenido del textarea con id "js" del elemento con id "script"
  const script = document.getElementById('script').contentDocument;
  const contenidoJS = script.getElementById('js').outerHTML;

  // Dividir el contenido del textarea "index" en dos partes
  const partesIndex = contenidoIndex.split('<script src="test-info.js"></script>');

  // Combinar las dos partes con el contenido del textarea "js" en el medio
  const contenido1 = partesIndex[0] + contenidoJS + partesIndex[1];

  // Línea adicional de JS
  const lineaJS = "setInterval(recargarPagina, 1000);";

  // Dividir el contenido resultante en dos partes
  const partesIndex2 = contenido1.split('// js');

  // Combinar las dos partes con la línea adicional de JS en el medio
  const contenidoFinal = partesIndex2[0] + lineaJS + partesIndex2[1];

  // Abrir popup con información
  popup();

  // Crear un Blob con el contenido y el tipo MIME del archivo
  const blob = new Blob([contenidoFinal], { type: 'text/plain' });

  // Crear un enlace <a> con el Blob como URL
  const enlace = document.createElement('a');
  enlace.href = window.URL.createObjectURL(blob);

  // Establecer el nombre del archivo
  enlace.download = 'overlay.html';

  // Simular un clic en el enlace para iniciar la descarga
  enlace.click();

  // Limpiar el objeto URL utilizado para el Blob
  window.URL.revokeObjectURL(enlace.href);
});
