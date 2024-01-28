document.getElementById('frame').addEventListener('load', function () {
    const frame = this.contentDocument;

    const seekbar = frame.getElementById('seekbarComplete');

    const seekbarRounded = getComputedStyle(seekbar).borderRadius;
    document.getElementById('seekbar-rounded').value = parseInt(seekbarRounded);
    // Event listener para el input de tipo range
    document.getElementById('seekbar-rounded').addEventListener('input', function () {
        // Modificar
        seekbar.style.borderRadius = `${this.value}px`;
    });


    const seekbarHeight = getComputedStyle(seekbar).height;
    document.getElementById('seekbar-height').value = parseInt(seekbarHeight);
    // Event listener para el input de tipo range
    document.getElementById('seekbar-height').addEventListener('input', function () {
        // Modificar
        const seekbarMargin = (11 - parseInt(this.value));
        // console.log(`${seekbarMargin}px`);
        seekbar.style.height = `${this.value}px`;
    });


    const seekbarPercent = frame.getElementById('seekbarPercent');

    const secondaryColor = getComputedStyle(seekbarPercent).backgroundColor;
    document.getElementById('seekbar-secondary-color').value = rgbToHex(secondaryColor);
    // Event listener para el input de tipo range
    document.getElementById('seekbar-secondary-color').addEventListener('input', function () {        
        // Modificar
        const color = hexToRgb(this.value);
        seekbarPercent.style.backgroundColor = `rgba(${color},1)`;
    });


    const mainColor = getComputedStyle(seekbar).backgroundColor;
    document.getElementById('seekbar-main-color').value = rgbToHex(mainColor);
    // Event listener para el input de tipo range
    document.getElementById('seekbar-main-color').addEventListener('input', function () {        
        // Modificar
        const color = hexToRgb(this.value);
        seekbar.style.backgroundColor = `rgba(${color},1)`;
    });

});