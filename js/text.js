document.getElementById('frame').addEventListener('load', function () {
    const frame = this.contentDocument;



    const author = frame.getElementById('author');
    let authorSize = getComputedStyle(author).fontSize;
    authorSize = authorSize.slice(0, -2);
    document.getElementById('artist-size').value = authorSize;
    
    const seekbar = frame.getElementById('seekbar');
    let seekbarMargin = getComputedStyle(seekbar).marginTop;
    seekbarMargin = parseInt(seekbarMargin.slice(0, -2));

    seekbarMargin = 30 - parseInt(authorSize);
    seekbar.style.marginTop = `${seekbarMargin}px`;

    // Event listener para el input de tipo range
    document.getElementById('artist-size').addEventListener('input', function () {
        // Modificar
        seekbarMargin = 25 - parseInt(this.value);
        // console.log(seekbarMargin);
        seekbar.style.marginTop = `${seekbarMargin}px`;
        author.style.fontSize = `${this.value}px`;
    });



    const title = frame.getElementById('title');
    let titleSize = getComputedStyle(title).fontSize;
    titleSize = titleSize.slice(0, -2);
    document.getElementById('title-size').value = titleSize;

    seekbarMargin = 30 - parseInt(titleSize);
    seekbar.style.marginTop = `${seekbarMargin}px`;

    // Event listener para el input de tipo range
    document.getElementById('title-size').addEventListener('input', function () {
        // Modificar
        seekbarMargin = 30 - parseInt(this.value);
        seekbar.style.marginTop = `${seekbarMargin}px`;
        title.style.fontSize = `${this.value}px`;
    });


    const right = frame.getElementById('right');
    let textColor = rgbToHex(getComputedStyle(right).color);
    document.getElementById('text-color').value = textColor;
    // Event listener para el input de tipo range
    document.getElementById('text-color').addEventListener('input', function () {
        // Modificar
        right.style.color = `${this.value}`;
    });



    let font = getComputedStyle(right).fontFamily;
    document.getElementById('text-font').value = font;
    document.getElementById('text-font').style.fontFamily = font;
    const styleTag = document.getElementById('fontStyles');
    styleTag.textContent += `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=${font}&display=swap');`;

    const overlayStyle = frame.getElementById('css');
    overlayStyle.textContent += `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=${font}&display=swap');`;
    right.style.fontFamily =  `'${font}', sans-serif`;

    // Event listener para el input de tipo range
    document.getElementById('text-font').addEventListener('change', function () {
        // Modificar
        const overlayStyle = frame.getElementById('css');
        overlayStyle.textContent += `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=${this.value}&display=swap');`;
        this.style.fontFamily = `'${this.value}', sans-serif`;
        right.style.fontFamily = `'${this.value}', sans-serif`;
    });


});