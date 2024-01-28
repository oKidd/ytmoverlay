function updateParagraphValue(rangeId) {
    const range = document.getElementById(rangeId);
    const paragraph = document.getElementById(`${rangeId}-value`);

    if (range && paragraph) {
      paragraph.textContent = `${range.value}%`;
    }
  }

  // Función para configurar eventos de cambio para todos los ranges
  function setupRangeEvents() {
    const ranges = document.querySelectorAll('input[type="range"]');

    ranges.forEach(range => {
      // Establecer el valor inicial al cargar la página
      updateParagraphValue(range.id);

      // Configurar evento de cambio
      range.addEventListener('input', () => {
        updateParagraphValue(range.id);
      });
    });
  }

  // Configurar eventos al cargar la página
  window.addEventListener('load', setupRangeEvents);