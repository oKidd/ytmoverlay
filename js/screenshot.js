const capture = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const iframe = document.getElementById("frame");

    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        const video = document.createElement("video");
        video.srcObject = captureStream;

        // Espera a que el video esté cargado para obtener el ancho y alto
        video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

            // Convierte el contenido del canvas en una URL de datos (data URL)
            const frame = canvas.toDataURL("image/png");

            // Detén las pistas del stream
            captureStream.getTracks().forEach(track => track.stop());

            // Puedes usar la URL para mostrar la captura o descargarla
            console.log("Captura de pantalla realizada:", frame);

            // También puedes crear un enlace para descargar la captura
            const downloadLink = document.createElement('a');
            downloadLink.href = frame;
            downloadLink.download = 'screenshot.png';
            downloadLink.click();
        };

        video.play();
    } catch (err) {
        console.error("Error: " + err);
    }
};
