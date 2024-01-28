// Función para convertir color hexadecimal a RGB
function hexToRgb(hex) {
  // Eliminar el símbolo "#" si está presente
  hex = hex.replace(/^#/, '');

  // Convertir el valor hexadecimal a RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

function rgbaToHex(rgba) {
  const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/;
  const match = rgba.match(rgbaRegex);

  if (!match) {
    console.error('Formato RGBA no válido');
    return null;
  }

  const red = parseInt(match[1]);
  const green = parseInt(match[2]);
  const blue = parseInt(match[3]);

  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor.toUpperCase();
};

function rgbToHex(rgb) {
  // Verifica si el color está en el formato 'rgb(r, g, b)'
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (match) {
    // Convierte los valores a hexadecimal y los concatena
    const hex = "#" +
      ("0" + parseInt(match[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(match[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(match[3], 10).toString(16)).slice(-2);
    return hex.toUpperCase(); // Devuelve el valor en mayúsculas
  } else {
    return null; // Retorna null si el formato no es correcto
  }
}