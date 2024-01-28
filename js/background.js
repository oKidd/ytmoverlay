document.getElementById('frame').addEventListener('load', function () {
    const frame = this.contentDocument;



    const container = frame.getElementById('container');
    const borderRadius = getComputedStyle(container).borderRadius;
    document.getElementById('bg-rounded').value = parseInt(borderRadius);

    // Event listener para el input de tipo range
    document.getElementById('bg-rounded').addEventListener('input', function () {        
        // Modificar
        container.style.borderRadius = `${this.value}px`;
    });



    const bg = frame.getElementById('bg');
    let bgOpacity = getComputedStyle(bg).backgroundColor;
    bgOpacity = bgOpacity.slice(-4);
    bgOpacity = bgOpacity.slice(0, -1);
    document.getElementById('bg-opacity').value = bgOpacity;

    // Event listener para el input de tipo range
    document.getElementById('bg-opacity').addEventListener('input', function () {  
        // Modificar
        let color = hexToRgb(document.getElementById('bg-color').value);
        bg.style.backgroundColor = `rgba(${color},${this.value})`;
        // console.log(`rgba(${color},${this.value})`);
        bgOpacity = this.value;
    });



    let bgColor = getComputedStyle(bg).backgroundColor;
    document.getElementById('bg-color').value = rgbaToHex(bgColor);
    // Event listener para el input de tipo range
    document.getElementById('bg-color').addEventListener('input', function () {        
        // Modificar
        const color = hexToRgb(this.value);
        bg.style.backgroundColor = `rgba(${color},${bgOpacity})`;
    });



    const bgImgUrl = getComputedStyle(container).backgroundImage;
    if(bgImgUrl != "none"){
        // Si tiene imagen
        document.getElementById('bg-image').checked = true;
    }else{
        // No tiene imagen
        document.getElementById('bg-image').checked = false;
    }
    // Event listener para el input de tipo range
    document.getElementById('bg-image').addEventListener('input', function () {        
        // Modificar
        container.classList.toggle('bg-none');
    });

});